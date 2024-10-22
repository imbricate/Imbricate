/**
 * @author WMXPY
 * @namespace Execute
 * @description Definition
 */

export enum IMBRICATE_EXECUTE_RESULT_CODE {

    NOT_SUPPORT = "NOT_SUPPORT",

    SUCCESS = "SUCCESS",

    ERROR = "ERROR",
    EXCEPTION = "EXCEPTION",
    TIMEOUT = "TIMEOUT",
}

export type ImbricateExecuteResult = {

    readonly code: IMBRICATE_EXECUTE_RESULT_CODE;
};

export type ImbricateExecuteParameters = Record<string, any>;
export type ImbricateExecuteEnvironment = Record<string, any>;
