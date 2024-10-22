/**
 * @author WMXPY
 * @namespace Function
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import type { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_FUNCTION_CAPABILITY_KEY, ImbricateFunction, ImbricateFunctionCapability, ImbricateFunctionCapabilityList } from "./definition";
import type { IImbricateFunctionManager } from "./interface";

export abstract class ImbricateFunctionManagerBase implements IImbricateFunctionManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_FUNCTION_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_FUNCTION_CAPABILITY_KEY>(
            ImbricateFunctionCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateFunctionCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateFunctionCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateFunctionCapability;

    public findSynchronousOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>> {

        throw ImbricateNotImplemented.create(
            "FindSynchronousOriginFunctions",
            IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS,
        );
    }

    public findAllOriginFunctions(): PromiseOr<Array<ImbricateFunction<IImbricateOrigin>>> {

        throw ImbricateNotImplemented.create(
            "FindAllOriginFunctions",
            IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS,
        );
    }
}
