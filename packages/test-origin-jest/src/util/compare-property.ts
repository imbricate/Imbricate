/**
 * @author WMXPY
 * @namespace Util
 * @description Compare Property
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricateDocumentGetPropertiesOutcome, ImbricatePropertyRecord, ImbricatePropertyVariant } from "@imbricate/core";

export type ExpectedProperty = {
    type: IMBRICATE_PROPERTY_TYPE;
    value: string;
    variant: ImbricatePropertyVariant;
};

export type ExpectedProperties = {
    [key: string]: ExpectedProperty;
};

export const compareProperty = (
    property: IImbricateProperty<IMBRICATE_PROPERTY_TYPE>,
    expected: ExpectedProperty,
): boolean => {

    return property.propertyType === expected.type
        && property.propertyValue === expected.value
        && property.propertyVariant === expected.variant;
};

export const compareProperties = (
    properties: ImbricatePropertyRecord,
    expected: ExpectedProperties,
): boolean => {

    return Object.keys(properties).length === Object.keys(expected).length
        && Object.keys(properties).every((key) => compareProperty(properties[key], expected[key]));
};

export const comparePropertiesOutcome = (
    outcome: ImbricateDocumentGetPropertiesOutcome,
    expected: ExpectedProperties,
): boolean => {

    if (typeof outcome === "symbol") {
        return false;
    }

    return compareProperties(outcome.properties, expected);
};
