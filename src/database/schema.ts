/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { DocumentPropertyUniqueIdentifier, IMBRICATE_PROPERTY_TYPE } from "../document/definition";

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: DocumentPropertyUniqueIdentifier;
    readonly propertyName: string;

    readonly propertyType: IMBRICATE_PROPERTY_TYPE;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};
