/**
 * @author WMXPY
 * @namespace Script
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateScriptVariant } from "../script-variant/definition";
import { ImbricateScriptAttributes, ImbricateScriptCapability, ImbricateScriptHistoryRecord } from "./definition";

export interface IImbricateScript {

    readonly scriptName: string;
    readonly identifier: string;
    readonly variant: ImbricateScriptVariant;

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

    /**
     * Refresh Updated At and Digest, and add a history record
     * Recommended to use this method when updating the script
     * 
     * @param updatedAt Updated At
     * @param digest Content Digest
     */
    refreshUpdateMetadata(updatedAt: Date, digest: string): PromiseOr<void>;

    /**
     * Refresh Updated At
     * Prefer `refreshUpdateMetadata` in most cases
     * 
     * @param updatedAt Updated At
     */
    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
    /**
     * Refresh Digest
     * Prefer `refreshUpdateMetadata` in most cases
     * 
     * @param digest Content Digest
     */
    refreshDigest(digest: string): PromiseOr<void>;
    /**
     * Add a history record
     * Prefer `refreshUpdateMetadata` in most cases
     * 
     * @param record History Record
     */
    addHistoryRecord(record: ImbricateScriptHistoryRecord): PromiseOr<void>;
}
