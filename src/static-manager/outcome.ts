/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { IImbricateStatic } from "../static/interface";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";

// Manager Get Static
export const S_StaticManager_GetStatic_NotFound: unique symbol = Symbol("StaticManager_GetStatic_NotFound");
export const S_StaticManager_GetStatic_Unknown: unique symbol = Symbol("StaticManager_GetStatic_Unknown");

export type ImbricateStaticManagerGetStaticOutcomeSymbol =
    | typeof S_StaticManager_GetStatic_NotFound
    | typeof S_StaticManager_GetStatic_Unknown;

export const ImbricateStaticManagerGetStaticOutcomeSymbolList: ImbricateStaticManagerGetStaticOutcomeSymbol[] = [
    S_StaticManager_GetStatic_NotFound,
    S_StaticManager_GetStatic_Unknown,
];

export const rebuildImbricateStaticManagerGetStaticSymbol = createRebuildImbricateSymbolFunction(
    ImbricateStaticManagerGetStaticOutcomeSymbolList,
    S_StaticManager_GetStatic_Unknown,
);

export type ImbricateStaticManagerGetStaticOutcome = {

    readonly static: IImbricateStatic;
} | CommonOutcomeSymbol | ImbricateStaticManagerGetStaticOutcomeSymbol;

// Manager Create Static
export const S_StaticManager_CreateStatic_IdentifierDuplicated: unique symbol = Symbol("StaticManager_CreateStatic_IdentifierDuplicated");
export const S_StaticManager_CreateStatic_Unknown: unique symbol = Symbol("StaticManager_CreateStatic_Unknown");

export type ImbricateStaticManagerCreateStaticOutcomeSymbol =
    | typeof S_StaticManager_CreateStatic_IdentifierDuplicated
    | typeof S_StaticManager_CreateStatic_Unknown;

export const ImbricateStaticManagerCreateStaticOutcomeSymbolList: ImbricateStaticManagerCreateStaticOutcomeSymbol[] = [
    S_StaticManager_CreateStatic_IdentifierDuplicated,
    S_StaticManager_CreateStatic_Unknown,
];

export const rebuildImbricateStaticManagerCreateStaticSymbol = createRebuildImbricateSymbolFunction(
    ImbricateStaticManagerCreateStaticOutcomeSymbolList,
    S_StaticManager_CreateStatic_Unknown,
);

export type ImbricateStaticManagerCreateStaticOutcome = {

    readonly static: IImbricateStatic;
} | CommonOutcomeSymbol | ImbricateStaticManagerCreateStaticOutcomeSymbol;

// Manager Get Static URI
export const S_StaticManager_GetStaticUri_NotFound: unique symbol = Symbol("StaticManager_GetStaticUri_NotFound");
export const S_StaticManager_GetStaticUri_Unknown: unique symbol = Symbol("StaticManager_GetStaticUri_Unknown");

export type ImbricateStaticManagerGetStaticUriOutcomeSymbol =
    | typeof S_StaticManager_GetStaticUri_NotFound
    | typeof S_StaticManager_GetStaticUri_Unknown;

export const ImbricateStaticManagerGetStaticUriOutcomeSymbolList: ImbricateStaticManagerGetStaticUriOutcomeSymbol[] = [
    S_StaticManager_GetStaticUri_NotFound,
    S_StaticManager_GetStaticUri_Unknown,
];

export const rebuildImbricateStaticManagerGetStaticUri = createRebuildImbricateSymbolFunction(
    ImbricateStaticManagerGetStaticUriOutcomeSymbolList,
    S_StaticManager_GetStaticUri_Unknown,
);

export type ImbricateStaticManagerGetStaticUriOutcome = {

    readonly uri: string;
} | CommonOutcomeSymbol | ImbricateStaticManagerGetStaticUriOutcomeSymbol;
