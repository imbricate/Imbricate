/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { DocumentUniqueIdentifier, IMBRICATE_PROPERTY_TYPE } from "../document/definition";

export type ImbricateDatabaseSchemaProperty = {

    readonly propertyIdentifier: DocumentUniqueIdentifier;
    readonly propertyName: string;

    readonly propertyType: IMBRICATE_PROPERTY_TYPE;
};

export type ImbricateDatabaseSchema = {

    readonly properties: ImbricateDatabaseSchemaProperty[];
};
