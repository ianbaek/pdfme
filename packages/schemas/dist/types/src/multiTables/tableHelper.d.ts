import { Schema, BasePdf, CommonOptions } from '@pdfme/common';
import type { CellContent } from './types.js';
import { Table } from './classes.js';
interface CreateTableArgs {
    schema: Schema;
    basePdf: BasePdf;
    options: CommonOptions;
    _cache: Map<string | number, unknown>;
}
export declare function createSingleTable(body: CellContent[][], args: CreateTableArgs, tableIndex?: number): Promise<Table>;
export {};
