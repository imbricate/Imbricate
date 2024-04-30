/**
 * @author WMXPY
 * @namespace Function
 * @description Definition
 */

import { PromiseOr } from "../definition/promise";

export type ImbricateFunction<Target> = {

    readonly title: string;
    readonly description?: string;

    readonly execute: ImbricateFunctionExecute<Target>;
};

export type ImbricateFunctionExecute<Target> = (
    target: Target,
) => PromiseOr<void>;
