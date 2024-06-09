/**
 * @author WMXPY
 * @namespace CollectionManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateCollectionManagerCapability =
    Record<IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY {

    CREATE_COLLECTION = "imbricate.collection-manager.create",
    RENAME_COLLECTION = "imbricate.collection-manager.rename",
    DELETE_COLLECTION = "imbricate.collection-manager.delete",
    GET_COLLECTION = "imbricate.collection-manager.get",
    LIST_COLLECTIONS = "imbricate.collection-manager.list",
}

export const ImbricateCollectionManagerCapabilityList: IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.CREATE_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.RENAME_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.DELETE_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.GET_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.LIST_COLLECTIONS,
];
