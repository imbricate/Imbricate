/**
 * @author WMXPY
 * @namespace CollectionOperationManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateCollectionOperationManagerCapability =
    Record<IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY {

    LIST_OPERATIONS = "imbricate.collection-operation.list",
    EXECUTE_OPERATION = "imbricate.collection-operation.execute",
}

export const ImbricateCollectionOperationManagerCapabilityList: IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY.LIST_OPERATIONS,
    IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY.EXECUTE_OPERATION,
];
