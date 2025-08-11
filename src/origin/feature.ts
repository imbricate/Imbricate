/**
 * @author WMXPY
 * @namespace Origin
 * @description Feature
 */

export enum IMBRICATE_ORIGIN_FEATURE {

    ORIGIN_DATABASE_MANAGER = "ORIGIN_DATABASE_MANAGER",
    ORIGIN_TEXT_MANAGER = "ORIGIN_TEXT_MANAGER",
    ORIGIN_STATIC_MANAGER = "ORIGIN_STATIC_MANAGER",

    ORIGIN_SEARCH = "ORIGIN_SEARCH",

    ORIGIN_GET_ORIGIN_ACTIONS = "ORIGIN_GET_ORIGIN_ACTIONS",
    ORIGIN_EXECUTE_ORIGIN_ACTION = "ORIGIN_EXECUTE_ORIGIN_ACTION",
}

export const checkImbricateOriginFeatureSupported = (
    features: IMBRICATE_ORIGIN_FEATURE[],
    feature: IMBRICATE_ORIGIN_FEATURE,
): boolean => {

    return features.includes(feature);
};
