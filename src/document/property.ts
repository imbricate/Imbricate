/**
 * @author WMXPY
 * @namespace Document
 * @description Property
 */

export enum IMBRICATE_PROPERTY_TYPE {

    STRING = "STRING",
    MARKDOWN = "MARKDOWN",
}

export type DocumentProperties = Record<DocumentPropertyKey, DocumentPropertyValue>;

export type DocumentPropertyKey = string;
export type DocumentPropertyValue = {

    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: any;
};

export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT = "PUT",
}
