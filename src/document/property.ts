/**
 * @author WMXPY
 * @namespace Document
 * @description Property
 */

/**
 * Document properties
 * 
 * STRING - string, store as plain text
 * MARKDOWN - markdown, store as text object unique identifier. Display as markdown
 */
export enum IMBRICATE_PROPERTY_TYPE {

    STRING = "STRING",
    MARKDOWN = "MARKDOWN",
}

/**
 * Document properties
 */
export type DocumentProperties = Record<DocumentPropertyKey, DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>>;

export type DocumentPropertyKey = string;
export type DocumentPropertyValue<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: DocumentPropertyValueObject<T>;
};

export type DocumentPropertyValueObject<T extends IMBRICATE_PROPERTY_TYPE> =
    T extends IMBRICATE_PROPERTY_TYPE.STRING ? string :
    T extends IMBRICATE_PROPERTY_TYPE.MARKDOWN ? string :
    never;

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT = "PUT",
}
