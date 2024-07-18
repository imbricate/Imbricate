/**
 * @author WMXPY
 * @namespace OriginOperation
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";
import { PromiseOr } from "../definition/promise";

export type ImbricateOriginOperationManagerCapability =
    Record<IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY {

    LIST_OPERATIONS = "imbricate.origin-operation.list",
    EXECUTE_OPERATION = "imbricate.origin-operation.execute",
}

export const ImbricateOriginOperationManagerCapabilityList: IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY.LIST_OPERATIONS,
    IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY.EXECUTE_OPERATION,
];

export enum IMBRICATE_ORIGIN_OPERATION_SCOPE {

    ORIGIN = "imbricate.origin",
    COLLECTION = "imbricate.collection",
    PAGE = "imbricate.page",
}

export type ImbricateOriginOperation<T extends IMBRICATE_ORIGIN_OPERATION_SCOPE> = {

    readonly operationIdentifier: string;

    readonly operationDisplayName?: string;
    readonly operationDescription?: string;

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
