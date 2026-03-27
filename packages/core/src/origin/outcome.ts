/**
 * @namespace Origin
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";
import { IMBRICATE_ORIGIN_FEATURE } from "./feature";
import { ImbricateSearchItem } from "./search";

// Supported Features
export const S_Origin_GetSupportedFeatures_Unknown: unique symbol = Symbol("Origin_GetSupportedFeatures_Unknown");

export type ImbricateOriginGetSupportedFeaturesOutcomeSymbol =
    | typeof S_Origin_GetSupportedFeatures_Unknown;

export const ImbricateOriginGetSupportedFeaturesOutcomeSymbolList: ImbricateOriginGetSupportedFeaturesOutcomeSymbol[] = [
    S_Origin_GetSupportedFeatures_Unknown,
];

export const rebuildImbricateOriginGetSupportedFeaturesSymbol = createRebuildImbricateSymbolFunction(
    ImbricateOriginGetSupportedFeaturesOutcomeSymbolList,
    S_Origin_GetSupportedFeatures_Unknown,
);

export type ImbricateOriginGetSupportedFeaturesOutcome = {

    readonly features: IMBRICATE_ORIGIN_FEATURE[];
} | CommonOutcomeSymbol | ImbricateOriginGetSupportedFeaturesOutcomeSymbol;

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
