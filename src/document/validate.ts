/**
 * @author WMXPY
 * @namespace Document
 * @description Validate
 */

import { ImbricateDatabaseSchema } from "../database/schema";
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

        const property = schema.properties.find((each) => {
            return each.propertyName === key;
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

        switch (value.type) {

            case IMBRICATE_PROPERTY_TYPE.STRING: {
                if (typeof value.value !== "string") {
                    return `Property ${key} value must be a string`;
                }
                break;
            }
            case IMBRICATE_PROPERTY_TYPE.MARKDOWN: {
                if (typeof value.value !== "string") {
                    return `Property ${key} value must be a string of text object reference`;
                }
                break;
            }
        }
    }

    return null;
};
