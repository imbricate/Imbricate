/**
 * @author WMXPY
 * @namespace Page
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageVariant } from "../page-variant/definition";
import { ImbricatePageAttributes, ImbricatePageCapability, ImbricatePageHistoryRecord } from "./definition";

export interface IImbricatePage {

    readonly title: string;
    readonly directories: string[];
    readonly identifier: string;
    readonly variant: ImbricatePageVariant;

    readonly digest: string;
    readonly historyRecords: ImbricatePageHistoryRecord[];

    readonly description?: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly capabilities: ImbricatePageCapability;

    readContent(): PromiseOr<string>;
    writeContent(content: string): PromiseOr<void>;

    readAttributes(): PromiseOr<ImbricatePageAttributes>;
    writeAttribute(key: string, value: string): PromiseOr<void>;

    refreshUpdateMetadata(updatedAt: Date, digest: string): PromiseOr<void>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
    refreshDigest(digest: string): PromiseOr<void>;
    addHistoryRecord(record: ImbricatePageHistoryRecord): PromiseOr<void>;
}
