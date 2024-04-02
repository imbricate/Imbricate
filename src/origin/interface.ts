/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { MarkedResult } from "@sudoo/marked";
import { IImbricateOriginCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { SandboxExecuteConfig } from "../sandbox/definition/config";
import { ImbricateScriptSnapshot } from "../script/definition";

export type ImbricateOriginMetadata = {

    readonly type: string;
};

export interface IImbricateOrigin {

    readonly metadata: ImbricateOriginMetadata;
    readonly payloads: Record<string, any>;

    createCollection(collectionName: string, description?: string): PromiseOr<void>;
    hasCollection(collectionName: string): PromiseOr<boolean>;
    getCollection(collectionName: string): PromiseOr<IImbricateOriginCollection | null>;
    listCollections(): PromiseOr<IImbricateOriginCollection[]>;
    removeCollection(): PromiseOr<void>;

    createScript(scriptName: string, description?: string): PromiseOr<ImbricateScriptSnapshot>;
    deleteScript(identifier: string, scriptName: string): PromiseOr<void>;
    hasScript(scriptName: string): PromiseOr<boolean>;
    readScript(identifier: string): PromiseOr<string | null>;
    writeScript(identifier: string, content: string): PromiseOr<void>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;

    executeScript(identifier: string, config: SandboxExecuteConfig): PromiseOr<MarkedResult | null>;
}
