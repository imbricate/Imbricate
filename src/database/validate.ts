/**
 * @author WMXPY
 * @namespace Database
 * @description Validate
 */

import { IMBRICATE_QUERY_ATTRIBUTE, IMBRICATE_QUERY_COMPARE_CONDITION, IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET, ImbricateDocumentQuery } from "./definition";

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

            if (typeof filter.target !== "string"
                || !Object.values(IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET).includes(filter.target)) {
                return "Target must be a valid target";
            }

            if (typeof filter.attribute !== "string"
                || !Object.values(IMBRICATE_QUERY_ATTRIBUTE).includes(filter.attribute)) {
                return "Attribute must be a valid attribute";
            }

            if (typeof filter.condition !== "string"
                || !Object.values(IMBRICATE_QUERY_COMPARE_CONDITION).includes(filter.condition)) {
                return "Condition must be a valid condition";
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

            if (typeof filter.attribute !== "string"
                || !Object.values(IMBRICATE_QUERY_ATTRIBUTE).includes(filter.attribute)) {
                return "Attribute must be a valid attribute";
            }

            if (typeof filter.condition !== "string"
                || !Object.values(IMBRICATE_QUERY_COMPARE_CONDITION).includes(filter.condition)) {
                return "Condition must be a valid condition";
            }
        }
    }

    return null;
};
