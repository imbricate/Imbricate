/**
 * @namespace Document_Property
 * @description Primary
 */

import { ImbricateDatabaseSchema } from "../../database/schema";
import { IImbricateProperty } from "../../property/interface";
import { ImbricatePropertyRecord } from "../../property/map";
import { IMBRICATE_PROPERTY_TYPE } from "../../property/type";

export const findPrimaryProperty = (
    schema: ImbricateDatabaseSchema,
    properties: ImbricatePropertyRecord,
): IImbricateProperty<IMBRICATE_PROPERTY_TYPE> | null => {

    for (const property of schema.properties) {

        if (property.isPrimaryKey) {

            const value: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> | undefined =
                properties[property.propertyIdentifier];

            if (value) {
                return value;
            }
        }
    }

    return null;
};
