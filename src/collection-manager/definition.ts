/**
 * @author WMXPY
 * @namespace CollectionManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateCollectionManagerCapability =
    Record<IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY {

    CREATE_COLLECTION = "imbricate.origin.collection.create",
    RENAME_COLLECTION = "imbricate.origin.collection.rename",
    DELETE_COLLECTION = "imbricate.origin.collection.delete",
    GET_COLLECTION = "imbricate.origin.collection.get",
    LIST_COLLECTIONS = "imbricate.origin.collection.list",
}

export const ImbricateCollectionManagerCapabilityList: IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.CREATE_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.RENAME_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.DELETE_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.GET_COLLECTION,
    IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.LIST_COLLECTIONS,
];
