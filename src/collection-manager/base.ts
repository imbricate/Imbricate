/**
 * @author WMXPY
 * @namespace CollectionManager
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { IImbricateCollection } from "../collection/interface";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { ImbricatePageVariant } from "../page-variant/definition";
import { IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY, ImbricateCollectionManagerCapability, ImbricateCollectionManagerCapabilityList } from "./definition";
import { IImbricateCollectionManager } from "./interface";

export abstract class ImbricateCollectionManagerBase implements IImbricateCollectionManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY>(
            ImbricateCollectionManagerCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateCollectionManagerCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateCollectionManagerCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateCollectionManagerCapability;

    public async findSupportedVariants(
        _variant?: Partial<ImbricatePageVariant>,
    ): Promise<ImbricatePageVariant[]> {

        return [];
    }

    public createCollection(
        _collectionName: string,
        _description?: string,
    ): PromiseOr<IImbricateCollection> {

        throw ImbricateNotImplemented.create(
            "CreateCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.CREATE_COLLECTION,
        );
    }

    public renameCollection(
        _collectionUniqueIdentifier: string,
        _newCollectionName: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RenameCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.RENAME_COLLECTION,
        );
    }

    public deleteCollection(
        _collectionUniqueIdentifier: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "DeleteCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.DELETE_COLLECTION,
        );
    }

    public hasCollection(
        _collectionName: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "HasCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }

    public findCollection(
        _collectionName: string,
    ): PromiseOr<IImbricateCollection | null> {

        throw ImbricateNotImplemented.create(
            "FindCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }

    public getCollection(
        _collectionUniqueIdentifier: string,
    ): PromiseOr<IImbricateCollection | null> {

        throw ImbricateNotImplemented.create(
            "GetCollection",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.GET_COLLECTION,
        );
    }

    public listCollections(): PromiseOr<IImbricateCollection[]> {

        throw ImbricateNotImplemented.create(
            "ListCollections",
            IMBRICATE_COLLECTION_MANAGER_CAPABILITY_KEY.LIST_COLLECTIONS,
        );
    }
}
