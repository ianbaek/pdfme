import { Template, Size, Plugins, UIProps, UIOptions, PreviewProps } from '@pdfme/common';
export declare abstract class BaseUIClass {
    protected domContainer: HTMLElement | null;
    protected template: Template;
    protected size: Size;
    private lang;
    private font;
    private pluginsRegistry;
    private options;
    private readonly setSize;
    resizeObserver: ResizeObserver;
    constructor(props: UIProps);
    protected getLang(): "en" | "zh" | "ja" | "ko" | "ar" | "th" | "pl" | "it" | "de" | "es" | "fr";
    protected getFont(): Record<string, {
        data: string | ArrayBuffer | Uint8Array<ArrayBufferLike>;
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>;
    protected getPluginsRegistry(): Plugins;
    getOptions(): UIOptions;
    getTemplate(): import("zod").objectOutputType<{
        schemas: import("zod").ZodArray<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            type: import("zod").ZodString;
            content: import("zod").ZodOptional<import("zod").ZodString>;
            position: import("zod").ZodObject<{
                x: import("zod").ZodNumber;
                y: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
            opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
            readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                start: import("zod").ZodNumber;
                end: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                start: number;
                end?: number | undefined;
            }, {
                start: number;
                end?: number | undefined;
            }>>;
            __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, import("zod").ZodTypeAny, "passthrough">>, "many">, "many">;
        basePdf: import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<ArrayBuffer, import("zod").ZodTypeDef, ArrayBuffer>, import("zod").ZodType<Uint8Array<ArrayBufferLike>, import("zod").ZodTypeDef, Uint8Array<ArrayBufferLike>>]>, import("zod").ZodObject<{
            width: import("zod").ZodNumber;
            height: import("zod").ZodNumber;
            padding: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber, import("zod").ZodNumber], null>;
            staticSchema: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                name: import("zod").ZodString;
                type: import("zod").ZodString;
                content: import("zod").ZodOptional<import("zod").ZodString>;
                position: import("zod").ZodObject<{
                    x: import("zod").ZodNumber;
                    y: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: import("zod").ZodNumber;
                height: import("zod").ZodNumber;
                rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
                opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
                readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
                required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                    start: import("zod").ZodNumber;
                    end: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                type: import("zod").ZodString;
                content: import("zod").ZodOptional<import("zod").ZodString>;
                position: import("zod").ZodObject<{
                    x: import("zod").ZodNumber;
                    y: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: import("zod").ZodNumber;
                height: import("zod").ZodNumber;
                rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
                opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
                readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
                required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                    start: import("zod").ZodNumber;
                    end: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                type: import("zod").ZodString;
                content: import("zod").ZodOptional<import("zod").ZodString>;
                position: import("zod").ZodObject<{
                    x: import("zod").ZodNumber;
                    y: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: import("zod").ZodNumber;
                height: import("zod").ZodNumber;
                rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
                opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
                readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
                required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                    start: import("zod").ZodNumber;
                    end: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodTypeAny, "passthrough">>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: import("zod").objectOutputType<{
                name: import("zod").ZodString;
                type: import("zod").ZodString;
                content: import("zod").ZodOptional<import("zod").ZodString>;
                position: import("zod").ZodObject<{
                    x: import("zod").ZodNumber;
                    y: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: import("zod").ZodNumber;
                height: import("zod").ZodNumber;
                rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
                opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
                readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
                required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                    start: import("zod").ZodNumber;
                    end: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodTypeAny, "passthrough">[] | undefined;
        }, {
            width: number;
            height: number;
            padding: [number, number, number, number];
            staticSchema?: import("zod").objectInputType<{
                name: import("zod").ZodString;
                type: import("zod").ZodString;
                content: import("zod").ZodOptional<import("zod").ZodString>;
                position: import("zod").ZodObject<{
                    x: import("zod").ZodNumber;
                    y: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    x: number;
                    y: number;
                }, {
                    x: number;
                    y: number;
                }>;
                width: import("zod").ZodNumber;
                height: import("zod").ZodNumber;
                rotate: import("zod").ZodOptional<import("zod").ZodNumber>;
                opacity: import("zod").ZodOptional<import("zod").ZodNumber>;
                readOnly: import("zod").ZodOptional<import("zod").ZodBoolean>;
                required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                __bodyRange: import("zod").ZodOptional<import("zod").ZodObject<{
                    start: import("zod").ZodNumber;
                    end: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    start: number;
                    end?: number | undefined;
                }, {
                    start: number;
                    end?: number | undefined;
                }>>;
                __isSplit: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodTypeAny, "passthrough">[] | undefined;
        }>]>;
        pdfmeVersion: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod").ZodTypeAny, "passthrough">;
    updateTemplate(template: Template): void;
    updateOptions(options: UIOptions): void;
    destroy(): void;
    protected abstract render(): void;
}
export declare abstract class PreviewUI extends BaseUIClass {
    protected inputs: {
        [key: string]: string;
    }[];
    constructor(props: PreviewProps);
    getInputs(): {
        [key: string]: string;
    }[];
    setInputs(inputs: {
        [key: string]: string;
    }[]): void;
    protected abstract render(): void;
}
