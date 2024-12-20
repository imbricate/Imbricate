/**
 * @author WMXPY
 * @namespace TextManager
 * @description Feature
 */

export enum IMBRICATE_TEXT_MANAGER_FEATURE {

    TEXT_MANAGER_GET_TEXT = "TEXT_MANAGER_GET_TEXT",
    TEXT_MANAGER_CREATE_TEXT = "TEXT_MANAGER_CREATE_TEXT",
}

export const checkImbricateTextManagerFeatureSupported = (
    features: IMBRICATE_TEXT_MANAGER_FEATURE[],
    feature: IMBRICATE_TEXT_MANAGER_FEATURE,
): boolean => {

    return features.includes(feature);
};
