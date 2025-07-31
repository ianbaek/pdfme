import type { MultiTableSchema, CellContent, CellImageSchema, CellSchema, SingleTableSchema } from './types.js';
import type { PDFRenderProps, Schema, BasePdf, CommonOptions } from '@pdfme/common';
import { Cell, Table, Row, Column } from './classes.js';
import line from '../shapes/line.js';
import cellSchema from './cell.js';
import { getBodyWithRange } from './helper.js';
import { createSingleTable } from './tableHelper.js';
import { pdfRender as barcodePdfRender } from '../barcodes/pdfRender.js';
import imageSchema from '../graphics/image.js';
import { BarcodeSchema } from '../barcodes/types.js';
import { BARCODE_TYPES } from '../barcodes/constants.js';

// Define the CreateTableArgs interface locally since it's not exported from tableHelper.js
interface CreateTableArgs {
  schema: Schema;
  basePdf: BasePdf;
  options: CommonOptions;
  _cache: Map<string | number, unknown>;
}

type Pos = { x: number; y: number };

const linePdfRender = line.pdf;
const cellBasePdfRender = cellSchema.pdf;
const imagePdfRender = imageSchema.pdf;

async function drawCell(arg: PDFRenderProps<MultiTableSchema>, cellInfo: Cell) {
  const cellContent = cellInfo.raw;
  const cellPosition = { x: cellInfo.x, y: cellInfo.y };
  const cellDimensions = { width: cellInfo.width, height: cellInfo.height };

  const baseCellSchemaForRender: CellSchema = {
    name: '',
    type: 'cell',
    position: cellPosition,
    width: cellDimensions.width,
    height: cellDimensions.height,
    fontName: cellInfo.styles.fontName,
    alignment: cellInfo.styles.alignment,
    verticalAlignment: cellInfo.styles.verticalAlignment,
    fontSize: cellInfo.styles.fontSize,
    lineHeight: cellInfo.styles.lineHeight,
    characterSpacing: cellInfo.styles.characterSpacing,
    backgroundColor: cellInfo.styles.backgroundColor,
    fontColor: cellInfo.styles.textColor,
    borderColor: cellInfo.styles.lineColor,
    borderWidth: cellInfo.styles.lineWidth,
    padding: cellInfo.styles.cellPadding,
  };

  if (typeof cellContent === 'string') {
    await cellBasePdfRender({
      ...arg,
      value: cellContent,
      schema: baseCellSchemaForRender,
    });
  } else if (typeof cellContent === 'object' && 'type' in cellContent) {
    await cellBasePdfRender({
      ...arg,
      value: '',
      schema: {
        ...baseCellSchemaForRender,
        fontColor: 'rgba(0,0,0,0)',
      },
    });
    
    const contentWidth = cellDimensions.width - baseCellSchemaForRender.padding.left - baseCellSchemaForRender.padding.right;
    const contentHeight = cellDimensions.height - baseCellSchemaForRender.padding.top - baseCellSchemaForRender.padding.bottom;
    const contentPosition = {
        x: cellPosition.x + baseCellSchemaForRender.padding.left,
        y: cellPosition.y + baseCellSchemaForRender.padding.top,
    };

    if (cellContent.type === 'image' && imagePdfRender) {
      const image = cellContent;
      const imageSchemaForRender: CellImageSchema = {
          name: '',
          type: 'image',
          content: image.content,
          position: contentPosition,
          width: contentWidth,
          height: contentHeight,
      };
      await imagePdfRender({
        ...arg,
        value: image.content,
        schema: imageSchemaForRender,
      });
    } else if (BARCODE_TYPES.includes(cellContent.type as typeof BARCODE_TYPES[number]) && barcodePdfRender) {
        const barcode = cellContent as BarcodeSchema;
        const barcodeSchemaForRender = {
            ...barcode,
            position: contentPosition,
            width: contentWidth,
            height: contentHeight,
        };
        await barcodePdfRender({
            ...arg,
            value: barcode.content || '',
            schema: barcodeSchemaForRender,
        });
    }
  }
}

async function drawRow(
  arg: PDFRenderProps<MultiTableSchema>,
  table: Table,
  row: Row,
  cursor: Pos,
  columns: Column[],
) {
  cursor.x = table.settings.margin.left;
  for (const column of columns) {
    const cell = row.cells[column.index];
    if (!cell) {
      cursor.x += column.width;
      continue;
    }

    cell.x = cursor.x;
    cell.y = cursor.y;

    await drawCell(arg, cell);

    cursor.x += column.width;
  }
  cursor.y += row.height;
}

async function drawTableBorder(
  arg: PDFRenderProps<MultiTableSchema>,
  table: Table,
  startPos: Pos,
  cursor: Pos,
  isLastTable: boolean = true,
) {
  const lineWidth = table.settings.tableLineWidth;
  const lineColor = table.settings.tableLineColor;
  if (!lineWidth || !lineColor) return;
  
  // For multi-table groups, we need to handle borders differently
  // to avoid double borders between consecutive tables
  const borderWidth = table.getWidth();
  const borderHeight = cursor.y - startPos.y;
  
  // Draw top border only for first table in group
  await linePdfRender({
    ...arg,
    schema: {
      name: '',
      type: 'line',
      position: { x: startPos.x, y: startPos.y },
      width: borderWidth,
      height: lineWidth,
      color: lineColor,
      readOnly: true,
    },
  });
  
  // Draw left border
  await linePdfRender({
    ...arg,
    schema: {
      name: '',
      type: 'line',
      position: { x: startPos.x, y: startPos.y },
      width: lineWidth,
      height: borderHeight,
      color: lineColor,
      readOnly: true,
    },
  });
  
  // Draw right border
  await linePdfRender({
    ...arg,
    schema: {
      name: '',
      type: 'line',
      position: { x: startPos.x + borderWidth - lineWidth, y: startPos.y },
      width: lineWidth,
      height: borderHeight,
      color: lineColor,
      readOnly: true,
    },
  });
  
  // Draw bottom border only for last table in group
  if (isLastTable) {
    await linePdfRender({
      ...arg,
      schema: {
        name: '',
        type: 'line',
        position: { x: startPos.x, y: startPos.y + borderHeight - lineWidth },
        width: borderWidth,
        height: lineWidth,
        color: lineColor,
        readOnly: true,
      },
    });
  }
}

async function drawTable(
  arg: PDFRenderProps<MultiTableSchema>, 
  table: Table, 
  isLastTable: boolean = true
): Promise<void> {
  const settings = table.settings;
  const startY = settings.startY;
  const margin = settings.margin;
  const cursor = { x: margin.left, y: startY };

  const startPos = Object.assign({}, cursor);

  if (settings.showHead) {
    for (const row of table.head) {
      await drawRow(arg, table, row, cursor, table.columns);
    }
  }

  for (const row of table.body) {
    await drawRow(arg, table, row, cursor, table.columns);
  }

  await drawTableBorder(arg, table, startPos, cursor, isLastTable);
}

// Convert single table schema to table schema for rendering
function convertSingleTableToTableSchema(singleTable: SingleTableSchema, multiTableSchema: MultiTableSchema) {
  return {
    ...multiTableSchema,
    showHead: singleTable.showHead,
    head: singleTable.head,
    headWidthPercentages: singleTable.headWidthPercentages,
  };
}

export const pdfRender = async (arg: PDFRenderProps<MultiTableSchema>) => {
  const { value, schema, basePdf, options, _cache } = arg;

  // Get content data
  const content = getBodyWithRange(
    typeof value !== 'string' ? (value ? JSON.stringify(value) : '[]') : value || '[]',
    schema.__bodyRange,
  ) as CellContent[][];

  const tables = schema.tables || [];
  let currentY = schema.position.y;
  const tableGroupSpacing = schema.tableGroupSpacing || 5; // Spacing between table groups

  // For each row in content data, render all tables
  for (let rowIndex = 0; rowIndex < content.length; rowIndex++) {
    const rowData = content[rowIndex];
    
    // Split row data for each table based on their column counts
    let dataIndex = 0;
    for (const singleTable of tables) {
      const columnCount = singleTable.head.length;
      const tableRowData = rowData.slice(dataIndex, dataIndex + columnCount);
      
      // Convert single table to table schema for rendering
      const tableSchema = convertSingleTableToTableSchema(singleTable, schema);
      
      const createTableArgs: CreateTableArgs = {
        schema: tableSchema,
        basePdf,
        options,
        _cache,
      };

      // Create table with single row data
      const table = await createSingleTable([tableRowData], createTableArgs, tables.indexOf(singleTable));
      
      // Set table position
      table.settings.startY = currentY;
      
      // Render table with border control
      const isLastTable = tables.indexOf(singleTable) === tables.length - 1;
      await drawTable(arg, table, isLastTable);
      
      // Move to next table position
      const tableHeight = table.getHeight();
      currentY += tableHeight; // No spacing between tables in the same group
      
      dataIndex += columnCount;
    }
    
    // Add spacing between table groups
    currentY += tableGroupSpacing;
  }
};
