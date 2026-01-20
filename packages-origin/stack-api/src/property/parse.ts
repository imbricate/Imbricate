/**
 * @namespace Property
 * @description Property
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricatePropertyKey, ImbricatePropertyRecord } from "@imbricate/core";
import { InstanceProperty, InstancePropertyRecord } from "./definition";
import { ImbricateStackAPIProperty } from "./property";

export const propertyRecordToInstanceRecord = (propertyRecord: ImbricatePropertyRecord): InstancePropertyRecord => {

    return Object.entries(propertyRecord).reduce((
        property: InstancePropertyRecord,
        [key, value]: [ImbricatePropertyKey, IImbricateProperty<IMBRICATE_PROPERTY_TYPE>],
    ) => {

        property[key] = {
            key: value.propertyKey,
            type: value.propertyType,
            value: value.propertyValue,
            variant: value.propertyVariant,
        };

        return property;
    }, {} as InstancePropertyRecord);
};

export const instanceRecordToPropertyRecord = (instanceRecord: InstancePropertyRecord): ImbricatePropertyRecord => {

    return Object.entries(instanceRecord).reduce((
        property: ImbricatePropertyRecord,
        [key, value]: [ImbricatePropertyKey, InstanceProperty],
    ) => {

        property[key] = ImbricateStackAPIProperty.create(
            key,
            value.type,
            value.value,
            value.variant,
        );

        return property;
    }, {} as ImbricatePropertyRecord);
};

