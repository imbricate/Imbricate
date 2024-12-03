/**
 * @author WMXPY
 * @namespace Database
 * @description Validate
 */

import { ImbricateDocumentQuery } from "./definition";

/**
 * Validate imbricate document query
 * 
 * @param query query to validate
 * 
 * @returns a string error message if validation failed
 *        null if validation passed
 */
export const validateImbricateDocumentQuery = (query: ImbricateDocumentQuery): string | null => {

    if (typeof query !== "object") {
        return "Query must be an object";
    }

    if (query.limit !== undefined && typeof query.limit !== "number" && query.limit <= 0) {
        return "Limit must be a number greater than 0 or undefined";
    }
    if (query.skip !== undefined && typeof query.skip !== "number" && query.skip < 0) {
        return "Skip must be a number greater than or equal to 0 or undefined";
    }

    if (query.propertyFilters !== undefined) {
        if (!Array.isArray(query.propertyFilters)) {
            return "Property filters must be an array";
        }

        for (const filter of query.propertyFilters) {

            if (typeof filter.propertyIdentifier !== "string") {
                return "Property identifier must be a string";
            }

            if (!Array.isArray(filter.conditions)) {
                return "Conditions must be an array";
            }

            for (const condition of filter.conditions) {

                if (typeof condition.target !== "string") {
                    return "Target must be a string";
                }
                if (typeof condition.condition !== "string") {
                    return "Condition must be a string";
                }
            }
        }
    }

    if (query.annotationFilters !== undefined) {
        if (!Array.isArray(query.annotationFilters)) {
            return "Annotation filters must be an array";
        }

        for (const filter of query.annotationFilters) {

            if (typeof filter.namespace !== "string") {
                return "Namespace must be a string";
            }
            if (typeof filter.identifier !== "string") {
                return "Identifier must be a string";
            }
            if (typeof filter.condition !== "string") {
                return "Condition must be a string";
            }
        }
    }

    return null;
};
