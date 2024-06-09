/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateBinaryStorage } from "../binary-storage/interface";
import { IImbricateCollectionManager } from "../collection-manager/interface";
import { PromiseOr } from "../definition/promise";
import { IImbricateFunctionManager } from "../function/interface";
import { IImbricateScriptManager } from "../script-manager/interface";
import { ImbricateOriginCapability, ImbricateOriginMetadata } from "./definition";

export interface IImbricateOrigin {

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
     * Get Script manager
     * 
     * @returns Script manager
     */
    getScriptManager(): IImbricateScriptManager;

    /**
     * Get collection manager
     * 
     * @returns Collection manager
     */
    getCollectionManager(): IImbricateCollectionManager;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseOr<void>;
}
