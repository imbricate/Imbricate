/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateOriginDatabaseManager } from "./database-manager";
import { OriginPayload } from "./definition";
import { IImbricateOriginStaticManager } from "./static-manager";

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
     * Payloads to initialize the origin
     */
    readonly payloads: OriginPayload;

    /**
     * Get the database manager of the origin
     * 
     * @returns the database manager
     */
    getDatabaseManager(): IImbricateOriginDatabaseManager;

    /**
     * Get the static manager of the origin
     * 
     * @returns the static manager
     */
    getStaticManager(): IImbricateOriginStaticManager;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseLike<void>;
}
