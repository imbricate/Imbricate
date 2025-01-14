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

export const S_Action_ActionNotFound: unique symbol = Symbol("Action_ActionNotFound");
export const S_Action_ActionParameterNotFound: unique symbol = Symbol("Action_ActionParameterNotFound");

export type CommonActionOutcomeSymbol =
    | typeof S_Action_ActionNotFound
    | typeof S_Action_ActionParameterNotFound;

export const CommonActionOutcomeSymbolList: CommonActionOutcomeSymbol[] = [
    S_Action_ActionNotFound,
    S_Action_ActionParameterNotFound,
];
