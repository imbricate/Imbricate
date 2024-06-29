/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { ImbricateScriptQuery, ImbricateScriptQueryConfig, ImbricateSearchScriptConfig } from "../query/script";
import { IImbricateScriptManager } from "../script-manager/interface";
import { ImbricateScriptMetadata, ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY, ImbricateScriptManagerCapability, ImbricateScriptManagerCapabilityList } from "./definition";

export abstract class ImbricateScriptManagerBase implements IImbricateScriptManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY>(
            ImbricateScriptManagerCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateScriptManagerCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateScriptManagerCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateScriptManagerCapability;

    public createScript(
        _scriptName: string,
        _initialScript: string,
        _description?: string,
    ): PromiseOr<IImbricateScript> {

        throw ImbricateNotImplemented.create(
            "CreateScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.CREATE_SCRIPT,
        );
    }

    public putScript(
        _scriptMetadata: ImbricateScriptMetadata,
        _script: string,
    ): PromiseOr<IImbricateScript> {

        throw ImbricateNotImplemented.create(
            "PutScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.PUT_SCRIPT,
        );
    }

    public renameScript(
        _identifier: string,
        _newScriptName: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RenameScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.RENAME_SCRIPT,
        );
    }

    public deleteScript(
        _identifier: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "DeleteScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.DELETE_SCRIPT,
        );
    }

    public hasScript(
        _scriptName: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "HasScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public getScript(
        _identifier: string,
    ): PromiseOr<IImbricateScript | null> {

        throw ImbricateNotImplemented.create(
            "GetScript",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.GET_SCRIPT,
        );
    }

    public listScripts(): PromiseOr<ImbricateScriptSnapshot[]> {

        throw ImbricateNotImplemented.create(
            "ListScripts",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public searchScripts(
        _keyword: string,
        _config: ImbricateSearchScriptConfig,
    ): PromiseOr<any[]> {

        throw ImbricateNotImplemented.create(
            "SearchScripts",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public queryScripts(
        _query: ImbricateScriptQuery,
        _config: ImbricateScriptQueryConfig,
    ): PromiseOr<IImbricateScript[]> {

        throw ImbricateNotImplemented.create(
            "QueryScripts",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public executeScriptSnippet(
        _snippet: string,
        _features: any,
        _config: any,
        _parameter: any,
    ): PromiseOr<any> {

        throw ImbricateNotImplemented.create(
            "ExecuteScriptSnippet",
            IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.EXECUTE_SCRIPT_SNIPPET,
        );
    }
}
