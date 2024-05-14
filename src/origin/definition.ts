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

    readonly digestAlgorithm: IMBRICATE_DIGEST_ALGORITHM;
};

export type ImbricateOriginCapability =
    Record<IMBRICATE_ORIGIN_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_ORIGIN_CAPABILITY_KEY {

    ORIGIN_FUNCTION = "imbricate.origin.function",
    ORIGIN_BINARY_STORAGE = "imbricate.origin.binary-storage",
    ORIGIN_TRASH_STASH = "imbricate.origin.trash-stash",

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

export const ImbricateOriginCapabilityList: IMBRICATE_ORIGIN_CAPABILITY_KEY[] = [

    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_FUNCTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_BINARY_STORAGE,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_TRASH_STASH,

    IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_COLLECTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_COLLECTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_COLLECTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_COLLECTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_COLLECTIONS,

    IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_SCRIPT,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.PUT_SCRIPT,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_SCRIPT,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_SCRIPT,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_SCRIPT,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS,
];

export const createAllAllowImbricateOriginCapability = (): ImbricateOriginCapability => {

    return {
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_FUNCTION]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_BINARY_STORAGE]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_TRASH_STASH]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
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
