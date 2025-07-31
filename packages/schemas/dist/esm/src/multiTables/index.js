import { pdfRender } from './pdfRender.js';
import { uiRender } from './uiRender.js';
import { propPanel } from './propPanel.js';
import { TableCellsSplit } from 'lucide';
import { createSvgStr } from '../utils.js';
const multiTableSchema = {
    pdf: pdfRender,
    ui: uiRender,
    propPanel,
    icon: createSvgStr(TableCellsSplit),
};
export default multiTableSchema;
//# sourceMappingURL=index.js.map