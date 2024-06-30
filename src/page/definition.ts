/**
 * @author WMXPY
 * @namespace Page
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";
import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageAttributes = Record<string, string>;

export type ImbricatePageSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export enum IMBRICATE_PAGE_VARIANT {

    PLAIN_TEXT = "plain-text",

    MARKDOWN = "markdown",
}

export const IMBRICATE_PAGE_VARIANT_LIST: IMBRICATE_PAGE_VARIANT[] = [

    IMBRICATE_PAGE_VARIANT.PLAIN_TEXT,
    IMBRICATE_PAGE_VARIANT.MARKDOWN,
];

export const isValidImbricatePageVariant = (
    variant: unknown,
): variant is IMBRICATE_PAGE_VARIANT => {

    return IMBRICATE_PAGE_VARIANT_LIST.includes(variant as any);
};

export type ImbricatePageSnapshot = {

    readonly title: string;
    readonly directories: string[];

    readonly identifier: string;

    readonly variant: IMBRICATE_PAGE_VARIANT;
};

export type ImbricatePageHistoryRecord = {

    readonly updatedAt: Date;
    readonly digest: string;
};

export type ImbricatePageMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly digest: string;

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
