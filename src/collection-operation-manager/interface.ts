/**
 * @author WMXPY
 * @namespace CollectionOperationManager
 * @description Interface
 */

import { ImbricateCollectionOperationManagerCapability } from "./definition";

export interface IImbricateCollectionOperationManager {

    /**
     * Capabilities of the origin operation manager
     */
    readonly capabilities: ImbricateCollectionOperationManagerCapability;
}
