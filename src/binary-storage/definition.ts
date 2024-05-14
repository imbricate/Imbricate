/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Definition
 */

import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapabilityRecord } from "../capability/definition";

export type ImbricateBinaryStorageCapability =
    ImbricateCapabilityRecord<IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY>;

export enum IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY {

    UPLOAD_FILE = "imbricate.binary.storage.upload",
}

export const ImbricateBinaryStorageCapabilityList: IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY[] = [

    IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE,
];

export const createAllAllowImbricateBinaryStorageCapability = (): ImbricateBinaryStorageCapability => {

    return {
        [IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
    };
};
