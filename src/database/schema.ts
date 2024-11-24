/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { IMBRICATE_PROPERTY_TYPE } from "../document/property";

export type ImbricateDatabaseSchemaProperty<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly propertyIdentifier: string;
} & ImbricateDatabaseSchemaPropertyForCreation<T>;

export type ImbricateDatabaseSchemaPropertyOption<T extends IMBRICATE_PROPERTY_TYPE> =
    T extends IMBRICATE_PROPERTY_TYPE.STRING ? string :
    T extends IMBRICATE_PROPERTY_TYPE.NUMBER ? number :
    T extends IMBRICATE_PROPERTY_TYPE.MARKDOWN ? string :
    never;

export type ImbricateDatabaseSchemaPropertyForCreation<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly propertyName: string;
    readonly propertyType: T;
    readonly propertyOptions?: Record<string, any>;
};

export type ImbricateDatabaseSchema = {

    readonly properties: Array<ImbricateDatabaseSchemaProperty<IMBRICATE_PROPERTY_TYPE>>
};

export type ImbricateDatabaseSchemaForCreation = {

    readonly properties: Array<ImbricateDatabaseSchemaPropertyForCreation<IMBRICATE_PROPERTY_TYPE>>
};

/**
 * Validate a schema property
 * 
 * @param property property to validate
 * 
 * @returns a string error message if validation failed
 *      null if validation passed
 */
export const validateImbricateSchemaProperty = (
    property: ImbricateDatabaseSchemaProperty<IMBRICATE_PROPERTY_TYPE>,
): string | null => {

    if (typeof property.propertyIdentifier !== "string") {
        return "Property identifier must be a string";
    }
    if (typeof property.propertyName !== "string") {
        return "Property name must be a string";
    }
    if (!Object.values(IMBRICATE_PROPERTY_TYPE).includes(property.propertyType)) {
        return "Property type must be a valid type";
    }

    return null;
};

/**
 * Validate a schema
 * 
 * @param schema database schema to validate
 * 
 * @returns a string error message if validation failed
 *    null if validation passed
 */
export const validateImbricateSchema = (
    schema: ImbricateDatabaseSchema,
): string | null => {

    if (!Array.isArray(schema.properties)) {
        return "Properties must be an array";
    }

    const propertyNames: Set<string> = new Set();
    for (const property of schema.properties) {

        const propertyValidationResult: string | null = validateImbricateSchemaProperty(property);
        if (typeof propertyValidationResult === "string") {
            return `Invalid property ${property.propertyName}, ${propertyValidationResult}`;
        }

        if (propertyNames.has(property.propertyName)) {
            return `Duplicated property name ${property.propertyName}`;
        }
        propertyNames.add(property.propertyName);
    }

    return null;
};
