/**
 * @author WMXPY
 * @namespace Page
 * @description Base
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_PAGE_CAPABILITY_KEY, ImbricatePageCapability, ImbricatePageHistoryRecord } from "./definition";
import { IImbricatePage } from "./interface";

export abstract class ImbricatePageBase implements IImbricatePage {

    public abstract readonly title: string;
    public abstract readonly directories: string[];
    public abstract readonly identifier: string;

    public abstract readonly digest: string;
    public abstract readonly historyRecords: ImbricatePageHistoryRecord[];

    public abstract readonly description?: string;

    public abstract readonly createdAt: Date;
    public abstract readonly updatedAt: Date;

    public abstract readonly capabilities: ImbricatePageCapability;

    public readContent(): PromiseOr<string> {

        throw ImbricateNotImplemented.create(
            "ReadContent",
            IMBRICATE_PAGE_CAPABILITY_KEY.READ,
        );
    }

    public writeContent(
        _content: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "WriteContent",
            IMBRICATE_PAGE_CAPABILITY_KEY.WRITE,
        );
    }

    public readAttributes(): PromiseOr<Record<string, string>> {

        throw ImbricateNotImplemented.create(
            "ReadAttributes",
            IMBRICATE_PAGE_CAPABILITY_KEY.READ_ATTRIBUTE,
        );
    }

    public writeAttribute(
        _key: string,
        _value: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "WriteAttribute",
            IMBRICATE_PAGE_CAPABILITY_KEY.WRITE_ATTRIBUTE,
        );
    }

    public refreshUpdateMetadata(
        _updatedAt: Date,
        _digest: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshUpdateMetadata",
            IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public refreshUpdatedAt(
        _updatedAt: Date,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshUpdatedAt",
            IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public refreshDigest(
        _digest: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RefreshDigest",
            IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_METADATA,
        );
    }

    public addHistoryRecord(
        _record: ImbricatePageHistoryRecord,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "AddHistoryRecord",
            IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_HISTORY_RECORD,
        );
    }
}
