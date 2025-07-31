import { Schema, BasePdf, CommonOptions } from '@pdfme/common';
import { createSingleTable } from './tableHelper.js';
import { getBodyWithRange, getBody } from './helper.js';
import { MultiTableSchema } from './types.js';

export const getDynamicHeightsForMultiTable = async (
  value: string,
  args: {
    schema: Schema;
    basePdf: BasePdf;
    options: CommonOptions;
    _cache: Map<string | number, unknown>;
  },
): Promise<number[]> => {
  if (args.schema.type !== 'multiTable') return Promise.resolve([args.schema.height]);
  const schema = args.schema as MultiTableSchema;
  const body =
    schema.__bodyRange?.start === 0 ? getBody(value) : getBodyWithRange(value, schema.__bodyRange);
  
  const tables = schema.tables || [];
  if (tables.length === 0) return Promise.resolve([args.schema.height]);

  // Calculate height for each row
  const rowHeights: number[] = [];
  const tableGroupSpacing = schema.tableGroupSpacing || 5; // Spacing between table groups

  // For each row in content data, calculate height for all tables
  for (let rowIndex = 0; rowIndex < body.length; rowIndex++) {
    const rowData = body[rowIndex];
    
    // Split row data for each table based on their column counts
    let dataIndex = 0;
    let rowHeight = 0;
    
    for (const singleTable of tables) {
      const columnCount = singleTable.head.length;
      const tableRowData = rowData.slice(dataIndex, dataIndex + columnCount);
      
      // Create table schema for rendering
      const tableSchema = {
        ...schema,
        showHead: singleTable.showHead,
        head: singleTable.head,
        headWidthPercentages: singleTable.headWidthPercentages,
      };
      
      // Create table with single row data
      const table = await createSingleTable([tableRowData], { ...args, schema: tableSchema }, tables.indexOf(singleTable));
      
      // Add table height
      rowHeight += table.getHeight(); // No spacing between tables in the same group
      
      dataIndex += columnCount;
    }
    
    // Add spacing between table groups
    if (rowIndex < body.length - 1) {
      rowHeight += tableGroupSpacing;
    }
    rowHeights.push(rowHeight);
  }

  return Promise.resolve(rowHeights);
};
