/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateOriginCapability =
    Record<IMBRICATE_ORIGIN_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_ORIGIN_CAPABILITY_KEY {

    CREATE_COLLECTION = "imbricate.origin.collection.create",
    RENAME_COLLECTION = "imbricate.origin.collection.rename",
    DELETE_COLLECTION = "imbricate.origin.collection.delete",
    GET_COLLECTION = "imbricate.origin.collection.get",
    LIST_COLLECTIONS = "imbricate.origin.collection.list",

    CREATE_SCRIPT = "imbricate.origin.script.create",
    PUT_SCRIPT = "imbricate.origin.script.put",
    RENAME_SCRIPT = "imbricate.origin.script.rename",
    DELETE_SCRIPT = "imbricate.origin.script.delete",
    GET_SCRIPT = "imbricate.origin.script.get",
    LIST_SCRIPTS = "imbricate.origin.script.list",
}

export enum IMBRICATE_DIGEST_ALGORITHM {

    MD5 = "MD5",

    SHA1 = "SHA1",
    SHA256 = "SHA256",
}

export type ImbricateOriginMetadata = {

    readonly type: string;
    readonly digestAlgorithm: IMBRICATE_DIGEST_ALGORITHM;
};
