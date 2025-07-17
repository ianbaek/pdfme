import { z } from 'zod';
export declare const Field: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
}, {
    name: string;
    type: string;
}>;
export declare const Lang: z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>;
export declare const Dict: z.ZodObject<{
    cancel: z.ZodString;
    close: z.ZodString;
    set: z.ZodString;
    clear: z.ZodString;
    field: z.ZodString;
    fieldName: z.ZodString;
    align: z.ZodString;
    width: z.ZodString;
    opacity: z.ZodString;
    height: z.ZodString;
    rotate: z.ZodString;
    edit: z.ZodString;
    required: z.ZodString;
    editable: z.ZodString;
    fillable: z.ZodString;
    plsInputName: z.ZodString;
    fieldMustUniq: z.ZodString;
    notUniq: z.ZodString;
    noKeyName: z.ZodString;
    fieldsList: z.ZodString;
    editField: z.ZodString;
    type: z.ZodString;
    errorOccurred: z.ZodString;
    errorBulkUpdateFieldName: z.ZodString;
    commitBulkUpdateFieldName: z.ZodString;
    bulkUpdateFieldName: z.ZodString;
    addPageAfter: z.ZodString;
    removePage: z.ZodString;
    removePageConfirm: z.ZodString;
    alreadyUsed: z.ZodString;
    availableDynamicFields: z.ZodString;
    'validation.uniqueName': z.ZodString;
    'validation.hexColor': z.ZodString;
    'validation.dateTimeFormat': z.ZodString;
    'schemas.color': z.ZodString;
    'schemas.borderWidth': z.ZodString;
    'schemas.borderColor': z.ZodString;
    'schemas.backgroundColor': z.ZodString;
    'schemas.textColor': z.ZodString;
    'schemas.bgColor': z.ZodString;
    'schemas.horizontal': z.ZodString;
    'schemas.vertical': z.ZodString;
    'schemas.left': z.ZodString;
    'schemas.center': z.ZodString;
    'schemas.right': z.ZodString;
    'schemas.top': z.ZodString;
    'schemas.middle': z.ZodString;
    'schemas.bottom': z.ZodString;
    'schemas.padding': z.ZodString;
    'schemas.text.fontName': z.ZodString;
    'schemas.text.size': z.ZodString;
    'schemas.text.spacing': z.ZodString;
    'schemas.text.textAlign': z.ZodString;
    'schemas.text.verticalAlign': z.ZodString;
    'schemas.text.lineHeight': z.ZodString;
    'schemas.text.min': z.ZodString;
    'schemas.text.max': z.ZodString;
    'schemas.text.fit': z.ZodString;
    'schemas.text.dynamicFontSize': z.ZodString;
    'schemas.text.format': z.ZodString;
    'schemas.radius': z.ZodString;
    'schemas.mvt.typingInstructions': z.ZodString;
    'schemas.mvt.sampleField': z.ZodString;
    'schemas.mvt.variablesSampleData': z.ZodString;
    'schemas.barcodes.barColor': z.ZodString;
    'schemas.barcodes.includetext': z.ZodString;
    'schemas.table.alternateBackgroundColor': z.ZodString;
    'schemas.table.tableStyle': z.ZodString;
    'schemas.table.showHead': z.ZodString;
    'schemas.table.headStyle': z.ZodString;
    'schemas.table.bodyStyle': z.ZodString;
    'schemas.table.columnStyle': z.ZodString;
    'schemas.date.format': z.ZodString;
    'schemas.date.locale': z.ZodString;
    'schemas.select.options': z.ZodString;
    'schemas.select.optionPlaceholder': z.ZodString;
    'schemas.radioGroup.groupName': z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    cancel: string;
    close: string;
    set: string;
    clear: string;
    field: string;
    fieldName: string;
    align: string;
    width: string;
    opacity: string;
    height: string;
    rotate: string;
    edit: string;
    required: string;
    editable: string;
    fillable: string;
    plsInputName: string;
    fieldMustUniq: string;
    notUniq: string;
    noKeyName: string;
    fieldsList: string;
    editField: string;
    errorOccurred: string;
    errorBulkUpdateFieldName: string;
    commitBulkUpdateFieldName: string;
    bulkUpdateFieldName: string;
    addPageAfter: string;
    removePage: string;
    removePageConfirm: string;
    alreadyUsed: string;
    availableDynamicFields: string;
    'validation.uniqueName': string;
    'validation.hexColor': string;
    'validation.dateTimeFormat': string;
    'schemas.color': string;
    'schemas.borderWidth': string;
    'schemas.borderColor': string;
    'schemas.backgroundColor': string;
    'schemas.textColor': string;
    'schemas.bgColor': string;
    'schemas.horizontal': string;
    'schemas.vertical': string;
    'schemas.left': string;
    'schemas.center': string;
    'schemas.right': string;
    'schemas.top': string;
    'schemas.middle': string;
    'schemas.bottom': string;
    'schemas.padding': string;
    'schemas.text.fontName': string;
    'schemas.text.size': string;
    'schemas.text.spacing': string;
    'schemas.text.textAlign': string;
    'schemas.text.verticalAlign': string;
    'schemas.text.lineHeight': string;
    'schemas.text.min': string;
    'schemas.text.max': string;
    'schemas.text.fit': string;
    'schemas.text.dynamicFontSize': string;
    'schemas.text.format': string;
    'schemas.radius': string;
    'schemas.mvt.typingInstructions': string;
    'schemas.mvt.sampleField': string;
    'schemas.mvt.variablesSampleData': string;
    'schemas.barcodes.barColor': string;
    'schemas.barcodes.includetext': string;
    'schemas.table.alternateBackgroundColor': string;
    'schemas.table.tableStyle': string;
    'schemas.table.showHead': string;
    'schemas.table.headStyle': string;
    'schemas.table.bodyStyle': string;
    'schemas.table.columnStyle': string;
    'schemas.date.format': string;
    'schemas.date.locale': string;
    'schemas.select.options': string;
    'schemas.select.optionPlaceholder': string;
    'schemas.radioGroup.groupName': string;
}, {
    type: string;
    cancel: string;
    close: string;
    set: string;
    clear: string;
    field: string;
    fieldName: string;
    align: string;
    width: string;
    opacity: string;
    height: string;
    rotate: string;
    edit: string;
    required: string;
    editable: string;
    fillable: string;
    plsInputName: string;
    fieldMustUniq: string;
    notUniq: string;
    noKeyName: string;
    fieldsList: string;
    editField: string;
    errorOccurred: string;
    errorBulkUpdateFieldName: string;
    commitBulkUpdateFieldName: string;
    bulkUpdateFieldName: string;
    addPageAfter: string;
    removePage: string;
    removePageConfirm: string;
    alreadyUsed: string;
    availableDynamicFields: string;
    'validation.uniqueName': string;
    'validation.hexColor': string;
    'validation.dateTimeFormat': string;
    'schemas.color': string;
    'schemas.borderWidth': string;
    'schemas.borderColor': string;
    'schemas.backgroundColor': string;
    'schemas.textColor': string;
    'schemas.bgColor': string;
    'schemas.horizontal': string;
    'schemas.vertical': string;
    'schemas.left': string;
    'schemas.center': string;
    'schemas.right': string;
    'schemas.top': string;
    'schemas.middle': string;
    'schemas.bottom': string;
    'schemas.padding': string;
    'schemas.text.fontName': string;
    'schemas.text.size': string;
    'schemas.text.spacing': string;
    'schemas.text.textAlign': string;
    'schemas.text.verticalAlign': string;
    'schemas.text.lineHeight': string;
    'schemas.text.min': string;
    'schemas.text.max': string;
    'schemas.text.fit': string;
    'schemas.text.dynamicFontSize': string;
    'schemas.text.format': string;
    'schemas.radius': string;
    'schemas.mvt.typingInstructions': string;
    'schemas.mvt.sampleField': string;
    'schemas.mvt.variablesSampleData': string;
    'schemas.barcodes.barColor': string;
    'schemas.barcodes.includetext': string;
    'schemas.table.alternateBackgroundColor': string;
    'schemas.table.tableStyle': string;
    'schemas.table.showHead': string;
    'schemas.table.headStyle': string;
    'schemas.table.bodyStyle': string;
    'schemas.table.columnStyle': string;
    'schemas.date.format': string;
    'schemas.date.locale': string;
    'schemas.select.options': string;
    'schemas.select.optionPlaceholder': string;
    'schemas.radioGroup.groupName': string;
}>;
export declare const Mode: z.ZodEnum<["viewer", "form", "designer"]>;
export declare const ColorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
export declare const Size: z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
}, {
    width: number;
    height: number;
}>;
export declare const Schema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export declare const SchemaForUI: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, {
    id: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    width: number;
    height: number;
    position: {
        x: number;
        y: number;
    };
    id: string;
    opacity?: number | undefined;
    rotate?: number | undefined;
    required?: boolean | undefined;
    fillable?: boolean | undefined;
    content?: string | undefined;
    readOnly?: boolean | undefined;
    __bodyRange?: {
        start: number;
        end?: number | undefined;
    } | undefined;
    __isSplit?: boolean | undefined;
}, {
    name: string;
    type: string;
    width: number;
    height: number;
    position: {
        x: number;
        y: number;
    };
    id: string;
    opacity?: number | undefined;
    rotate?: number | undefined;
    required?: boolean | undefined;
    fillable?: boolean | undefined;
    content?: string | undefined;
    readOnly?: boolean | undefined;
    __bodyRange?: {
        start: number;
        end?: number | undefined;
    } | undefined;
    __isSplit?: boolean | undefined;
}>;
export declare const BlankPdf: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
    staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    padding: [number, number, number, number];
    staticSchema?: z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
}, {
    width: number;
    height: number;
    padding: [number, number, number, number];
    staticSchema?: z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
}>;
export declare const CustomPdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
export declare const BasePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
    staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    padding: [number, number, number, number];
    staticSchema?: z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
}, {
    width: number;
    height: number;
    padding: [number, number, number, number];
    staticSchema?: z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
}>]>;
export declare const LegacySchemaPageArray: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>>, "many">;
export declare const SchemaPageArray: z.ZodArray<z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    type: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
    opacity: z.ZodOptional<z.ZodNumber>;
    readOnly: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    fillable: z.ZodOptional<z.ZodBoolean>;
    __bodyRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodNumber;
        end: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        start: number;
        end?: number | undefined;
    }, {
        start: number;
        end?: number | undefined;
    }>>;
    __isSplit: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>, "many">, "many">;
export declare const Template: z.ZodObject<{
    schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
    basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
        staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>]>;
    pdfmeVersion: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
    basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
        staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>]>;
    pdfmeVersion: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rotate: z.ZodOptional<z.ZodNumber>;
        opacity: z.ZodOptional<z.ZodNumber>;
        readOnly: z.ZodOptional<z.ZodBoolean>;
        required: z.ZodOptional<z.ZodBoolean>;
        fillable: z.ZodOptional<z.ZodBoolean>;
        __bodyRange: z.ZodOptional<z.ZodObject<{
            start: z.ZodNumber;
            end: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            start: number;
            end?: number | undefined;
        }, {
            start: number;
            end?: number | undefined;
        }>>;
        __isSplit: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
    basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
        staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }, {
        width: number;
        height: number;
        padding: [number, number, number, number];
        staticSchema?: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>]>;
    pdfmeVersion: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const Inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>, "many">;
export declare const Font: z.ZodRecord<z.ZodString, z.ZodObject<{
    data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
    fallback: z.ZodOptional<z.ZodBoolean>;
    subset: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
    fallback?: boolean | undefined;
    subset?: boolean | undefined;
}, {
    data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
    fallback?: boolean | undefined;
    subset?: boolean | undefined;
}>>;
export declare const Plugin: z.ZodObject<{
    ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    propPanel: z.ZodObject<{
        schema: z.ZodUnknown;
        widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        defaultSchema: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "strip", z.ZodTypeAny, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }>;
    icon: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    propPanel: z.ZodObject<{
        schema: z.ZodUnknown;
        widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        defaultSchema: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "strip", z.ZodTypeAny, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }>;
    icon: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    propPanel: z.ZodObject<{
        schema: z.ZodUnknown;
        widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        defaultSchema: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "strip", z.ZodTypeAny, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }, {
        defaultSchema: {
            name: string;
            type: string;
            width: number;
            height: number;
            position: {
                x: number;
                y: number;
            };
            opacity?: number | undefined;
            rotate?: number | undefined;
            required?: boolean | undefined;
            fillable?: boolean | undefined;
            content?: string | undefined;
            readOnly?: boolean | undefined;
            __bodyRange?: {
                start: number;
                end?: number | undefined;
            } | undefined;
            __isSplit?: boolean | undefined;
        } & {
            [k: string]: unknown;
        };
        schema?: unknown;
        widgets?: Record<string, any> | undefined;
    }>;
    icon: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const CommonOptions: z.ZodObject<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const GeneratorOptions: z.ZodObject<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
    author: z.ZodOptional<z.ZodString>;
    creationDate: z.ZodOptional<z.ZodDate>;
    creator: z.ZodOptional<z.ZodString>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    modificationDate: z.ZodOptional<z.ZodDate>;
    producer: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
    author: z.ZodOptional<z.ZodString>;
    creationDate: z.ZodOptional<z.ZodDate>;
    creator: z.ZodOptional<z.ZodString>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    modificationDate: z.ZodOptional<z.ZodDate>;
    producer: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
    author: z.ZodOptional<z.ZodString>;
    creationDate: z.ZodOptional<z.ZodDate>;
    creator: z.ZodOptional<z.ZodString>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    modificationDate: z.ZodOptional<z.ZodDate>;
    producer: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}>, z.ZodTypeAny, "passthrough">>;
export declare const GenerateProps: z.ZodObject<z.objectUtil.extendShape<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">>>;
    plugins: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, {
    inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>, "many">;
    options: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
        author: z.ZodOptional<z.ZodString>;
        creationDate: z.ZodOptional<z.ZodDate>;
        creator: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        modificationDate: z.ZodOptional<z.ZodDate>;
        producer: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
        author: z.ZodOptional<z.ZodString>;
        creationDate: z.ZodOptional<z.ZodDate>;
        creator: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        modificationDate: z.ZodOptional<z.ZodDate>;
        producer: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
        author: z.ZodOptional<z.ZodString>;
        creationDate: z.ZodOptional<z.ZodDate>;
        creator: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        modificationDate: z.ZodOptional<z.ZodDate>;
        producer: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }>, z.ZodTypeAny, "passthrough">>>;
}>, "strict", z.ZodTypeAny, {
    template: {
        schemas: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    inputs: Record<string, any>[];
    options?: z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
        author: z.ZodOptional<z.ZodString>;
        creationDate: z.ZodOptional<z.ZodDate>;
        creator: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        modificationDate: z.ZodOptional<z.ZodDate>;
        producer: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}, {
    template: {
        schemas: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    inputs: Record<string, any>[];
    options?: z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        colorType: z.ZodOptional<z.ZodEnum<["rgb", "cmyk"]>>;
        author: z.ZodOptional<z.ZodString>;
        creationDate: z.ZodOptional<z.ZodDate>;
        creator: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        modificationDate: z.ZodOptional<z.ZodDate>;
        producer: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}>;
export declare const UIOptions: z.ZodObject<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    requiredByDefault: z.ZodOptional<z.ZodBoolean>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
}>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    requiredByDefault: z.ZodOptional<z.ZodBoolean>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
}>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, {
    lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
    labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    requiredByDefault: z.ZodOptional<z.ZodBoolean>;
    maxZoom: z.ZodOptional<z.ZodNumber>;
    availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
}>, z.ZodTypeAny, "passthrough">>;
export declare const UIProps: z.ZodObject<z.objectUtil.extendShape<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">>>;
    plugins: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, {
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
    options: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">>>;
}>, "strip", z.ZodTypeAny, {
    template: {
        schemas: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    domContainer: HTMLElement;
    options?: z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}, {
    template: {
        schemas: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    domContainer: HTMLElement;
    options?: z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}>;
export declare const PreviewProps: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">>>;
    plugins: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, {
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
    options: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">>>;
}>, {
    inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>, "many">;
}>, "strict", z.ZodTypeAny, {
    template: {
        schemas: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    inputs: Record<string, any>[];
    domContainer: HTMLElement;
    options?: z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}, {
    template: {
        schemas: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    inputs: Record<string, any>[];
    domContainer: HTMLElement;
    options?: z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}>;
export declare const DesignerProps: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schemas: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            padding: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
            staticSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, z.ZodTypeAny, "passthrough">>>;
    plugins: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, {
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
    options: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough">>>;
}>, {}>, "strict", z.ZodTypeAny, {
    template: {
        schemas: z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    domContainer: HTMLElement;
    options?: z.objectOutputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectOutputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}, {
    template: {
        schemas: z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rotate: z.ZodOptional<z.ZodNumber>;
            opacity: z.ZodOptional<z.ZodNumber>;
            readOnly: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
            fillable: z.ZodOptional<z.ZodBoolean>;
            __bodyRange: z.ZodOptional<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">[][];
        basePdf: string | ArrayBuffer | Uint8Array<ArrayBufferLike> | {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">[] | undefined;
        };
        pdfmeVersion?: string | undefined;
    } & {
        [k: string]: unknown;
    };
    domContainer: HTMLElement;
    options?: z.objectInputType<z.objectUtil.extendShape<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array<ArrayBufferLike>, z.ZodTypeDef, Uint8Array<ArrayBufferLike>>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, {
        lang: z.ZodOptional<z.ZodEnum<["en", "zh", "ja", "ko", "ar", "th", "pl", "it", "de", "es", "fr"]>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        theme: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        icons: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        requiredByDefault: z.ZodOptional<z.ZodBoolean>;
        maxZoom: z.ZodOptional<z.ZodNumber>;
        availableDynamicFields: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    }>, z.ZodTypeAny, "passthrough"> | undefined;
    plugins?: Record<string, z.objectInputType<{
        ui: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        pdf: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        propPanel: z.ZodObject<{
            schema: z.ZodUnknown;
            widgets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            defaultSchema: z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                type: z.ZodString;
                content: z.ZodOptional<z.ZodString>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rotate: z.ZodOptional<z.ZodNumber>;
                opacity: z.ZodOptional<z.ZodNumber>;
                readOnly: z.ZodOptional<z.ZodBoolean>;
                required: z.ZodOptional<z.ZodBoolean>;
                fillable: z.ZodOptional<z.ZodBoolean>;
                __bodyRange: z.ZodOptional<z.ZodObject<{
                    start: z.ZodNumber;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: z.ZodOptional<z.ZodBoolean>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "strip", z.ZodTypeAny, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }, {
            defaultSchema: {
                name: string;
                type: string;
                width: number;
                height: number;
                position: {
                    x: number;
                    y: number;
                };
                opacity?: number | undefined;
                rotate?: number | undefined;
                required?: boolean | undefined;
                fillable?: boolean | undefined;
                content?: string | undefined;
                readOnly?: boolean | undefined;
                __bodyRange?: {
                    start: number;
                    end?: number | undefined;
                } | undefined;
                __isSplit?: boolean | undefined;
            } & {
                [k: string]: unknown;
            };
            schema?: unknown;
            widgets?: Record<string, any> | undefined;
        }>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">> | undefined;
}>;
