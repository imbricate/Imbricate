/**
 * @author WMXPY
 * @namespace Origin
 * @description Feature
 */

export enum IMBRICATE_ORIGIN_FEATURE {

    DATABASE_MANAGER = "DATABASE_MANAGER",
    TEXT_MANAGER = "TEXT_MANAGER",
    STATIC_MANAGER = "STATIC_MANAGER",

    ORIGIN_SEARCH = "ORIGIN_SEARCH",

    GET_ORIGIN_ACTIONS = "GET_ORIGIN_ACTIONS",
    EXECUTE_ORIGIN_ACTION = "EXECUTE_ORIGIN_ACTION",
}

export const checkImbricateOriginFeatureSupported = (
    features: IMBRICATE_ORIGIN_FEATURE[],
    feature: IMBRICATE_ORIGIN_FEATURE,
): boolean => {

    return features.includes(feature);
};
