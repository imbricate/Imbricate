/**
 * @author WMXPY
 * @namespace Origin
 * @description Base
 */

import type { IImbricateBinaryStorage } from "../binary-storage/interface";
import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import type { IImbricateCollection } from "../collection/interface";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import type { IImbricateFunctionManager } from "../function/interface";
import type { IImbricateOrigin } from "../origin/interface";
import { ImbricateScriptQuery, ImbricateScriptQueryConfig, ImbricateSearchScriptConfig } from "../query/script";
import { ImbricateScriptMetadata } from "../script/definition";
import type { IImbricateScript } from "../script/interface";
import { IMBRICATE_ORIGIN_CAPABILITY_KEY, ImbricateOriginCapability, ImbricateOriginCapabilityList, ImbricateOriginMetadata } from "./definition";

export abstract class ImbricateOriginBase implements IImbricateOrigin {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_ORIGIN_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_ORIGIN_CAPABILITY_KEY>(
            ImbricateOriginCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateOriginCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateOriginCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly originType: string;
    public abstract readonly uniqueIdentifier: string;

    public abstract readonly metadata: ImbricateOriginMetadata;
    public abstract readonly payloads: Record<string, any>;

    public abstract readonly capabilities: ImbricateOriginCapability;

    public getFunctionManager(): IImbricateFunctionManager {

        throw ImbricateNotImplemented.create(
            "GetFunctionManager",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_FUNCTION,
        );
    }

    public getBinaryStorage(): IImbricateBinaryStorage {

        throw ImbricateNotImplemented.create(
            "GetBinaryStorage",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_BINARY_STORAGE,
        );
    }

    public createCollection(
        _collectionName: string,
        _description?: string,
    ): PromiseOr<IImbricateCollection> {

        throw ImbricateNotImplemented.create(
            "CreateCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_COLLECTION,
        );
    }

    public renameCollection(
        _collectionUniqueIdentifier: string,
        _newCollectionName: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RenameCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_COLLECTION,
        );
    }

    public deleteCollection(
        _collectionUniqueIdentifier: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "DeleteCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_COLLECTION,
        );
    }

    public hasCollection(
        _collectionName: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "HasCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }

    public findCollection(
        _collectionName: string,
    ): PromiseOr<IImbricateCollection | null> {

        throw ImbricateNotImplemented.create(
            "FindCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }

    public getCollection(
        _collectionUniqueIdentifier: string,
    ): PromiseOr<IImbricateCollection | null> {

        throw ImbricateNotImplemented.create(
            "GetCollection",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_COLLECTION,
        );
    }

    public listCollections(): PromiseOr<IImbricateCollection[]> {

        throw ImbricateNotImplemented.create(
            "ListCollections",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }

    public createScript(
        _scriptName: string,
        _initialScript: string,
        _description?: string,
    ): PromiseOr<IImbricateScript> {

        throw ImbricateNotImplemented.create(
            "CreateScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.CREATE_SCRIPT,
        );
    }

    public putScript(
        _scriptMetadata: ImbricateScriptMetadata,
        _script: string,
    ): PromiseOr<IImbricateScript> {

        throw ImbricateNotImplemented.create(
            "PutScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.PUT_SCRIPT,
        );
    }

    public renameScript(
        _identifier: string,
        _newScriptName: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RenameScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.RENAME_SCRIPT,
        );
    }

    public deleteScript(
        _identifier: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "DeleteScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.DELETE_SCRIPT,
        );
    }

    public hasScript(
        _scriptName: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "HasScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public getScript(
        _identifier: string,
    ): PromiseOr<IImbricateScript | null> {

        throw ImbricateNotImplemented.create(
            "GetScript",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.GET_SCRIPT,
        );
    }

    public listScripts(): PromiseOr<IImbricateScript[]> {

        throw ImbricateNotImplemented.create(
            "ListScripts",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public searchScripts(
        _keyword: string,
        _config: ImbricateSearchScriptConfig,
    ): PromiseOr<any[]> {

        throw ImbricateNotImplemented.create(
            "SearchScripts",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }

    public queryScripts(
        _query: ImbricateScriptQuery,
        _config: ImbricateScriptQueryConfig,
    ): PromiseOr<IImbricateScript[]> {

        throw ImbricateNotImplemented.create(
            "QueryScripts",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.LIST_SCRIPTS,
        );
    }
}
