/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Primary
 */

import { ImbricateDatabaseSchema } from "../../database/schema";
import { DocumentProperties, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";

export const findPrimaryProperty = (
    schema: ImbricateDatabaseSchema,
    properties: DocumentProperties,
): DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE> | null => {

    for (const property of schema.properties) {

        if (property.isPrimaryKey) {

            const value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE> | undefined =
                properties[property.propertyIdentifier];

            if (value) {
                return value;
            }
        }
    }

    return null;
};
