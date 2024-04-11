/**
 * @author WMXPY
 * @namespace Script
 * @description Interface
 */

import { MarkedResult } from "@sudoo/marked";
import { PromiseOr } from "../definition/promise";
import { SandboxExecuteConfig, SandboxExecuteParameter } from "../sandbox/definition/config";
import { SandboxFeature } from "../sandbox/feature/feature";

export interface IImbricateScript {

    readonly scriptName: string;
    readonly identifier: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readScript(): PromiseOr<string>;
    writeScript(script: string): PromiseOr<void>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;

    execute(
        features: SandboxFeature[],
        config: SandboxExecuteConfig,
        parameter: SandboxExecuteParameter,
    ): PromiseOr<MarkedResult>
}
