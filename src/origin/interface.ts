/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateOriginCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { ImbricateScriptMetadata, ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { ImbricateScriptSearchResult } from "../search/definition";
import { ImbricateOriginMetadata } from "./definition";

export interface IImbricateOrigin {

    readonly metadata: ImbricateOriginMetadata;
    readonly payloads: Record<string, any>;

    createCollection(collectionName: string, description?: string, initialScript?: string): PromiseOr<void>;
    renameCollection(collectionName: string, newCollectionName: string): PromiseOr<void>;
    deleteCollection(collectionName: string): PromiseOr<void>;
    hasCollection(collectionName: string): PromiseOr<boolean>;
    getCollection(collectionName: string): PromiseOr<IImbricateOriginCollection | null>;
    listCollections(): PromiseOr<IImbricateOriginCollection[]>;

    createScript(scriptName: string, description?: string): PromiseOr<IImbricateScript>;
    putScript(scriptMetadata: ImbricateScriptMetadata, script: string): PromiseOr<IImbricateScript>;
    renameScript(identifier: string, newScriptName: string): PromiseOr<void>;
    deleteScript(identifier: string, scriptName: string): PromiseOr<void>;
    hasScript(scriptName: string): PromiseOr<boolean>;
    getScript(identifier: string): PromiseOr<IImbricateScript | null>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;
    searchScripts(keyword: string): PromiseOr<ImbricateScriptSearchResult[]>;
}
