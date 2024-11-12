/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { IMBRICATE_PROPERTY_TYPE } from "../document/property";

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

export const validateImbricateSchemaProperty = (property: ImbricateDatabaseSchemaProperty): boolean => {

    if (typeof property.propertyIdentifier !== "string") {
        return false;
    }
    if (typeof property.propertyName !== "string") {
        return false;
    }
    if (!Object.values(IMBRICATE_PROPERTY_TYPE).includes(property.propertyType)) {
        return false;
    }

    return true;
};

export const validateImbricateSchema = (schema: ImbricateDatabaseSchema): boolean => {

    if (!Array.isArray(schema.properties)) {
        return false;
    }

    const propertyNames: Set<string> = new Set();
    for (const property of schema.properties) {

        if (!validateImbricateSchemaProperty(property)) {
            return false;
        }

        if (propertyNames.has(property.propertyName)) {
            return false;
        }
        propertyNames.add(property.propertyName);
    }

    return true;
};
