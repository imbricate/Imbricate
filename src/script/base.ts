/**
 * @author WMXPY
 * @namespace Script
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { ImbricateScriptVariant } from "../script-variant/definition";
import { IMBRICATE_SCRIPT_CAPABILITY_KEY, ImbricateScriptAttributes, ImbricateScriptCapability, ImbricateScriptCapabilityList, ImbricateScriptHistoryRecord } from "./definition";
import type { IImbricateScript } from "./interface";

export abstract class ImbricateScriptBase implements IImbricateScript {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_SCRIPT_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_SCRIPT_CAPABILITY_KEY>(
            ImbricateScriptCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateScriptCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateScriptCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly scriptName: string;
    public abstract readonly identifier: string;
    public abstract readonly variant: ImbricateScriptVariant;

    public abstract readonly digest: string;
    public abstract readonly historyRecords: ImbricateScriptHistoryRecord[];

    public abstract readonly description?: string;

    public abstract readonly createdAt: Date;
    public abstract readonly updatedAt: Date;

    public abstract readonly capabilities: ImbricateScriptCapability;

    public readScript(): PromiseOr<string> {

        throw ImbricateNotImplemented.create(
            "ReadScript",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.READ,
        );
    }

    public writeScript(
        _script: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "WriteScript",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.WRITE,
        );
    }

    public readAttributes(): PromiseOr<ImbricateScriptAttributes> {

        throw ImbricateNotImplemented.create(
            "ReadAttributes",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.READ_ATTRIBUTE,
        );
    }

    public writeAttribute(
        _key: string,
        _value: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "WriteAttribute",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.WRITE_ATTRIBUTE,
        );
    }

    public refreshUpdateMetadata(
        _updatedAt: Date,
        _digest: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshUpdateMetadata",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public refreshUpdatedAt(
        _updatedAt: Date,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshUpdatedAt",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public refreshDigest(
        _digest: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshDigest",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public addHistoryRecord(
        _record: ImbricateScriptHistoryRecord,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "AddHistoryRecord",
            IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_HISTORY_RECORD,
        );
    }
}
