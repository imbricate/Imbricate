/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Feature
 */

export enum IMBRICATE_STATIC_MANAGER_FEATURE {

    STATIC_MANAGER_GET_STATIC = "STATIC_MANAGER_GET_STATIC",
    STATIC_MANAGER_CREATE_STATIC = "STATIC_MANAGER_CREATE_STATIC",
}

export const checkImbricateStaticManagerFeatureSupported = (
    features: IMBRICATE_STATIC_MANAGER_FEATURE[],
    feature: IMBRICATE_STATIC_MANAGER_FEATURE,
): boolean => {

    return features.includes(feature);
};
