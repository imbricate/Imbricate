/**
 * @author WMXPY
 * @namespace Origin
 * @description Function
 */

import { PromiseOr } from "../definition/promise";
import { IImbricateOrigin } from "./interface";

export enum IMBRICATE_FUNCTION_TARGET {

    ORIGIN = "ORIGIN",
}

export type ImbricateFunction<
    Target extends IMBRICATE_FUNCTION_TARGET,
    Asynchronous extends boolean
> = {

    readonly target: Target;

    readonly asynchronousDeterminer: Asynchronous;
    readonly determiner: ImbricateFunctionDeterminer<Target, Asynchronous>;

    readonly title: string;
    readonly description?: string;

    readonly execute: (...args: any[]) => any;
};

export type ImbricateFunctionExecute<
    Target extends IMBRICATE_FUNCTION_TARGET,
> = (
    target: ImbricateFunctionTargetParameter<Target>,
) => PromiseOr<any>;

export type ImbricateFunctionTargetParameter<
    Target extends IMBRICATE_FUNCTION_TARGET
> =
    Target extends IMBRICATE_FUNCTION_TARGET.ORIGIN ? IImbricateOrigin
    : never;

export type ImbricateAsynchronousDeterminer<
    Target extends IMBRICATE_FUNCTION_TARGET
> = (
    target: ImbricateFunctionTargetParameter<Target>,
) => Promise<boolean>;

export type ImbricateSynchronousDeterminer<
    Target extends IMBRICATE_FUNCTION_TARGET
> = (
    target: ImbricateFunctionTargetParameter<Target>,
) => boolean;

export type ImbricateFunctionDeterminer<
    Target extends IMBRICATE_FUNCTION_TARGET,
    Asynchronous extends boolean
> = Asynchronous extends true
    ? ImbricateAsynchronousDeterminer<Target>
    : ImbricateSynchronousDeterminer<Target>;
