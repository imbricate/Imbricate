/**
 * @author WMXPY
 * @namespace OriginOperation
 * @description Interface
 */

export interface IImbricateOriginOperationManager {

    /**
     * Capabilities of the executable manager
     */
    readonly capabilities: ImbricateExecutableManagerCapability;

    /**
     * Find supported variants
     * 
     * @param variant the partial variant to find, if not provided, find all
     * 
     * @returns supported variants
     */
    findSupportedVariants(
        variant?: Partial<ImbricateScriptVariant>,
    ): PromiseOr<ImbricateScriptVariant[]>;

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
        variant: ImbricateScriptVariant,
        parameters: ImbricateExecuteParameters,
        environment: ImbricateExecuteEnvironment,
    ): PromiseOr<ImbricateExecuteResult>;
}
