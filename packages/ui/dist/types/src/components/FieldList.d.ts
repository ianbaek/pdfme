import React from 'react';
import { Field } from '@pdfme/common';
interface FieldListProps {
    fields: Field[];
    onFieldClick?: (field: Field) => void;
    availableFields?: Array<string | {
        name: string;
        type: string;
        [key: string]: unknown;
    }>;
    usedFieldNames?: string[];
}
export declare const FieldList: ({ fields, onFieldClick, availableFields, usedFieldNames }: FieldListProps) => React.JSX.Element;
export {};
