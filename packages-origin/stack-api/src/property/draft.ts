/**
 * @author WMXPY
 * @namespace Property
 * @description Draft
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricatePropertiesDrafter, ImbricatePropertyKey, ImbricatePropertyRecord, ImbricatePropertyValueObject, ImbricatePropertyVariant } from "@imbricate/core";
import { ImbricateStackAPIProperty } from "./property";

export const draftImbricateProperties = (
    drafter: ImbricatePropertiesDrafter,
): ImbricatePropertyRecord => {

    const draftedRecords = drafter((
        propertyKey: ImbricatePropertyKey,
        propertyType: IMBRICATE_PROPERTY_TYPE,
        propertyValue: ImbricatePropertyValueObject<IMBRICATE_PROPERTY_TYPE>,
        propertyVariant: ImbricatePropertyVariant,
    ) => {

        return ImbricateStackAPIProperty.create(
            propertyKey,
            propertyType,
            propertyValue,
            propertyVariant,
        );
    });

    return draftedRecords.reduce((
        property: ImbricatePropertyRecord,
        currentRecord: IImbricateProperty<IMBRICATE_PROPERTY_TYPE>,
    ) => {

        property[currentRecord.propertyKey] = currentRecord;
        return property;
    }, {} as ImbricatePropertyRecord);
};
