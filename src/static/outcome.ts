/**
 * @author WMXPY
 * @namespace Static
 * @description Outcome
 */

// Get Content
export const S_Static_GetContent_NotFound: unique symbol = Symbol("Static_GetContent_NotFound");
export const S_Static_GetContent_Unknown: unique symbol = Symbol("Static_GetContent_Unknown");

export type ImbricateStaticGetContentOutcomeSymbol =
    | typeof S_Static_GetContent_NotFound
    | typeof S_Static_GetContent_Unknown;

export type ImbricateStaticGetContentOutcome<ContentFormat> = {

    readonly content: ContentFormat;
} | ImbricateStaticGetContentOutcomeSymbol;
