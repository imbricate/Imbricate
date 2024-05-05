/**
 * @author WMXPY
 * @namespace Page
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";
import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageCapability =
    Record<IMBRICATE_PAGE_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_PAGE_CAPABILITY_KEY {

    READ = "imbricate.page.read",
    WRITE = "imbricate.page.write",
    READ_ATTRIBUTE = "imbricate.page.attribute.read",
    WRITE_ATTRIBUTE = "imbricate.page.attribute.write",
    UPDATE_METADATA = "imbricate.page.metadata.update",
    UPDATE_HISTORY_RECORD = "imbricate.page.history.update",
}

export type ImbricatePageAttributes = Record<string, string>;

export type ImbricatePageSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSnapshot = {

    readonly title: string;
    readonly directories: string[];

    readonly identifier: string;
};

export type ImbricatePageHistoryRecord = {

    readonly updatedAt: Date;
    readonly digest: string;
};

export type ImbricatePageMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly digest: string;
    readonly historyRecords: ImbricatePageHistoryRecord[];

    readonly description?: string;
} & ImbricatePageSnapshot;
