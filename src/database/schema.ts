/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: string;
    readonly propertyName: string;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};
