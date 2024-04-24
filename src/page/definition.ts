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
};

export type ImbricatePageHistory = {

    readonly updatedAt: Date;
    readonly digest: string;
};

export type ImbricatePageMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly digest: string;
    readonly histories: ImbricatePageHistory[];

    readonly description?: string;
} & ImbricatePageSnapshot;
