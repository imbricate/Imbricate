/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Interface
 */

import { IImbricateBinaryStorage } from "../binary-storage/interface";
import type { IImbricateCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { IImbricateFunctionManager } from "../function/interface";
import { ImbricateScriptQuery, ImbricateScriptQueryConfig, ImbricateSearchScriptConfig } from "../query/script";
import { ImbricateScriptMetadata, ImbricateScriptSearchResult, ImbricateScriptSnapshot } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { ImbricateOriginCapability, ImbricateOriginMetadata } from "./definition";

export interface IImbricateScriptManager {

    /**
     * Origin type
     */
    readonly originType: string;
    /**
     * Unique identifier of the origin
     */
    readonly uniqueIdentifier: string;

    /**
     * Metadata of the origin
     */
    readonly metadata: ImbricateOriginMetadata;
    /**
     * Payloads of the origin
     */
    readonly payloads: Record<string, any>;

    /**
     * Capabilities of the origin
     */
    readonly capabilities: ImbricateOriginCapability;

    /**
     * Get function manager
     * 
     * @returns Function manager
     */
    getFunctionManager(): IImbricateFunctionManager;

    /**
     * Get binary storage
     * 
     * @returns Binary storage
     */
    getBinaryStorage(): IImbricateBinaryStorage;

    /**
     * Create a collection
     * 
     * @param collectionName Collection name
     * @param description Collection description
     * 
     * @returns Created collection
     */
    createCollection(collectionName: string, description?: string): PromiseOr<IImbricateCollection>;
    renameCollection(collectionUniqueIdentifier: string, newCollectionName: string): PromiseOr<void>;
    deleteCollection(collectionUniqueIdentifier: string): PromiseOr<void>;
    hasCollection(collectionName: string): PromiseOr<boolean>;
    findCollection(collectionName: string): PromiseOr<IImbricateCollection | null>;
    getCollection(collectionUniqueIdentifier: string): PromiseOr<IImbricateCollection | null>;
    listCollections(): PromiseOr<IImbricateCollection[]>;

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

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseOr<void>;
}
