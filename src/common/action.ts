/**
 * @author WMXPY
 * @namespace Common
 * @description Action
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";
import { CommonActionOutcomeSymbol, CommonOutcomeSymbol } from "./outcome";

export enum IMBRICATE_ORIGIN_ACTION_PARAMETER_TYPE {

    STRING = "STRING",
}

export type ImbricateOriginActionParameterType = {

    readonly type: IMBRICATE_ORIGIN_ACTION_PARAMETER_TYPE;
};

export type ImbricateOriginActionParameter = {

    readonly parameterKey: string;

    readonly parameterName: Record<IETF_LOCALE, string>;
    readonly parameterDescription: Record<IETF_LOCALE, string>;

    readonly parameterType: ImbricateOriginActionParameterType;
};

export enum IMBRICATE_ORIGIN_ACTION_APPEARANCE {

    DEFAULT = "DEFAULT",
    IMPORTANT = "IMPORTANT",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    DANGER = "DANGER",
}

export type ImbricateOriginAction = {

    readonly actionIdentifier: string;

    readonly actionName: Record<IETF_LOCALE, string>;
    readonly actionDescription: Record<IETF_LOCALE, string>;

    readonly parameters: ImbricateOriginActionParameter[];

    readonly appearance?: IMBRICATE_ORIGIN_ACTION_APPEARANCE;
    readonly disabled?: boolean;
};

export type ImbricateOriginActionInput = {

    readonly actionIdentifier: string;
    readonly parameters: Record<string, any>;
};

export type ImbricateOriginActionResultReference = {
};

export type ImbricateOriginActionResultOutput = {

    readonly content: string;
};

export enum IMBRICATE_ORIGIN_ACTION_RESULT_STATUS {

    SUCCESS = "SUCCESS",
    BAD_INPUT = "BAD_INPUT",
    INTERNAL_ERROR = "INTERNAL_ERROR",
}

export type ImbricateOriginActionOutcome = {

    readonly response: IMBRICATE_ORIGIN_ACTION_RESULT_STATUS;

    readonly outputs: ImbricateOriginActionResultOutput[];
    readonly references: ImbricateOriginActionResultReference[];
} | CommonOutcomeSymbol | CommonActionOutcomeSymbol;

// Query Origin Actions
export const S_Common_QueryOriginActions_Stale: unique symbol = Symbol("Common_QueryOriginActions_Stale");
export const S_Common_QueryOriginActions_Unknown: unique symbol = Symbol("Common_QueryOriginActions_Unknown");

export type ImbricateCommonQueryOriginActionsOutcomeSymbol =
    | typeof S_Common_QueryOriginActions_Stale
    | typeof S_Common_QueryOriginActions_Unknown;

export const ImbricateCommonQueryOriginActionsOutcomeSymbolList: ImbricateCommonQueryOriginActionsOutcomeSymbol[] = [
    S_Common_QueryOriginActions_Stale,
    S_Common_QueryOriginActions_Unknown,
];

export const rebuildImbricateCommonQueryOriginActionsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateCommonQueryOriginActionsOutcomeSymbolList,
    S_Common_QueryOriginActions_Unknown,
);

export type ImbricateCommonQueryOriginActionsOutcome = {

    readonly actions: ImbricateOriginAction[];
    readonly count: number;
} | CommonOutcomeSymbol | ImbricateCommonQueryOriginActionsOutcomeSymbol;

export type ImbricateCommonQueryOriginActionsQuery = {

    readonly limit?: number;
    readonly skip?: number;
};
