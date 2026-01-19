/**
 * @namespace DatabaseManager
 * @description Feature
 */

export enum IMBRICATE_DATABASE_MANAGER_FEATURE {

    DATABASE_MANAGER_GET_DATABASE = "DATABASE_MANAGER_GET_DATABASE",
    DATABASE_MANAGER_PUT_DATABASE = "DATABASE_MANAGER_PUT_DATABASE",
    DATABASE_MANAGER_DELETE_DATABASE = "DATABASE_MANAGER_DELETE_DATABASE",
}

export const checkImbricateDatabaseManagerFeatureSupported = (
    features: IMBRICATE_DATABASE_MANAGER_FEATURE[],
    feature: IMBRICATE_DATABASE_MANAGER_FEATURE,
): boolean => {

    return features.includes(feature);
};
