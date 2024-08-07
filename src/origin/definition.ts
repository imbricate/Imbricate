/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

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
    ORIGIN_SCRIPT_MANAGER = "imbricate.origin.script-manager",
    ORIGIN_COLLECTION_MANAGER = "imbricate.origin.collection-manager",
    ORIGIN_OPERATION_MANAGER = "imbricate.origin.operation-manager",
}

export const ImbricateOriginCapabilityList: IMBRICATE_ORIGIN_CAPABILITY_KEY[] = [

    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_FUNCTION,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_BINARY_STORAGE,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_TRASH_STASH,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_SCRIPT_MANAGER,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_COLLECTION_MANAGER,
    IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_OPERATION_MANAGER,
];
