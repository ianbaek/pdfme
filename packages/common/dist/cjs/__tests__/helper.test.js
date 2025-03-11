"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = __importStar(require("path"));
const helper_js_1 = require("../src/helper.js");
const index_js_1 = require("../src/index.js");
const sansData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSansJP.ttf`));
const serifData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSerifJP.ttf`));
const getSampleFont = () => ({
    SauceHanSansJP: { fallback: true, data: sansData },
    SauceHanSerifJP: { data: serifData },
});
const getTemplate = () => ({
    basePdf: index_js_1.BLANK_PDF,
    schemas: [
        [
            {
                name: 'a',
                content: 'a',
                type: 'text',
                fontName: 'SauceHanSansJP',
                position: { x: 0, y: 0 },
                width: 100,
                height: 100,
            },
            {
                name: 'b',
                content: 'b',
                type: 'text',
                position: { x: 0, y: 0 },
                width: 100,
                height: 100,
            },
        ],
    ],
});
describe('mm2pt test', () => {
    it('converts millimeters to points', () => {
        expect((0, helper_js_1.mm2pt)(1)).toEqual(2.8346);
        expect((0, helper_js_1.mm2pt)(10)).toEqual(28.346);
        expect((0, helper_js_1.mm2pt)(4395.12)).toEqual(12458.407152);
    });
});
describe('pt2mm test', () => {
    it('converts points to millimeters', () => {
        expect((0, helper_js_1.pt2mm)(1)).toEqual(0.3528);
        expect((0, helper_js_1.pt2mm)(2.8346)).toEqual(1.00004688); // close enough!
        expect((0, helper_js_1.pt2mm)(10)).toEqual(3.528);
        expect((0, helper_js_1.pt2mm)(5322.98)).toEqual(1877.947344);
    });
});
describe('pt2px test', () => {
    it('converts points to pixels', () => {
        expect((0, helper_js_1.pt2px)(1)).toEqual(index_js_1.PT_TO_PX_RATIO);
        expect((0, helper_js_1.pt2px)(1)).toEqual(1.333);
        expect((0, helper_js_1.pt2px)(2.8346)).toEqual(3.7785218);
        expect((0, helper_js_1.pt2px)(10)).toEqual(13.33);
        expect((0, helper_js_1.pt2px)(5322.98)).toEqual(7095.532339999999);
    });
});
describe('isHexValid test', () => {
    test('valid hex', () => {
        expect((0, helper_js_1.isHexValid)('#fff')).toEqual(true);
        expect((0, helper_js_1.isHexValid)('#ffffff')).toEqual(true);
        expect((0, helper_js_1.isHexValid)('#ffffff00')).toEqual(true);
        expect((0, helper_js_1.isHexValid)('#ffffff00')).toEqual(true);
    });
    test('invalid hex', () => {
        expect((0, helper_js_1.isHexValid)('#ff')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#fffff')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#ffffff000')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#ffffff0000')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#ffffff00000')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#ffffff000000')).toEqual(false);
        expect((0, helper_js_1.isHexValid)('#pdfme123')).toEqual(false);
    });
});
describe('checkFont test', () => {
    test('success test: no fontName in Schemas', () => {
        const _getTemplate = () => ({
            basePdf: index_js_1.BLANK_PDF,
            schemas: [
                [
                    {
                        name: 'a',
                        content: 'a',
                        type: 'text',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    {
                        name: 'b',
                        content: 'b',
                        type: 'text',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                ],
            ],
        });
        try {
            (0, helper_js_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: fontName in Schemas(fallback font)', () => {
        try {
            (0, helper_js_1.checkFont)({ template: getTemplate(), font: getSampleFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: fontName in Schemas(not fallback font)', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData },
            SauceHanSerifJP: { fallback: true, data: serifData },
        });
        try {
            (0, helper_js_1.checkFont)({ template: getTemplate(), font: getFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('fail test: no fallback font', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData },
            SauceHanSerifJP: { data: serifData },
        });
        try {
            (0, helper_js_1.checkFont)({ template: getTemplate(), font: getFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] fallback flag is not found in font. true fallback flag must be only one.
Check this document: https://pdfme.com/docs/custom-fonts#about-font-type`);
        }
    });
    test('fail test: too many fallback font', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData, fallback: true },
            SauceHanSerifJP: { data: serifData, fallback: true },
        });
        try {
            (0, helper_js_1.checkFont)({ template: getTemplate(), font: getFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] 2 fallback flags found in font. true fallback flag must be only one.
Check this document: https://pdfme.com/docs/custom-fonts#about-font-type`);
        }
    });
    test('fail test: fontName in Schemas not found in font(single)', () => {
        const _getTemplate = () => ({
            basePdf: index_js_1.BLANK_PDF,
            schemas: [
                [
                    {
                        name: 'a',
                        type: 'text',
                        content: 'a',
                        fontName: 'SauceHanSansJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    {
                        name: 'b',
                        type: 'text',
                        content: 'b',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                ],
            ],
        });
        try {
            (0, helper_js_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] SauceHanSansJP2 of template.schemas is not found in font.
Check this document: https://pdfme.com/docs/custom-fonts`);
        }
    });
    test('fail test: fontName in Schemas not found in font(single)', () => {
        const _getTemplate = () => ({
            basePdf: index_js_1.BLANK_PDF,
            schemas: [
                [
                    {
                        name: 'a',
                        type: 'text',
                        content: 'a',
                        fontName: 'SauceHanSansJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    {
                        name: 'b',
                        type: 'text',
                        content: 'b',
                        fontName: 'SauceHanSerifJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                ],
            ],
        });
        try {
            (0, helper_js_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] SauceHanSansJP2,SauceHanSerifJP2 of template.schemas is not found in font.
Check this document: https://pdfme.com/docs/custom-fonts`);
        }
    });
});
describe('checkPlugins test', () => {
    const plugins = {
        myText: {
            pdf: async () => { },
            ui: async () => { },
            propPanel: {
                schema: {},
                defaultSchema: {
                    type: 'myText',
                    name: 'myText',
                    content: '',
                    position: { x: 0, y: 0 },
                    width: 100,
                    height: 100,
                },
            },
        },
        myImage: {
            pdf: async () => { },
            ui: async () => { },
            propPanel: {
                schema: {},
                defaultSchema: {
                    type: 'myImage',
                    name: 'myImage',
                    content: '',
                    position: { x: 0, y: 0 },
                    width: 100,
                    height: 100,
                },
            },
        },
    };
    test('success test: no type in Schemas(no plugins)', () => {
        try {
            const template = getTemplate();
            template.schemas = [];
            (0, helper_js_1.checkPlugins)({ template, plugins: {} });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: no type in Schemas(with plugins)', () => {
        try {
            const template = getTemplate();
            template.schemas = [];
            (0, helper_js_1.checkPlugins)({ template, plugins });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: type in Schemas(single)', () => {
        try {
            const template = getTemplate();
            template.schemas[0][0].type = 'myText';
            template.schemas[0][1].type = 'myText';
            (0, helper_js_1.checkPlugins)({ template, plugins });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: type in Schemas(multiple)', () => {
        try {
            const template = getTemplate();
            template.schemas[0][0].type = 'myText';
            template.schemas[0][1].type = 'myImage';
            (0, helper_js_1.checkPlugins)({ template, plugins });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('fail test: type in Schemas not found in plugins(single)', () => {
        try {
            const template = getTemplate();
            template.schemas[0][0].type = 'fail';
            template.schemas[0][1].type = 'myImage';
            (0, helper_js_1.checkPlugins)({ template, plugins });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] fail of template.schemas is not found in plugins.`);
        }
    });
    test('fail test: type in Schemas not found in plugins(multiple)', () => {
        try {
            const template = getTemplate();
            template.schemas[0][0].type = 'fail';
            template.schemas[0][1].type = 'fail2';
            (0, helper_js_1.checkPlugins)({ template, plugins });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual(`[@pdfme/common] fail,fail2 of template.schemas is not found in plugins.`);
        }
    });
});
describe('migrateTemplate', () => {
    it('should convert LegacySchemaPageArray to SchemaPageArray', () => {
        const legacyTemplate = {
            schemas: [
                {
                    field1: {
                        type: 'text',
                        content: 'Field 1',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                    field2: {
                        type: 'text',
                        content: 'Field 2',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                },
                {
                    field3: {
                        type: 'text',
                        content: 'Field 3',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                },
            ],
        };
        (0, helper_js_1.migrateTemplate)(legacyTemplate);
        const expectedSchemaPageArray = [
            [
                {
                    name: 'field1',
                    type: 'text',
                    content: 'Field 1',
                    width: 45,
                    height: 10,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    name: 'field2',
                    type: 'text',
                    content: 'Field 2',
                    width: 45,
                    height: 10,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            ],
            [
                {
                    name: 'field3',
                    type: 'text',
                    content: 'Field 3',
                    width: 45,
                    height: 10,
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            ],
        ];
        expect(legacyTemplate.schemas).toEqual(expectedSchemaPageArray);
    });
    it('should not modify already SchemaPageArray', () => {
        const pagedTemplate = {
            schemas: [
                [
                    {
                        name: 'field1',
                        type: 'text',
                        content: 'Field 1',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                    {
                        name: 'field2',
                        type: 'text',
                        content: 'Field 2',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                ],
                [
                    {
                        name: 'field3',
                        type: 'text',
                        content: 'Field 3',
                        width: 45,
                        height: 10,
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                ],
            ],
        };
        const before = JSON.parse(JSON.stringify(pagedTemplate));
        (0, helper_js_1.migrateTemplate)(pagedTemplate);
        expect(pagedTemplate.schemas).toEqual(before.schemas);
    });
});
describe('getB64BasePdf', () => {
    test('base64 string', async () => {
        const result = await (0, index_js_1.getB64BasePdf)(index_js_1.BLANK_PDF);
        expect(typeof result).toBe('string');
    });
    test('Uint8Array', async () => {
        const result = await (0, index_js_1.getB64BasePdf)(new Uint8Array([10, 20, 30, 40, 50]));
        expect(typeof result).toBe('string');
    });
});
//# sourceMappingURL=helper.test.js.map