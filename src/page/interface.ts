/**
 * @author WMXPY
 * @namespace Page
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";
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

    /**
     * Refresh Updated At and Digest, and add a history record
     * Recommended to use this method when updating the page
     * 
     * @param updatedAt Updated At
     * @param digest Content Digest
     * @param author Author
     */
    refreshUpdateMetadata(
        updatedAt: Date,
        digest: string,
        author: ImbricateAuthor,
    ): PromiseOr<void>;

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
    addHistoryRecord(record: ImbricatePageHistoryRecord): PromiseOr<void>;
}
