/**
 * @namespace Text
 * @description Feature
 */

export enum IMBRICATE_TEXT_FEATURE {

    TEXT_GET_AUTHOR = "TEXT_GET_AUTHOR",
    TEXT_GET_CONTENT = "TEXT_GET_CONTENT",
}

export const checkImbricateTextFeatureSupported = (
    features: IMBRICATE_TEXT_FEATURE[],
    feature: IMBRICATE_TEXT_FEATURE,
): boolean => {

    return features.includes(feature);
};
