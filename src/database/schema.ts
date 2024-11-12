/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { IMBRICATE_PROPERTY_TYPE } from "../document/definition";

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: string;
} & ImbricateDatabaseSchemaProperty_Creation;

export type ImbricateDatabaseSchemaProperty_Creation = {

    readonly propertyName: string;
    readonly propertyType: IMBRICATE_PROPERTY_TYPE;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};

export type ImbricateDatabaseSchema_Creation = {

    readonly properties: ImbricateDatabaseSchemaProperty_Creation[];
};
