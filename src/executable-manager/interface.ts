/**
 * @author WMXPY
 * @namespace ExecutableManager
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateExecuteEnvironment, ImbricateExecuteParameters, ImbricateExecuteResult } from "../execute/definition";
import { IImbricateScript } from "../script/interface";
import { ImbricateExecutableManagerCapability } from "./definition";

export interface IImbricateExecutableManager {

    /**
     * Capabilities of the executable manager
     */
    readonly capabilities: ImbricateExecutableManagerCapability;

    executeScript(
        script: IImbricateScript,
        parameters: ImbricateExecuteParameters,
        environment: ImbricateExecuteEnvironment,
    ): PromiseOr<ImbricateExecuteResult>;
}
