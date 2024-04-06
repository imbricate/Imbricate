/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateOriginCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";
import { ImbricateOriginMetadata } from "./definition";

export type ImbricateScriptSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.SCRIPT>;

export interface IImbricateOrigin {

    readonly metadata: ImbricateOriginMetadata;
    readonly payloads: Record<string, any>;

    createCollection(collectionName: string, description?: string): PromiseOr<void>;
    renameCollection(collectionName: string, newCollectionName: string): PromiseOr<void>;
    deleteCollection(collectionName: string): PromiseOr<void>;
    hasCollection(collectionName: string): PromiseOr<boolean>;
    getCollection(collectionName: string): PromiseOr<IImbricateOriginCollection | null>;
    listCollections(): PromiseOr<IImbricateOriginCollection[]>;

    createScript(scriptName: string, description?: string): PromiseOr<IImbricateScript>;
    renameScript(identifier: string, newScriptName: string): PromiseOr<void>;
    deleteScript(identifier: string, scriptName: string): PromiseOr<void>;
    hasScript(scriptName: string): PromiseOr<boolean>;
    getScript(identifier: string): PromiseOr<IImbricateScript | null>;
    listScripts(): PromiseOr<ImbricateScriptSnapshot[]>;
    searchPages(keyword: string): PromiseOr<ImbricateScriptSearchSnippet[]>;
}
