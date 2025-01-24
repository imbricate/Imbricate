/**
 * @author WMXPY
 * @namespace Property
 * @description Map
 */

import { ImbricatePropertyKey } from "./definition";
import { IImbricateProperty } from "./interface";
import { IMBRICATE_PROPERTY_TYPE } from "./type";

export type ImbricatePropertyRecord = Record<ImbricatePropertyKey, IImbricateProperty<IMBRICATE_PROPERTY_TYPE>>;
