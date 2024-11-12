/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { IMBRICATE_PROPERTY_TYPE } from "../document/definition";

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: string;
} & ImbricateDatabaseSchemaPropertyForCreation;

export type ImbricateDatabaseSchemaPropertyForCreation = {

    readonly propertyName: string;
    readonly propertyType: IMBRICATE_PROPERTY_TYPE;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};

export type ImbricateDatabaseSchemaForCreation = {

    readonly properties: ImbricateDatabaseSchemaPropertyForCreation[];
};
