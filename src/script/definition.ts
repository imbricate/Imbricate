/**
 * @author WMXPY
 * @namespace Script
 * @description Definition
 */

import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricateScriptSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;

export type ImbricateScriptSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;

export type ImbricateScriptSnapshot = {

    readonly scriptName: string;
    readonly identifier: string;

    readonly description?: string;
};

export type ImbricateScriptMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;
} & ImbricateScriptSnapshot;
