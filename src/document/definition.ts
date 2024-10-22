/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

export enum IMBRICATE_PROPERTY_TYPE {

    STRING = "STRING",
    MARKDOWN = "MARKDOWN",
}

export type DocumentProperties = Record<DocumentPropertyUniqueIdentifier, DocumentPropertyValue>;

export type DocumentPropertyUniqueIdentifier = string;
export type DocumentPropertyValue = {

    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: any;
};
