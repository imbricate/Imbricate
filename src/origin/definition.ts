/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapability } from "../capability/definition";

export enum IMBRICATE_DIGEST_ALGORITHM {

    MD5 = "MD5",

    SHA1 = "SHA1",
    SHA256 = "SHA256",
}

export type ImbricateOriginMetadata = {

    readonly type: string;
    readonly digestAlgorithm: IMBRICATE_DIGEST_ALGORITHM;
};

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

export const createAllAllowOriginCapability = (): ImbricateOriginCapability => {

    return {
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_COLLECTION]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_COLLECTION]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_COLLECTION]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_COLLECTION]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_COLLECTIONS]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.PUT_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
    };
};
