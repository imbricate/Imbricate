/**
 * @author WMXPY
 * @namespace TextManager
 * @description Outcome
 */

import { IImbricateText } from "../text/interface";

// Manager Get Text
export const S_TextManager_GetText_NotFound: unique symbol = Symbol("TextManager_GetText_NotFound");
export const S_TextManager_GetText_Unknown: unique symbol = Symbol("TextManager_GetText_Unknown");

export type ImbricateTextManagerGetTextOutcomeSymbol =
    | typeof S_TextManager_GetText_NotFound
    | typeof S_TextManager_GetText_Unknown;

export type ImbricateTextManagerGetTextOutcome = {

    readonly text: IImbricateText;
} | ImbricateTextManagerGetTextOutcomeSymbol;

// Manager Create Text
export const S_TextManager_CreateText_IdentifierDuplicated: unique symbol = Symbol("TextManager_CreateText_IdentifierDuplicated");
export const S_TextManager_CreateText_Unknown: unique symbol = Symbol("TextManager_CreateText_Unknown");

export type ImbricateTextManagerCreateTextOutcomeSymbol =
    | typeof S_TextManager_CreateText_IdentifierDuplicated
    | typeof S_TextManager_CreateText_Unknown;

export type ImbricateTextManagerCreateTextOutcome = {

    readonly text: IImbricateText;
} | ImbricateTextManagerCreateTextOutcomeSymbol;
