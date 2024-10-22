/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

export enum IMBRICATE_DATABASE_PROPERTY_TYPE {

    STRING = "STRING",
    MARKDOWN = "MARKDOWN",
}

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: string;
    readonly propertyName: string;

    readonly propertyType: IMBRICATE_DATABASE_PROPERTY_TYPE;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};
