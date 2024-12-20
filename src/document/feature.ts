/**
 * @author WMXPY
 * @namespace Document
 * @description Feature
 */

export enum IMBRICATE_DOCUMENT_FEATURE {

    DOCUMENT_PUT_PROPERTY = "DOCUMENT_PUT_PROPERTY",

    DOCUMENT_PUT_ANNOTATION = "DOCUMENT_PUT_ANNOTATION",
    DOCUMENT_DELETE_ANNOTATION = "DOCUMENT_DELETE_ANNOTATION",

    DOCUMENT_PUT_EDIT_RECORD = "DOCUMENT_PUT_EDIT_RECORD",
    DOCUMENT_GET_EDIT_RECORD = "DOCUMENT_GET_EDIT_RECORD",
}

export const checkImbricateDocumentFeatureSupported = (
    features: IMBRICATE_DOCUMENT_FEATURE[],
    feature: IMBRICATE_DOCUMENT_FEATURE,
): boolean => {

    return features.includes(feature);
};
