/**
 * @author WMXPY
 * @namespace Collection
 * @description Definition
 */

import type { ImbricateCapability } from "../capability/definition";

export type ImbricateCollectionCapability =
    Record<IMBRICATE_COLLECTION_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_COLLECTION_CAPABILITY_KEY {

    CREATE_PAGE = "imbricate.collection.page.create",
    PUT_PAGE = "imbricate.collection.page.put",
    RETITLE_PAGE = "imbricate.collection.page.retitle",
    DELETE_PAGE = "imbricate.collection.page.delete",
    GET_PAGE = "imbricate.collection.page.get",
    LIST_PAGES = "imbricate.collection.page.list",

    LIST_SUPPORTED_VARIANTS = "imbricate.collection.page.list-supported-variants",

    COLLECTION_OPERATION_MANAGER = "imbricate.collection.operation-manager",
}

export const ImbricateCollectionCapabilityList: IMBRICATE_COLLECTION_CAPABILITY_KEY[] = [

    IMBRICATE_COLLECTION_CAPABILITY_KEY.CREATE_PAGE,
    IMBRICATE_COLLECTION_CAPABILITY_KEY.PUT_PAGE,
    IMBRICATE_COLLECTION_CAPABILITY_KEY.RETITLE_PAGE,
    IMBRICATE_COLLECTION_CAPABILITY_KEY.DELETE_PAGE,
    IMBRICATE_COLLECTION_CAPABILITY_KEY.GET_PAGE,
    IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_PAGES,

    IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_SUPPORTED_VARIANTS,

    IMBRICATE_COLLECTION_CAPABILITY_KEY.COLLECTION_OPERATION_MANAGER,
];
