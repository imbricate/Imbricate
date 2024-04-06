/**
 * @author WMXPY
 * @namespace Page
 * @description Definition
 */

import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE>;

export type ImbricatePageSnapshot = {

    readonly title: string;
    readonly identifier: string;
};
