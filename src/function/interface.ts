/**
 * @author WMXPY
 * @namespace Function
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { IImbricateOrigin } from "../origin/interface";
import { ImbricateFunction, ImbricateFunctionCapability } from "./definition";

export interface IImbricateFunctionManager {
    /**
     * Capabilities of the function manager
     */
    readonly capabilities: ImbricateFunctionCapability;

    findSynchronousOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>>;
    findAllOriginFunctions(): PromiseOr<Array<ImbricateFunction<IImbricateOrigin>>>;
}
