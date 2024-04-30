/**
 * @author WMXPY
 * @namespace Origin
 * @description Function
 */

export enum IMBRICATE_FUNCTION_TARGET {

    ORIGIN = "ORIGIN",
}

export type ImbricateFunctionParameter = {

    readonly key: string;

    readonly type: string;
    readonly description: string;
};

export type ImbricateFunction = {

    readonly target: IMBRICATE_FUNCTION_TARGET;

    readonly title: string;
    readonly description?: string;

    readonly parameters: ImbricateFunctionParameter[];
};

export type ImbricateAsynchronousDeterminer = {

};
