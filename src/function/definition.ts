/**
 * @author WMXPY
 * @namespace Function
 * @description Definition
 */

import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapability } from "../capability/definition";
import { PromiseOr } from "../definition/promise";

export type ImbricateFunction<Target> = {

    readonly title: string;
    readonly description?: string;

    readonly execute: ImbricateFunctionExecute<Target>;
};

export type ImbricateFunctionExecute<Target> = (
    target: Target,
) => PromiseOr<void>;

export type ImbricateFunctionCapability =
    Record<IMBRICATE_FUNCTION_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_FUNCTION_CAPABILITY_KEY {

    FIND_ORIGIN_FUNCTIONS = "imbricate.function.origin.find",
}

export const ImbricateFunctionCapabilityList: IMBRICATE_FUNCTION_CAPABILITY_KEY[] = [

    IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS,
];

export const createAllAllowImbricateFunctionCapability = (): ImbricateFunctionCapability => {

    return {
        [IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
    };
};
