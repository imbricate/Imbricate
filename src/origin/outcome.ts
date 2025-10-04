/**
 * @namespace Origin
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";
import { ImbricateSearchItem } from "./search";

// Search
export const S_Origin_Search_InvalidKeyword: unique symbol = Symbol("Origin_Search_InvalidKeyword");
export const S_Origin_Search_Unknown: unique symbol = Symbol("Origin_Search_Unknown");

export type ImbricateOriginSearchOutcomeSymbol =
    | typeof S_Origin_Search_InvalidKeyword
    | typeof S_Origin_Search_Unknown;

export const ImbricateOriginSearchOutcomeSymbolList: ImbricateOriginSearchOutcomeSymbol[] = [
    S_Origin_Search_InvalidKeyword,
    S_Origin_Search_Unknown,
];

export const rebuildImbricateOriginSearchSymbol = createRebuildImbricateSymbolFunction(
    ImbricateOriginSearchOutcomeSymbolList,
    S_Origin_Search_Unknown,
);

export type ImbricateOriginSearchOutcome = {

    readonly items: ImbricateSearchItem[];
} | CommonOutcomeSymbol | ImbricateOriginSearchOutcomeSymbol;
