/**
 * @author WMXPY
 * @namespace Search
 * @description Definition
 */

import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "./snippet";

export type ImbricateScriptSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;

export type ImbricateScriptSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;
