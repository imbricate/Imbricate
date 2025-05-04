/**
 * @author WMXPY
 * @namespace Property
 * @description Type
 */

/**
 * Property type
 */
export enum IMBRICATE_PROPERTY_TYPE {

    /**
     * BOOLEAN - boolean, store as boolean
     */
    BOOLEAN = "BOOLEAN",
    /**
     * BINARY - binary, store as binary file
     */
    BINARY = "BINARY",
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
     * JSON - json, store as text object unique identifier. Display as JSON
     */
    JSON = "JSON",
    /**
     * IMBRISCRIPT - imbricate script, store as text object unique identifier. Display as imbricate script
     *  The script is executed in a sandbox environment, using customized javascript engine
     */
    IMBRISCRIPT = "IMBRISCRIPT",
    /**
     * DATE - date, store as string in ISO format
     *  For example - 2000-01-01T00:00:00.000Z
     */
    DATE = "DATE",
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

export type ImbricatePropertyValueObjectReference = {

    readonly originUniqueIdentifier: string;
    readonly databaseUniqueIdentifier: string;
    readonly documentUniqueIdentifier: string;
};

// IMBRICATE_PROPERTY_TYPE SWITCH
export type ImbricatePropertyValueObject<T extends IMBRICATE_PROPERTY_TYPE> =
    T extends IMBRICATE_PROPERTY_TYPE.BINARY ? string[] :
    T extends IMBRICATE_PROPERTY_TYPE.BOOLEAN ? boolean :
    T extends IMBRICATE_PROPERTY_TYPE.STRING ? string :
    T extends IMBRICATE_PROPERTY_TYPE.NUMBER ? number :
    T extends IMBRICATE_PROPERTY_TYPE.MARKDOWN ? string :
    T extends IMBRICATE_PROPERTY_TYPE.JSON ? string :
    T extends IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT ? string :
    T extends IMBRICATE_PROPERTY_TYPE.DATE ? string :
    T extends IMBRICATE_PROPERTY_TYPE.LABEL ? string[] :
    T extends IMBRICATE_PROPERTY_TYPE.REFERENCE ? ImbricatePropertyValueObjectReference[] :
    never;
