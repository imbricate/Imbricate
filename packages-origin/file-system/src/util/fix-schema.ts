/**
 * @author WMXPY
 * @namespace Util
 * @description Fix Schema
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseSchema, ImbricateDatabaseSchemaForCreation, ImbricateDatabaseSchemaProperty, ImbricateDatabaseSchemaPropertyForCreation } from "@imbricate/core";
import { UUIDVersion1 } from "@sudoo/uuid";

export const fixDatabaseSchema = (schema: ImbricateDatabaseSchemaForCreation): ImbricateDatabaseSchema => {

    const fixedProperties: Array<ImbricateDatabaseSchemaProperty<IMBRICATE_PROPERTY_TYPE>> =
        schema.properties.map((property: ImbricateDatabaseSchemaPropertyForCreation<IMBRICATE_PROPERTY_TYPE>) => {

            return {
                ...property,
                propertyIdentifier: UUIDVersion1.generateString(),
            };
        });

    return {
        properties: fixedProperties,
    };
};