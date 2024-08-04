/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";
import { PromiseOr } from "../definition/promise";
import { ImbricateScriptQuery, ImbricateScriptQueryConfig, ImbricateSearchScriptConfig } from "../query/script";
import { ImbricateScriptVariant } from "../script-variant/definition";
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
     * @param variant Script variant
     * @param author Author
     * @param initialScript Initial script content
     * @param description Script description
     * 
     * @returns Created script
     */
    createScript(
        scriptName: string,
        variant: ImbricateScriptVariant,
        author: ImbricateAuthor,
        initialScript: string,
        description?: string,
    ): PromiseOr<IImbricateScript>;

    /**
     * Put a script
     * 
     * @param scriptMetadata the metadata of the script
     * @param script the script content
     * 
     * @returns the script
     */
    putScript(scriptMetadata: ImbricateScriptMetadata, script: string): PromiseOr<IImbricateScript>;
    renameScript(identifier: string, newScriptName: string): PromiseOr<void>;
    deleteScript(identifier: string): PromiseOr<void>;
    hasScript(scriptName: string): PromiseOr<boolean>;
    getScript(identifier: string): PromiseOr<IImbricateScript | null>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;

    searchScripts(keyword: string, config: ImbricateSearchScriptConfig): PromiseOr<ImbricateScriptSearchResult[]>;
    queryScripts(query: ImbricateScriptQuery, config: ImbricateScriptQueryConfig): PromiseOr<IImbricateScript[]>;

    listSupportedVariants(): PromiseOr<ImbricateScriptVariant[]>;
}
