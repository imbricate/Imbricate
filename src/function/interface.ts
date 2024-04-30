/**
 * @author WMXPY
 * @namespace Function
 * @description Interface
 */

import { IImbricateOrigin } from "../origin/interface";

export interface IImbricateFunctionManager {

    findSynchronousOriginFunctions(): Array<IImbricateOrigin>;
}
