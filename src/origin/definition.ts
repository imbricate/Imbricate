/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricateScriptSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;

export type ImbricateOriginMetadata = {

    readonly type: string;
};
