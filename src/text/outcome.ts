/**
 * @author WMXPY
 * @namespace Text
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";

// Get Content
export const S_Text_GetContent_NotFound: unique symbol = Symbol("Text_GetContent_NotFound");
export const S_Text_GetContent_Unknown: unique symbol = Symbol("Text_GetContent_Unknown");

export type ImbricateTextGetContentOutcomeSymbol =
    | typeof S_Text_GetContent_NotFound
    | typeof S_Text_GetContent_Unknown;

export const ImbricateTextGetContentOutcomeSymbolList: ImbricateTextGetContentOutcomeSymbol[] = [
    S_Text_GetContent_NotFound,
    S_Text_GetContent_Unknown,
];

export const rebuildImbricateTextGetContentSymbol = createRebuildImbricateSymbolFunction(
    ImbricateTextGetContentOutcomeSymbolList,
    S_Text_GetContent_Unknown,
);

export type ImbricateTextGetContentOutcome = {

    readonly content: string;
} | CommonOutcomeSymbol | ImbricateTextGetContentOutcomeSymbol;
