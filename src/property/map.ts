/**
 * @author WMXPY
 * @namespace Property
 * @description Map
 */

import { ImbricatePropertyKey } from "./definition";
import { IImbricateProperty } from "./interface";
import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObject } from "./type";

export type ImbricatePropertyRecord = Record<ImbricatePropertyKey, IImbricateProperty<IMBRICATE_PROPERTY_TYPE>>;

export type ImbricatePropertyGenerator<T extends IMBRICATE_PROPERTY_TYPE> = (
    propertyKey: ImbricatePropertyKey,
    propertyType: T,
    propertyValue: ImbricatePropertyValueObject<T>,
) => IImbricateProperty<T>;

export type ImbricatePropertiesDrafter = (
    generator: ImbricatePropertyGenerator<IMBRICATE_PROPERTY_TYPE>,
) => Array<IImbricateProperty<IMBRICATE_PROPERTY_TYPE>>;
