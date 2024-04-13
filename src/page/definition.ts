/**
 * @author WMXPY
 * @namespace Page
 * @description Definition
 */

import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageAttributes = Record<string, string>;

export type ImbricatePageSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.PAGE>;

export type ImbricatePageSnapshot = {

    readonly title: string;
    readonly identifier: string;

    readonly description?: string;
};

export type ImbricatePageMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;
} & ImbricatePageSnapshot;
