/**
 * @author WMXPY
 * @namespace Static
 * @description Outcome
 */

// Get Content
export const S_Static_GetContent_NotFound: unique symbol = Symbol("Static_GetContent_NotFound");

export type ImbricateStaticGetContentOutcomeSymbol =
    | typeof S_Static_GetContent_NotFound;

export type ImbricateStaticGetContentOutcome<ContentFormat> = {

    readonly content: ContentFormat;
} | ImbricateStaticGetContentOutcomeSymbol;
