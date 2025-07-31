import { createSingleTable } from './tableHelper.js';
import { getBodyWithRange, getBody } from './helper.js';
export const getDynamicHeightsForTable = async (value, args) => {
    if (args.schema.type !== 'table')
        return Promise.resolve([args.schema.height]);
    const schema = args.schema;
    const body = schema.__bodyRange?.start === 0 ? getBody(value) : getBodyWithRange(value, schema.__bodyRange);
    const table = await createSingleTable(body, args);
    return schema.showHead
        ? table.allRows().map((row) => row.height)
        : [0].concat(table.body.map((row) => row.height));
};
//# sourceMappingURL=dynamicTemplate.js.map