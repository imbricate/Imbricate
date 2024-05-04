/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateOriginCapability =
    Record<IMBRICATE_ORIGIN_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_ORIGIN_CAPABILITY_KEY {

    CREATE_COLLECTION = "CREATE_COLLECTION",
    RENAME_COLLECTION = "RENAME_COLLECTION",
    DELETE_COLLECTION = "DELETE_COLLECTION",
    GET_COLLECTION = "GET_COLLECTION",
    LIST_COLLECTIONS = "LIST_COLLECTIONS",

    CREATE_SCRIPT = "CREATE_SCRIPT",
    PUT_SCRIPT = "PUT_SCRIPT",
    RENAME_SCRIPT = "RENAME_SCRIPT",
    DELETE_SCRIPT = "DELETE_SCRIPT",
    GET_SCRIPT = "GET_SCRIPT",
    LIST_SCRIPTS = "LIST_SCRIPTS",
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
