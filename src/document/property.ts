/**
 * @author WMXPY
 * @namespace Document
 * @description Property
 */

/**
 * Document properties
 */
export enum IMBRICATE_PROPERTY_TYPE {

    /**
     * BOOLEAN - boolean, store as boolean
     */
    BOOLEAN = "BOOLEAN",
    /**
     * STRING - string, store as plain text
     */
    STRING = "STRING",
    /**
     * NUMBER - number, store as number
     */
    NUMBER = "NUMBER",
    /**
     * MARKDOWN - markdown, store as text object unique identifier. Display as markdown
     */
    MARKDOWN = "MARKDOWN",
    /**
     * LABEL - label, store as a list of label id
     *  Note: Label is always stored as an array, even if it is a single label
     */
    LABEL = "LABEL",
    /**
     * REFERENCE - reference, store as a list of other document unique identifier
     *  Note: Reference is always stored as an array, even if it is a single reference
     */
    REFERENCE = "REFERENCE",
}

/**
 * Document properties
 * 
 * Key - Property key, which should match schema properties unique identifier
 * Value - Property value, which should match schema properties type
 */
export type DocumentProperties = Record<DocumentPropertyKey, DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>>;

/**
 * Document property key, which should match schema properties unique identifier
 */
export type DocumentPropertyKey = string;
export type DocumentPropertyValue<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly type: T;
    readonly value: DocumentPropertyValueObject<T>;
};

export type DocumentPropertyValueObjectReference = {

    readonly originUniqueIdentifier: string;
    readonly databaseUniqueIdentifier: string;
    readonly documentUniqueIdentifier: string;
};

// IMBRICATE_PROPERTY_TYPE SWITCH
export type DocumentPropertyValueObject<T extends IMBRICATE_PROPERTY_TYPE> =
    T extends IMBRICATE_PROPERTY_TYPE.BOOLEAN ? boolean :
    T extends IMBRICATE_PROPERTY_TYPE.STRING ? string :
    T extends IMBRICATE_PROPERTY_TYPE.NUMBER ? number :
    T extends IMBRICATE_PROPERTY_TYPE.MARKDOWN ? string :
    T extends IMBRICATE_PROPERTY_TYPE.LABEL ? string[] :
    T extends IMBRICATE_PROPERTY_TYPE.REFERENCE ? DocumentPropertyValueObjectReference[] : never;

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT = "PUT",
}
