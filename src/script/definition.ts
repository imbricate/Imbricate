/**
 * @author WMXPY
 * @namespace Script
 * @description Definition
 */

import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricateScriptAttributes = Record<string, string>;

export type ImbricateScriptSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT>;

export type ImbricateScriptSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT>;

export type ImbricateScriptSnapshot = {

    readonly scriptName: string;
    readonly identifier: string;
};

export type ImbricateScriptHistoryRecord = {

    readonly updatedAt: Date;
    readonly digest: string;
};

export type ImbricateScriptMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly digest: string;
    readonly historyRecords: ImbricateScriptHistoryRecord[];

    readonly description?: string;
} & ImbricateScriptSnapshot;
