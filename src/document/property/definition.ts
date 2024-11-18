/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Definition
 */

import { DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";

export type DocumentPropertyTriageFunction<T extends IMBRICATE_PROPERTY_TYPE, Result> =
    (value: DocumentPropertyValue<T>) => Result;
