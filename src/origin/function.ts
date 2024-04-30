/**
 * @author WMXPY
 * @namespace Origin
 * @description Function
 */

import { PromiseOr } from "../definition/promise";
import { IImbricateOrigin } from "./interface";

export enum IMBRICATE_FUNCTION_TARGET_TYPE {

    ORIGIN = "ORIGIN",
}

export type ImbricateFunction<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE,
    Asynchronous extends boolean
> = {

    readonly target: TargetType;

    readonly asynchronousDeterminer: Asynchronous;
    readonly determiner: ImbricateFunctionDeterminer<TargetType, Asynchronous>;

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

export type ImbricateAsynchronousDeterminer<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE
> = (
    target: ImbricateFunctionTargetParameter<TargetType>,
) => Promise<boolean>;

export type ImbricateSynchronousDeterminer<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE
> = (
    target: ImbricateFunctionTargetParameter<TargetType>,
) => boolean;

export type ImbricateFunctionDeterminer<
    TargetType extends IMBRICATE_FUNCTION_TARGET_TYPE,
    Asynchronous extends boolean
> = Asynchronous extends true
    ? ImbricateAsynchronousDeterminer<TargetType>
    : ImbricateSynchronousDeterminer<TargetType>;
