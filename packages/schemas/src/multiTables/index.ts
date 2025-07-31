import type { Plugin } from '@pdfme/common';
import type { MultiTableSchema } from './types.js';
import { pdfRender } from './pdfRender.js';
import { uiRender } from './uiRender.js';
import { propPanel } from './propPanel.js';
import { TableCellsSplit } from 'lucide';
import { createSvgStr } from '../utils.js';

const multiTableSchema: Plugin<MultiTableSchema> = {
  pdf: pdfRender,
  ui: uiRender,
  propPanel,
  icon: createSvgStr(TableCellsSplit),
};
export default multiTableSchema;
