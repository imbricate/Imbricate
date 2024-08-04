/**
 * @author WMXPY
 * @namespace Search
 * @description Snippet
 */

export enum IMBRICATE_SEARCH_RESULT_TYPE {

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

type IMBRICATE_SEARCH_SNIPPET_SNIPPET_SOURCE<T extends IMBRICATE_SEARCH_RESULT_TYPE> =
    T extends IMBRICATE_SEARCH_RESULT_TYPE.PAGE
    ? IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE
    : T extends IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT
    ? IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE
    : never;

type ImbricateSearchSnippetSwitch<T extends IMBRICATE_SEARCH_RESULT_TYPE> =
    T extends IMBRICATE_SEARCH_RESULT_TYPE.PAGE
    ? {
        readonly collectionName: string;
        readonly collectionUniqueIdentifier: string;
    }
    : T extends IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    ? {
        // No Specific Configuration for Script
    }
    : never;

export type ImbricateSearchSnippetHighlight = {

    readonly start: number;
    readonly length: number;
};

export type ImbricateSearchSnippet<T extends IMBRICATE_SEARCH_RESULT_TYPE> = {

    readonly source: IMBRICATE_SEARCH_SNIPPET_SNIPPET_SOURCE<T>;
    readonly snippet: string;

    readonly highlight: ImbricateSearchSnippetHighlight;
};

export type ImbricateSearchResult<T extends IMBRICATE_SEARCH_RESULT_TYPE> = {

    readonly type: T;

    readonly identifier: string;

    readonly headline: string;
    readonly snippets: ImbricateSearchSnippet<T>[];
} & ImbricateSearchSnippetSwitch<T>;
