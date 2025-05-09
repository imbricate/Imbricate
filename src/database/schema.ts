/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 */

import { ImbricatePropertyVariant } from "../property/definition";
import { IMBRICATE_PROPERTY_TYPE } from "../property/type";

export type ImbricateDatabaseSchemaProperty<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly propertyIdentifier: string;
} & ImbricateDatabaseSchemaPropertyForCreation<T>;

export type ImbricateDatabaseSchemaPropertyOptionsReferenceDatabase = {

    readonly originUniqueIdentifier: string;
    readonly databaseUniqueIdentifier: string;
};

export type ImbricateDatabaseSchemaPropertyOptionsLabelOption = {

    readonly labelIdentifier: string;
    readonly labelName: string;

    readonly labelColor: string;
};

export type ImbricateDatabaseSchemaPropertyOptionsBinary = {

    /**
     * Allow multiple binary files
     */
    readonly allowMultiple: boolean;
};

export type ImbricateDatabaseSchemaPropertyOptionsLabel = {

    /**
     * Allow multiple labels
     */
    readonly allowMultiple: boolean;
    /**
     * Label Options
     */
    readonly labelOptions: ImbricateDatabaseSchemaPropertyOptionsLabelOption[];
};

export type ImbricateDatabaseSchemaPropertyOptionsReference = {

    /**
     * Allow multiple references
     */
    readonly allowMultiple: boolean;
    /**
     * Allow references from these databases
     *  If empty, allow references from all databases
     */
    readonly databases: ImbricateDatabaseSchemaPropertyOptionsReferenceDatabase[];
};

// IMBRICATE_PROPERTY_TYPE SWITCH
export type ImbricateDatabaseSchemaPropertyOptions<T extends IMBRICATE_PROPERTY_TYPE> =
    T extends IMBRICATE_PROPERTY_TYPE.BINARY ? ImbricateDatabaseSchemaPropertyOptionsBinary :
    T extends IMBRICATE_PROPERTY_TYPE.BOOLEAN ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.STRING ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.NUMBER ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.MARKDOWN ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.JSON ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.DATE ? {} :
    T extends IMBRICATE_PROPERTY_TYPE.LABEL ? ImbricateDatabaseSchemaPropertyOptionsLabel :
    T extends IMBRICATE_PROPERTY_TYPE.REFERENCE ? ImbricateDatabaseSchemaPropertyOptionsReference :
    never;

export type ImbricateDatabaseSchemaPropertyForCreation<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly propertyName: string;
    readonly propertyType: T;
    readonly propertyVariant: ImbricatePropertyVariant;
    readonly propertyOptions: ImbricateDatabaseSchemaPropertyOptions<T>;

    readonly isPrimaryKey?: boolean;
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

    // IMBRICATE_PROPERTY_TYPE SWITCH
    switch (property.propertyType) {

        case IMBRICATE_PROPERTY_TYPE.BINARY: {

            if (typeof property.propertyOptions !== "object") {
                return "Property options must be an object";
            }

            const propertyOptions: ImbricateDatabaseSchemaPropertyOptionsBinary = property.propertyOptions as ImbricateDatabaseSchemaPropertyOptionsBinary;

            if (typeof propertyOptions.allowMultiple !== "boolean") {
                return "Property options allowMultiple must be a boolean";
            }
            break;
        }

        case IMBRICATE_PROPERTY_TYPE.LABEL: {

            if (typeof property.propertyOptions !== "object") {
                return "Property options must be an object";
            }

            const propertyOptions: ImbricateDatabaseSchemaPropertyOptionsLabel = property.propertyOptions as ImbricateDatabaseSchemaPropertyOptionsLabel;

            if (typeof propertyOptions.allowMultiple !== "boolean") {
                return "Property options allowMultiple must be a boolean";
            }

            if (!Array.isArray(propertyOptions.labelOptions)) {
                return "Property options labelOptions must be an array";
            }

            for (const labelOption of propertyOptions.labelOptions) {
                if (typeof labelOption.labelIdentifier !== "string") {
                    return "Property options labelOptions labelIdentifier must be a string";
                }
            }

            break;
        }

        case IMBRICATE_PROPERTY_TYPE.REFERENCE: {
            if (typeof property.propertyOptions !== "object") {
                return "Property options must be an object";
            }

            const propertyOptions: ImbricateDatabaseSchemaPropertyOptionsReference = property.propertyOptions as ImbricateDatabaseSchemaPropertyOptionsReference;

            if (typeof propertyOptions.allowMultiple !== "boolean") {
                return "Property options allowMultiple must be a boolean";
            }
            if (!Array.isArray(propertyOptions.databases)) {
                return "Property options databases must be an array";
            }

            for (const database of propertyOptions.databases) {
                if (typeof database.originUniqueIdentifier !== "string") {
                    return "Database originUniqueIdentifier must be a string";
                }
                if (typeof database.databaseUniqueIdentifier !== "string") {
                    return "Database databaseUniqueIdentifier must be a string";
                }
            }
            break;
        }
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
