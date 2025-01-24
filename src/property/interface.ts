/**
 * @author WMXPY
 * @namespace Property
 * @description Interface
 */

import { ImbricatePropertyKey } from "./definition";
import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObject } from "./type";

export interface IImbricateProperty<T extends IMBRICATE_PROPERTY_TYPE> {

    readonly propertyKey: ImbricatePropertyKey;

    readonly propertyType: T;
    readonly propertyValue: ImbricatePropertyValueObject<T>;
}
