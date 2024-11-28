/**
 * @author WMXPY
 * @namespace Document
 * @description Validate
 */

import { ImbricateDatabaseSchema, ImbricateDatabaseSchemaProperty } from "../database/schema";
import { DocumentProperties, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "./property";

/**
 * Validate properties with schema
 * 
 * @param properties properties to validate
 * @param schema database schema to validate
 * 
 * @returns a string error message if validation failed
 *        null if validation passed
 */
export const validateImbricateProperties = (
    properties: DocumentProperties,
    schema: ImbricateDatabaseSchema,
): string | null => {

    if (typeof properties !== "object") {
        return "Properties must be an object";
    }

    const keys: string[] = Object.keys(properties);
    for (const key of keys) {

        const property = schema.properties.find((each: ImbricateDatabaseSchemaProperty<IMBRICATE_PROPERTY_TYPE>) => {
            return each.propertyIdentifier === key;
        });

        if (!property) {
            return `Property ${key} not found in schema`;
        }

        const value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE> = properties[key];
        if (typeof value.type !== "string") {
            return `Property ${key} type must be a string`;
        }

        if (value.type !== property.propertyType) {
            return `Property ${key} type must be ${property.propertyType}, but got ${value.type}`;
        }

        // IMBRICATE_PROPERTY_TYPE SWITCH
        switch (value.type) {

            case IMBRICATE_PROPERTY_TYPE.BOOLEAN: {
                if (typeof value.value !== "boolean") {
                    return `Property ${key} value must be a boolean`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.STRING: {
                if (typeof value.value !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.NUMBER: {
                if (typeof value.value !== "number") {
                    return `Property ${key} value must be a number`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.MARKDOWN: {
                if (typeof value.value !== "string") {
                    return `Property ${key} value must be a string of text object reference`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.DATE: {
                if (typeof value.value !== "string") {
                    return `Property ${key} value must be a string of date in ISO format`;
                }
                const date: Date = new Date(value.value);
                if (isNaN(date.getTime())) {
                    return `Property ${key} value must be a string of date in ISO format`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.LABEL: {
                if (!Array.isArray(value.value)) {
                    return `Property ${key} value must be an array of string`;
                }
                for (const label of value.value) {
                    if (typeof label !== "string") {
                        return `Property ${key} label must be a string`;
                    }
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.REFERENCE: {
                if (!Array.isArray(value.value)) {
                    return `Property ${key} value must be an array of string`;
                }
                for (const reference of value.value) {
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
        }
    }

    return null;
};
