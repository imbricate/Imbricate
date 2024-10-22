/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Definition
 */

import type { ImbricateCapabilityRecord } from "../capability/definition";

export type ImbricateBinaryStorageCapability =
    ImbricateCapabilityRecord<IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY>;

export enum IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY {

    UPLOAD_FILE = "imbricate.binary.storage.upload",
}

export const ImbricateBinaryStorageCapabilityList: IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY[] = [

    IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE,
];
