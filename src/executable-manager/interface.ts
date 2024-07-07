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

    /**
     * Execute a script
     * 
     * @param script 
     * @param parameters 
     * @param environment 
     * 
     * @returns result of the execution
     */
    executeScript(
        script: IImbricateScript,
        parameters: ImbricateExecuteParameters,
        environment: ImbricateExecuteEnvironment,
    ): PromiseOr<ImbricateExecuteResult>;

    /**
     * Execute a snippet
     * 
     * @param snippet 
     * @param parameters 
     * @param environment 
     * 
     * @returns result of the execution
     */
    executeSnippet(
        snippet: string,
        parameters: ImbricateExecuteParameters,
        environment: ImbricateExecuteEnvironment,
    ): PromiseOr<ImbricateExecuteResult>;
}
