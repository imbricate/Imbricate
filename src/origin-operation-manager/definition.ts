/**
 * @author WMXPY
 * @namespace OperationOperationManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

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
