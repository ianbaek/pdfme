"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDynamicHeightsForTable = void 0;
const tableHelper_js_1 = require("./tableHelper.js");
const helper_js_1 = require("./helper.js");
const getDynamicHeightsForTable = async (value, args) => {
    if (args.schema.type !== 'table')
        return Promise.resolve([args.schema.height]);
    const schema = args.schema;
    const body = schema.__bodyRange?.start === 0 ? (0, helper_js_1.getBody)(value) : (0, helper_js_1.getBodyWithRange)(value, schema.__bodyRange);
    const table = await (0, tableHelper_js_1.createSingleTable)(body, args);
    return schema.showHead
        ? table.allRows().map((row) => row.height)
        : [0].concat(table.body.map((row) => row.height));
};
exports.getDynamicHeightsForTable = getDynamicHeightsForTable;
//# sourceMappingURL=dynamicTemplate.js.map