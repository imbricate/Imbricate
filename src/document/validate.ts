/**
 * @author WMXPY
 * @namespace Document
 * @description Validate
 */

import { ImbricateDatabaseSchema } from "../database/schema";
import { DocumentProperties, DocumentPropertyValue } from "./property";

export const validateImbricateProperties = (
    properties: DocumentProperties,
    schema: ImbricateDatabaseSchema,
): boolean => {

    if (typeof properties !== "object") {
        return false;
    }

    const keys: string[] = Object.keys(properties);
    for (const key of keys) {

        const property = schema.properties.find((each) => {
            return each.propertyName === key;
        });
        if (!property) {
            return false;
        }

        const value: DocumentPropertyValue = properties[key];
        if (typeof value.type !== "string") {
            return false;
        }

        if (value.type !== property.propertyType) {
            return false;
        }
    }

    return true;
};
