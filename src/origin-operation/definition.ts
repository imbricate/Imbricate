/**
 * @author WMXPY
 * @namespace OriginOperation
 * @description Definition
 */

import { PromiseOr } from "../definition/promise";

export enum IMBRICATE_ORIGIN_OPERATION_SCOPE {

    ORIGIN = "imbricate.origin",
    COLLECTION = "imbricate.collection",
    PAGE = "imbricate.page",
}

export type ImbricateOriginOperation<T extends IMBRICATE_ORIGIN_OPERATION_SCOPE> = {

    readonly scope: T;

    readonly operation: (
        parameter: ImbricateOriginOperationParameter<T>,
    ) => PromiseOr<void>;
};

export type ImbricateOriginOperationParameter<T extends IMBRICATE_ORIGIN_OPERATION_SCOPE> =
    T extends IMBRICATE_ORIGIN_OPERATION_SCOPE.ORIGIN ? {
        readonly originUniqueIdentifier: string;
    } :
    T extends IMBRICATE_ORIGIN_OPERATION_SCOPE.COLLECTION ? {
        readonly originUniqueIdentifier: string;
        readonly collectionUniqueIdentifier: string
    } :
    T extends IMBRICATE_ORIGIN_OPERATION_SCOPE.PAGE ? {
        readonly originUniqueIdentifier: string;
        readonly collectionUniqueIdentifier: string;
        readonly pageIdentifier: string;
    } :
    unknown;
