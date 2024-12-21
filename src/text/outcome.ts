/**
 * @author WMXPY
 * @namespace Text
 * @description Outcome
 */

// Get Content
export const S_Text_GetContent_NotFound: unique symbol = Symbol("Text_GetContent_NotFound");
export const S_Text_GetContent_Unknown: unique symbol = Symbol("Text_GetContent_Unknown");

export type ImbricateTextGetContentOutcomeSymbol =
    | typeof S_Text_GetContent_NotFound
    | typeof S_Text_GetContent_Unknown;

export type ImbricateTextGetContentOutcome = {

    readonly content: string;
} | ImbricateTextGetContentOutcomeSymbol;
