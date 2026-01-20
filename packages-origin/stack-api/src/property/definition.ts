/**
 * @namespace Property
 * @description Definition
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyKey, ImbricatePropertyValueObject, ImbricatePropertyVariant } from "@imbricate/core";

export type InstanceProperty = {

    readonly key: string;
    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: ImbricatePropertyValueObject<IMBRICATE_PROPERTY_TYPE>;
    readonly variant: ImbricatePropertyVariant;
};

export type InstancePropertyRecord = Record<ImbricatePropertyKey, InstanceProperty>;
