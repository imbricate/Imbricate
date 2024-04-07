/**
 * @author WMXPY
 * @namespace Search
 * @description Prefix
 */

import { IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE, IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE, IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchSnippet } from "./snippet";

export const getShortPrefixOfSnippet = <T extends IMBRICATE_SEARCH_RESULT_TYPE>(
    type: T,
    snippet: ImbricateSearchSnippet<T>,
): string => {

    switch (type) {

        case IMBRICATE_SEARCH_RESULT_TYPE.PAGE: {

            switch (snippet.source) {

                case IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE.TITLE: {
                    return "T";
                }
                case IMBRICATE_SEARCH_SNIPPET_PAGE_SNIPPET_SOURCE.CONTENT: {
                    return "C";
                }
            }
            break;
        }
        case IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT: {

            switch (snippet.source) {

                case IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE.NAME: {
                    return "N";
                }
                case IMBRICATE_SEARCH_SNIPPET_SCRIPT_SNIPPET_SOURCE.SCRIPT: {
                    return "D";
                }
            }
            break;
        }
    }
    return "?";
};
