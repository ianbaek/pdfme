"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdfRender_js_1 = require("./pdfRender.js");
const uiRender_js_1 = require("./uiRender.js");
const propPanel_js_1 = require("./propPanel.js");
const lucide_1 = require("lucide");
const utils_js_1 = require("../utils.js");
const multiTableSchema = {
    pdf: pdfRender_js_1.pdfRender,
    ui: uiRender_js_1.uiRender,
    propPanel: propPanel_js_1.propPanel,
    icon: (0, utils_js_1.createSvgStr)(lucide_1.TableCellsSplit),
};
exports.default = multiTableSchema;
//# sourceMappingURL=index.js.map