/**
 * @author WMXPY
 * @namespace Common
 * @description Action
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import { CommonActionOutcomeSymbol, CommonOutcomeSymbol } from "./outcome";

export enum IMBRICATE_ORIGIN_ACTION_PARAMETER_TYPE {

    STRING = "STRING",
}

export type ImbricateOriginActionParameterType = {

    readonly type: IMBRICATE_ORIGIN_ACTION_PARAMETER_TYPE;
};

export type ImbricateOriginActionParameter = {

    readonly parameterKey: string;
    readonly getParameterName: (locale: IETF_LOCALE) => string;
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
    readonly getActionName: (locale: IETF_LOCALE) => string;

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

export type ImbricateOriginActionOutcome = {

    readonly response: HTTP_RESPONSE_CODE;

    readonly outputs: ImbricateOriginActionResultOutput[];
    readonly references: ImbricateOriginActionResultReference[];
} | CommonOutcomeSymbol | CommonActionOutcomeSymbol;
