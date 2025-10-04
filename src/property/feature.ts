/**
 * @namespace Property
 * @description Feature
 */

export enum IMBRICATE_PROPERTY_FEATURE {

    PROPERTY_GET_ORIGIN_ACTIONS = "PROPERTY_GET_ORIGIN_ACTIONS",
    PROPERTY_EXECUTE_ORIGIN_ACTION = "PROPERTY_EXECUTE_ORIGIN_ACTION",
}

export const checkImbricatePropertyFeatureSupported = (
    features: IMBRICATE_PROPERTY_FEATURE[],
    feature: IMBRICATE_PROPERTY_FEATURE,
): boolean => {

    return features.includes(feature);
};
