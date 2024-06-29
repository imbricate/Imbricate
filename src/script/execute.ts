/**
 * @author WMXPY
 * @namespace Script
 * @description Execute
 */

export enum IMBRICATE_EXECUTE_RESULT_CODE {

    SUCCESS = 0,
    ERROR = 1,
}

export type ImbricateExecuteResult = {

    readonly code: IMBRICATE_EXECUTE_RESULT_CODE;
};

export type ImbricateExecuteParameters = Record<string, any>;
export type ImbricateExecuteEnvironment = Record<string, any>;
