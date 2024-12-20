/**
 * @author WMXPY
 * @namespace Text
 * @description Outcome
 */

// Get Content
export const S_Text_GetContent_NotFound: unique symbol = Symbol("Text_GetContent_NotFound");

export type ImbricateTextGetContentOutcomeSymbol =
    | typeof S_Text_GetContent_NotFound;

export type ImbricateTextGetContentOutcome = {

    readonly content: string;
} | ImbricateTextGetContentOutcomeSymbol;
