/**
 * @author WMXPY
 * @namespace Collection
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateCollectionCapability =
    Record<IMBRICATE_COLLECTION_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_COLLECTION_CAPABILITY_KEY {

    CREATE_PAGE = "imbricate.collection.page.create",
    PUT_PAGE = "imbricate.collection.page.put",
    RETITLE_PAGE = "imbricate.collection.page.retitle",
    DELETE_PAGE = "imbricate.collection.page.delete",
    GET_PAGE = "imbricate.collection.page.get",
    LIST_PAGES = "imbricate.collection.page.list",
}
