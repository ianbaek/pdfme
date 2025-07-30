import type { CustomTableSchema, CellContent, CellImageSchema, CellSchema } from './types.js';
import type { PDFRenderProps, Schema, BasePdf, CommonOptions } from '@pdfme/common';
import { Cell, Table, Row, Column } from './classes.js';
import { rectangle } from '../shapes/rectAndEllipse.js';
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

const rectanglePdfRender = rectangle.pdf;
const cellBasePdfRender = cellSchema.pdf;
const imagePdfRender = imageSchema.pdf;

async function drawCell(arg: PDFRenderProps<CustomTableSchema>, cellInfo: Cell) {
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
  arg: PDFRenderProps<CustomTableSchema>,
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
  arg: PDFRenderProps<CustomTableSchema>,
  table: Table,
  startPos: Pos,
  cursor: Pos,
) {
  const lineWidth = table.settings.tableLineWidth;
  const lineColor = table.settings.tableLineColor;
  if (!lineWidth || !lineColor) return;
  await rectanglePdfRender({
    ...arg,
    schema: {
      name: '',
      type: 'rectangle',
      borderWidth: lineWidth,
      borderColor: lineColor,
      color: '',
      position: { x: startPos.x, y: startPos.y },
      width: table.getWidth(),
      height: cursor.y - startPos.y,
      readOnly: true,
    },
  });
}

async function drawTable(arg: PDFRenderProps<CustomTableSchema>, table: Table): Promise<void> {
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

  await drawTableBorder(arg, table, startPos, cursor);
}

export const pdfRender = async (arg: PDFRenderProps<CustomTableSchema>) => {
  const { value, schema, basePdf, options, _cache } = arg;

  const body = getBodyWithRange(
    typeof value !== 'string' ? (value ? JSON.stringify(value) : '[]') : value || '[]',
    schema.__bodyRange,
  );

  const createTableArgs: CreateTableArgs = {
    schema,
    basePdf,
    options,
    _cache,
  };

  const table = await createSingleTable(body as CellContent[][], createTableArgs);

  await drawTable(arg, table);
};
