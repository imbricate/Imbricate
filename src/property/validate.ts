/**
 * @namespace Property
 * @description Validate
 */

import { ImbricateDatabaseSchema, ImbricateDatabaseSchemaProperty } from "../database/schema";
import { IImbricateProperty } from "./interface";
import { ImbricatePropertyRecord } from "./map";
import { IMBRICATE_PROPERTY_TYPE } from "./type";

/**
 * Validate properties with schema
 * 
 * @param properties properties to validate
 * @param schema database schema to validate
 * @param allowExtraProperties allow extra properties, optional with default false
 * 
 * @returns a string error message if validation failed
 *        null if validation passed
 */
export const validateImbricateProperties = (
    properties: ImbricatePropertyRecord,
    schema: ImbricateDatabaseSchema,
    allowExtraProperties: boolean = false,
): string | null => {

    if (typeof properties !== "object") {
        return "Properties must be an object";
    }

    const keys: string[] = Object.keys(properties);
    for (const key of keys) {

        const schemaProperty = schema.properties.find((each: ImbricateDatabaseSchemaProperty<IMBRICATE_PROPERTY_TYPE>) => {
            return each.propertyIdentifier === key;
        });

        if (!schemaProperty) {
            if (allowExtraProperties) {
                continue;
            }
            return `Property ${key} not found in schema`;
        }

        const property: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> = properties[key];
        if (typeof property.propertyType !== "string") {
            return `Property ${key} type must be a string`;
        }

        if (property.propertyType !== property.propertyType) {
            return `Property ${key} type must be ${property.propertyType}, but got ${property.propertyType}`;
        }

        // IMBRICATE_PROPERTY_TYPE SWITCH
        switch (property.propertyType) {

            case IMBRICATE_PROPERTY_TYPE.BINARY: {
                if (!Array.isArray(property.propertyValue)) {
                    return `Property ${key} value must be an array of string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.BOOLEAN: {
                if (typeof property.propertyValue !== "boolean") {
                    return `Property ${key} value must be a boolean`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.STRING: {
                if (typeof property.propertyValue !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.NUMBER: {
                if (typeof property.propertyValue !== "number") {
                    return `Property ${key} value must be a number`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.MARKDOWN: {
                if (typeof property.propertyValue !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.JSON: {
                if (typeof property.propertyValue !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT: {
                if (typeof property.propertyValue !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.DATE: {
                if (typeof property.propertyValue !== "string") {
                    return `Property ${key} value must be a string of date in ISO format`;
                }
                const date: Date = new Date(property.propertyValue);
                if (isNaN(date.getTime())) {
                    return `Property ${key} value must be a string of date in ISO format`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.LABEL: {
                if (!Array.isArray(property.propertyValue)) {
                    return `Property ${key} value must be an array of string`;
                }
                for (const label of property.propertyValue) {
                    if (typeof label !== "string") {
                        return `Property ${key} label must be a string`;
                    }
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.REFERENCE: {
                if (!Array.isArray(property.propertyValue)) {
                    return `Property ${key} value must be an array of string`;
                }
                for (const reference of property.propertyValue) {
                    if (typeof reference !== "object") {
                        return `Property ${key} reference must be an object`;
                    }
                    if (typeof reference.originUniqueIdentifier !== "string") {
                        return `Property ${key} reference originUniqueIdentifier must be a string`;
                    }
                    if (typeof reference.databaseUniqueIdentifier !== "string") {
                        return `Property ${key} reference databaseUniqueIdentifier must be a string`;
                    }
                    if (typeof reference.documentUniqueIdentifier !== "string") {
                        return `Property ${key} reference documentUniqueIdentifier must be a string`;
                    }
                }
                break;
            }
            default: {
                return `Property ${key} type ${property.propertyType} is not supported`;
            }
        }
    }

    return null;
};
