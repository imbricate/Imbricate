/**
 * @author WMXPY
 * @namespace Search
 * @description Snippet
 */

export enum IMBRICATE_SEARCH_SNIPPET_TYPE {

    PAGE = "PAGE",
    SCRIPT = "SCRIPT",
}

export enum IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE {

    TITLE = "TITLE",
    CONTENT = "CONTENT",
}

export enum IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE {

    NAME = "NAME",
    SCRIPT = "DESCRIPTION",
}

type IMBRICATE_SEARCH_SNIPPET_SNIPPET_SOURCE<T extends IMBRICATE_SEARCH_SNIPPET_TYPE> =
    T extends IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE ? IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE
    : T extends IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT ? IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE
    : never;

export type ImbricateSearchSnippet<T extends IMBRICATE_SEARCH_SNIPPET_TYPE> = {

    readonly type: T;

    readonly scope: string;
    readonly identifier: string;

    readonly headline: string;

    readonly source: IMBRICATE_SEARCH_SNIPPET_SNIPPET_SOURCE<T>;
    readonly snippet: string;
};
