/**
 * @author WMXPY
 * @namespace Function
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { IImbricateOrigin } from "../origin/interface";
import { ImbricateFunction } from "./definition";

export interface IImbricateFunctionManager {

    findSynchronousOriginFunctions(): Array<ImbricateFunction<IImbricateOrigin>>;
    findAllOriginFunctions(): PromiseOr<Array<ImbricateFunction<IImbricateOrigin>>>;
}
