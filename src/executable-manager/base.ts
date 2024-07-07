/**
 * @author WMXPY
 * @namespace ExecutableManager
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { ImbricateExecuteEnvironment, ImbricateExecuteParameters, ImbricateExecuteResult } from "../execute/definition";
import { ImbricateScriptVariant } from "../script-variant/definition";
import { IImbricateScript } from "../script/interface";
import { IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY, ImbricateExecutableManagerCapability, ImbricateExecutableManagerCapabilityList } from "./definition";
import { IImbricateExecutableManager } from "./interface";

export abstract class ImbricateExecutableManagerBase implements IImbricateExecutableManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY>(
            ImbricateExecutableManagerCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateExecutableManagerCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateExecutableManagerCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateExecutableManagerCapability;

    public executeScript(
        _script: IImbricateScript,
        _parameters: ImbricateExecuteParameters,
        _environment: ImbricateExecuteEnvironment,
    ): Promise<ImbricateExecuteResult> {

        throw ImbricateNotImplemented.create(
            "ExecuteScript",
            IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY.EXECUTE_SCRIPT,
        );
    }

    public executeSnippet(
        _snippet: string,
        _variant: ImbricateScriptVariant,
        _parameters: ImbricateExecuteParameters,
        _environment: ImbricateExecuteEnvironment,
    ): Promise<ImbricateExecuteResult> {

        throw ImbricateNotImplemented.create(
            "ExecuteSnippet",
            IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY.EXECUTE_SNIPPET,
        );
    }
}
