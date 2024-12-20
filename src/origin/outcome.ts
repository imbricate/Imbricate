/**
 * @author WMXPY
 * @namespace Origin
 * @description Outcome
 */

import { ImbricateSearchItem } from "./search";

// Search
export const S_Origin_Search_InvalidKeyword: unique symbol = Symbol("Origin_Search_InvalidKeyword");

export type ImbricateOriginSearchOutcomeSymbol =
    | typeof S_Origin_Search_InvalidKeyword;

export type ImbricateOriginSearchOutcome = {

    readonly items: ImbricateSearchItem[];
} | ImbricateOriginSearchOutcomeSymbol;
