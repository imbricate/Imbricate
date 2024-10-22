/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY, ImbricateBinaryStorageCapability, ImbricateBinaryStorageCapabilityList } from "./definition";
import type { IImbricateBinaryStorage } from "./interface";

export abstract class ImbricateBinaryStorageBase implements IImbricateBinaryStorage {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY>(
            ImbricateBinaryStorageCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateBinaryStorageCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateBinaryStorageCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

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
