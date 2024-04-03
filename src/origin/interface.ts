/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateOriginCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";

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
    get(identifier: string): PromiseOr<IImbricateScript | null>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;
}
