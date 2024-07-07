/**
 * @author WMXPY
 * @namespace Page
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";
import { ImbricatePageVariant } from "../page-variant/definition";
import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageAttributes = Record<string, string>;

export type ImbricatePageSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSnapshot = {

    readonly title: string;
    readonly directories: string[];

    readonly identifier: string;

    readonly variant: ImbricatePageVariant;
};

export type ImbricatePageHistoryRecord = {

    readonly author: string;

    readonly digest: string;
    readonly updatedAt: Date;
};

export type ImbricatePageMetadata = {

    // Initial Version Data
    readonly createdAt: Date;

    // Current Version Data
    readonly digest: string;
    readonly updatedAt: Date;

    // Metadata
    readonly attributes: ImbricatePageAttributes;
    readonly historyRecords: ImbricatePageHistoryRecord[];

    readonly description?: string;
} & ImbricatePageSnapshot;

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

export const ImbricatePageCapabilityList: IMBRICATE_PAGE_CAPABILITY_KEY[] = [

    IMBRICATE_PAGE_CAPABILITY_KEY.READ,
    IMBRICATE_PAGE_CAPABILITY_KEY.WRITE,
    IMBRICATE_PAGE_CAPABILITY_KEY.READ_ATTRIBUTE,
    IMBRICATE_PAGE_CAPABILITY_KEY.WRITE_ATTRIBUTE,
    IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_METADATA,
    IMBRICATE_PAGE_CAPABILITY_KEY.UPDATE_HISTORY_RECORD,
];
