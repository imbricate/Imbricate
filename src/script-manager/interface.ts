/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Interface
 */

import { MarkedResult } from "@sudoo/marked";
import { PromiseOr } from "../definition/promise";
import { ImbricateScriptQuery, ImbricateScriptQueryConfig, ImbricateSearchScriptConfig } from "../query/script";
import { SandboxExecuteConfig, SandboxExecuteParameter } from "../sandbox/definition/config";
import { SandboxFeature } from "../sandbox/feature/feature";
import { ImbricateScriptMetadata, ImbricateScriptSearchResult, ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { ImbricateScriptManagerCapability } from "./definition";

export interface IImbricateScriptManager {

    /**
     * Capabilities of the script manager
     */
    readonly capabilities: ImbricateScriptManagerCapability;

    /**
     * Create a script
     * 
     * @param scriptName Script name
     * @param initialScript Initial script content
     * @param description Script description
     * 
     * @returns Created script
     */
    createScript(scriptName: string, initialScript: string, description?: string): PromiseOr<IImbricateScript>;
    putScript(scriptMetadata: ImbricateScriptMetadata, script: string): PromiseOr<IImbricateScript>;
    renameScript(identifier: string, newScriptName: string): PromiseOr<void>;
    deleteScript(identifier: string): PromiseOr<void>;
    hasScript(scriptName: string): PromiseOr<boolean>;
    getScript(identifier: string): PromiseOr<IImbricateScript | null>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;

    searchScripts(keyword: string, config: ImbricateSearchScriptConfig): PromiseOr<ImbricateScriptSearchResult[]>;
    queryScripts(query: ImbricateScriptQuery, config: ImbricateScriptQueryConfig): PromiseOr<IImbricateScript[]>;

    executeScriptSnippet(
        snippet: string,
        features: SandboxFeature[],
        config: SandboxExecuteConfig,
        parameter: SandboxExecuteParameter,
    ): PromiseOr<MarkedResult>;
}
