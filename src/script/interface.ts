/**
 * @author WMXPY
 * @namespace Script
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateScriptAttributes, ImbricateScriptCapability, ImbricateScriptHistoryRecord } from "./definition";

export interface IImbricateScript {

    readonly scriptName: string;
    readonly identifier: string;

    readonly digest: string;
    readonly historyRecords: ImbricateScriptHistoryRecord[];

    readonly description?: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly capabilities: ImbricateScriptCapability;

    readScript(): PromiseOr<string>;
    writeScript(script: string): PromiseOr<void>;

    readAttributes(): PromiseOr<ImbricateScriptAttributes>;
    writeAttribute(key: string, value: string): PromiseOr<void>;

    refreshUpdateMetadata(updatedAt: Date, digest: string): PromiseOr<void>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
    refreshDigest(digest: string): PromiseOr<void>;
    addHistoryRecord(record: ImbricateScriptHistoryRecord): PromiseOr<void>;

    execute(
        features: any,
        config: any,
        parameter: any,
    ): PromiseOr<null>
}
