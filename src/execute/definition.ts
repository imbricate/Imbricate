/**
 * @author WMXPY
 * @namespace Execute
 * @description Definition
 */

export enum IMBRICATE_EXECUTABLE_VARIANT {

    JAVASCRIPT_NODE = "javascript-node",
    TYPESCRIPT_NODE = "typescript-node",
}

export const IMBRICATE_SCRIPT_VARIANT_LIST: IMBRICATE_EXECUTABLE_VARIANT[] = [

    IMBRICATE_EXECUTABLE_VARIANT.JAVASCRIPT_NODE,
    IMBRICATE_EXECUTABLE_VARIANT.TYPESCRIPT_NODE,
];

export const isValidImbricateExecutableVariant = (
    variant: unknown,
): variant is IMBRICATE_EXECUTABLE_VARIANT => {

    return IMBRICATE_SCRIPT_VARIANT_LIST.includes(variant as any);
};

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
