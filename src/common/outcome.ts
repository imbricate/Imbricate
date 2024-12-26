/**
 * @author WMXPY
 * @namespace Common
 * @description Outcome
 */

export const S_Common_Origin_ConnectionFail: unique symbol = Symbol("Common_Origin_ConnectionFail");
export const S_Common_Origin_ConnectionTimeout: unique symbol = Symbol("Common_Origin_ConnectionTimeout");
export const S_Common_Origin_NotAuthorized: unique symbol = Symbol("Common_Origin_NotAuthorized");

export type CommonOutcomeSymbol =
    | typeof S_Common_Origin_ConnectionFail
    | typeof S_Common_Origin_ConnectionTimeout
    | typeof S_Common_Origin_NotAuthorized;

export const CommonOutcomeSymbolList: CommonOutcomeSymbol[] = [
    S_Common_Origin_ConnectionFail,
    S_Common_Origin_ConnectionTimeout,
    S_Common_Origin_NotAuthorized,
];
