"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("../utils.js");
const constants_js_1 = require("../constants.js");
const lucide_1 = require("lucide");
const DEFAULT_LINE_COLOR = '#000000';
const lineSchema = {
    pdf: (arg) => {
        const { page, schema, options } = arg;
        if (schema.width === 0 || schema.height === 0 || !schema.color)
            return;
        const { colorType } = options;
        const pageHeight = page.getHeight();
        const { width, height, rotate, position: { x, y }, opacity, } = (0, utils_js_1.convertForPdfLayoutProps)({ schema, pageHeight, applyRotateTranslate: false });
        const pivot = { x: x + width / 2, y: y + height / 2 };
        page.drawLine({
            start: (0, utils_js_1.rotatePoint)({ x, y: y + height / 2 }, pivot, rotate.angle),
            end: (0, utils_js_1.rotatePoint)({ x: x + width, y: y + height / 2 }, pivot, rotate.angle),
            thickness: height,
            color: (0, utils_js_1.hex2PrintingColor)(schema.color ?? DEFAULT_LINE_COLOR, colorType),
            opacity: opacity,
        });
    },
    ui: (arg) => {
        const { schema, rootElement } = arg;
        const div = document.createElement('div');
        div.style.backgroundColor = schema.color ?? 'transparent';
        div.style.width = '100%';
        div.style.height = '100%';
        rootElement.appendChild(div);
    },
    propPanel: {
        schema: ({ i18n }) => ({
            color: {
                title: i18n('schemas.color'),
                type: 'string',
                widget: 'color',
                props: {
                    disabledAlpha: true,
                },
                required: true,
                rules: [{ pattern: constants_js_1.HEX_COLOR_PATTERN, message: i18n('validation.hexColor') }],
            },
        }),
        defaultSchema: {
            name: '',
            type: 'line',
            position: { x: 0, y: 0 },
            width: 50,
            height: 0.5,
            rotate: 0,
            opacity: 1,
            readOnly: true,
            color: DEFAULT_LINE_COLOR,
        },
    },
    icon: (0, utils_js_1.createSvgStr)(lucide_1.Minus),
};
exports.default = lineSchema;
//# sourceMappingURL=line.js.map