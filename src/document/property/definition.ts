/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Definition
 */

import { DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";

export type DocumentPropertyTriageFunction<T extends IMBRICATE_PROPERTY_TYPE, Result> = (
    propertyKey: DocumentPropertyKey,
    value: DocumentPropertyValue<T>
) => Result;
