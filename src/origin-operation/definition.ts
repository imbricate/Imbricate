/**
 * @author WMXPY
 * @namespace OriginOperation
 * @description Definition
 */

export enum IMBRICATE_ORIGIN_OPERATION_SCOPE {

    ORIGIN = "imbricate.origin",
    COLLECTION = "imbricate.collection",
    PAGE = "imbricate.page",
}

export type ImbricateOriginOperation = {

    readonly scope: IMBRICATE_ORIGIN_OPERATION_SCOPE;
};
