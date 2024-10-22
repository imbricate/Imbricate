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

    /**
     * Find all synchronous origin functions
     * 
     * @returns an array of synchronous origin functions
     */
    findSynchronousOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>>;

    /**
     * Find all origin functions, including asynchronous functions and synchronous functions
     * 
     * @returns a promise of an array of origin functions
     */
    findAllOriginFunctions(): PromiseOr<Array<ImbricateFunction<IImbricateOrigin>>>;
}
