/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Definition
 */

import { ImbricatePropertyKey } from "../../property/definition";
import { IImbricateProperty } from "../../property/interface";
import { IMBRICATE_PROPERTY_TYPE } from "../../property/type";

export type ImbricatePropertyTriageFunction<T extends IMBRICATE_PROPERTY_TYPE, Result> = (
    propertyKey: ImbricatePropertyKey,
    value: IImbricateProperty<T>
) => Result;
