/**
 * @author WMXPY
 * @namespace Static
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";

// Get Content
export const S_Static_GetContent_NotFound: unique symbol = Symbol("Static_GetContent_NotFound");
export const S_Static_GetContent_Unknown: unique symbol = Symbol("Static_GetContent_Unknown");

export type ImbricateStaticGetContentOutcomeSymbol =
    | typeof S_Static_GetContent_NotFound
    | typeof S_Static_GetContent_Unknown;

export const ImbricateStaticGetContentOutcomeSymbolList: ImbricateStaticGetContentOutcomeSymbol[] = [
    S_Static_GetContent_NotFound,
    S_Static_GetContent_Unknown,
];

export const rebuildImbricateStaticGetContentSymbol = createRebuildImbricateSymbolFunction(
    ImbricateStaticGetContentOutcomeSymbolList,
    S_Static_GetContent_Unknown,
);

export type ImbricateStaticGetContentOutcome<ContentFormat> = {

    readonly content: ContentFormat;
} | CommonOutcomeSymbol | ImbricateStaticGetContentOutcomeSymbol;
