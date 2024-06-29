/**
 * @author WMXPY
 * @namespace Script
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";
import { IMBRICATE_EXECUTABLE_VARIANT } from "../execute/definition";
import { IMBRICATE_SEARCH_RESULT_TYPE, ImbricateSearchResult, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricateScriptAttributes = Record<string, string>;

export type ImbricateScriptSearchResult =
    ImbricateSearchResult<IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT>;

export type ImbricateScriptSearchSnippet =
    ImbricateSearchSnippet<IMBRICATE_SEARCH_RESULT_TYPE.SCRIPT>;

export type ImbricateScriptSnapshot = {

    readonly scriptName: string;

    readonly identifier: string;

    readonly variant: IMBRICATE_EXECUTABLE_VARIANT;
};

export type ImbricateScriptHistoryRecord = {

    readonly updatedAt: Date;
    readonly digest: string;
};

export type ImbricateScriptMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly digest: string;

    readonly attributes: ImbricateScriptAttributes;
    readonly historyRecords: ImbricateScriptHistoryRecord[];

    readonly description?: string;
} & ImbricateScriptSnapshot;

export type ImbricateScriptCapability =
    Record<IMBRICATE_SCRIPT_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_SCRIPT_CAPABILITY_KEY {

    READ = "imbricate.script.read",
    WRITE = "imbricate.script.write",
    READ_ATTRIBUTE = "imbricate.script.attribute.read",
    WRITE_ATTRIBUTE = "imbricate.script.attribute.write",
    UPDATE_METADATA = "imbricate.script.metadata.update",
    UPDATE_HISTORY_RECORD = "imbricate.script.history.update",

    EXECUTE = "imbricate.script.execute",
}

export const ImbricateScriptCapabilityList: IMBRICATE_SCRIPT_CAPABILITY_KEY[] = [

    IMBRICATE_SCRIPT_CAPABILITY_KEY.READ,
    IMBRICATE_SCRIPT_CAPABILITY_KEY.WRITE,
    IMBRICATE_SCRIPT_CAPABILITY_KEY.READ_ATTRIBUTE,
    IMBRICATE_SCRIPT_CAPABILITY_KEY.WRITE_ATTRIBUTE,
    IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_METADATA,
    IMBRICATE_SCRIPT_CAPABILITY_KEY.UPDATE_HISTORY_RECORD,

    IMBRICATE_SCRIPT_CAPABILITY_KEY.EXECUTE,
];
