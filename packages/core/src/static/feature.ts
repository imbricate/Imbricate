/**
 * @namespace Static
 * @description Feature
 */

export enum IMBRICATE_STATIC_FEATURE {

    STATIC_GET_AUTHOR = "STATIC_GET_AUTHOR",
    STATIC_GET_CONTENT = "STATIC_GET_CONTENT",
}

export const checkImbricateStaticFeatureSupported = (
    features: IMBRICATE_STATIC_FEATURE[],
    feature: IMBRICATE_STATIC_FEATURE,
): boolean => {

    return features.includes(feature);
};
