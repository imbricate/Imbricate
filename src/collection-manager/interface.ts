/**
 * @author WMXPY
 * @namespace CollectionManager
 * @description Interface
 */

import { IImbricateCollection } from "../collection/interface";
import { PromiseOr } from "../definition/promise";
import { ImbricateCollectionManagerCapability } from "./definition";

export interface IImbricateCollectionManager {

    /**
     * Capabilities of the collection manager
     */
    readonly capabilities: ImbricateCollectionManagerCapability;

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
}
