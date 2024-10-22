/**
 * @author WMXPY
 * @namespace Operation
 * @description Definition
 */

import { PromiseOr } from "../definition/promise";

export enum IMBRICATE_OPERATION_SCOPE {

    ORIGIN = "imbricate.origin",
    COLLECTION = "imbricate.collection",
    PAGE = "imbricate.page",
}

export type ImbricateOperation<T extends IMBRICATE_OPERATION_SCOPE> = {

    readonly operationIdentifier: string;

    readonly operationDisplayName?: string;
    readonly operationDescription?: string;

    readonly scope: T;

    readonly operation: (
        parameter: ImbricateOperationParameter<T>,
    ) => PromiseOr<void>;
};

export type ImbricateOperationParameter<T extends IMBRICATE_OPERATION_SCOPE> =
    T extends IMBRICATE_OPERATION_SCOPE.ORIGIN ? {
        readonly originUniqueIdentifier: string;
    } :
    T extends IMBRICATE_OPERATION_SCOPE.COLLECTION ? {
        readonly originUniqueIdentifier: string;
        readonly collectionUniqueIdentifier: string
    } :
    T extends IMBRICATE_OPERATION_SCOPE.PAGE ? {
        readonly originUniqueIdentifier: string;
        readonly collectionUniqueIdentifier: string;
        readonly pageIdentifier: string;
    } :
    unknown;
