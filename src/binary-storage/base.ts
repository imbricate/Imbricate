/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Base
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY, ImbricateBinaryStorageCapability } from "./definition";
import { IImbricateBinaryStorage } from "./interface";

export abstract class ImbricateBaseBinaryStorage implements IImbricateBinaryStorage {

    public abstract readonly capabilities: ImbricateBinaryStorageCapability;

    public putBinaryBase64(
        _binary: string,
        _fileName: string,
    ): PromiseOr<string> {

        throw ImbricateNotImplemented.create(
            "PutBinaryBase64",
            IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE,
        );
    }

    public validateBinaryBase64(
        _binary: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "ValidateBinaryBase64",
            IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE,
        );
    }
}
