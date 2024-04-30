/**
 * @author WMXPY
 * @namespace Function
 * @description Definition
 */

import { PromiseOr } from "../definition/promise";
import { IImbricateOrigin } from "../origin/interface";

export enum IMBRICATE_FUNCTION_TARGET_TYPE {

    ORIGIN = "ORIGIN",
}

export type ImbricateFunction<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE,
    Asynchronous extends boolean
> = {

    readonly target: TargetType;

    readonly asynchronousDeterminer: Asynchronous;

    readonly title: string;
    readonly description?: string;

    readonly execute: ImbricateFunctionExecute<TargetType>;
};

export type ImbricateFunctionExecute<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE,
> = (
    target: ImbricateFunctionTargetParameter<TargetType>,
) => PromiseOr<any>;

export type ImbricateFunctionTargetParameter<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE
> =
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE.ORIGIN ? IImbricateOrigin
    : never;
