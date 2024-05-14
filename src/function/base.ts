/**
 * @author WMXPY
 * @namespace Function
 * @description Base
 */

import { ImbricateNotImplemented } from "../error/not-implemented";
import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_FUNCTION_CAPABILITY_KEY, ImbricateFunction, ImbricateFunctionCapability } from "./definition";
import { IImbricateFunctionManager } from "./interface";

export abstract class ImbricateFunctionManagerBase implements IImbricateFunctionManager {

    public abstract readonly capabilities: ImbricateFunctionCapability;

    public findSynchronousOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>> {

        throw ImbricateNotImplemented.create(
            "FindSynchronousOriginFunctions",
            IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS,
        );
    }

    public findAllOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>> {

        throw ImbricateNotImplemented.create(
            "FindAllOriginFunctions",
            IMBRICATE_FUNCTION_CAPABILITY_KEY.FIND_ORIGIN_FUNCTIONS,
        );
    }
}
