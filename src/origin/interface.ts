/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateDatabaseManager } from "../database/manager";
import { IImbricateTextManager } from "../text/manager";
import { OriginPayload } from "./definition";

export interface IImbricateOrigin {

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
    getDatabaseManager(): IImbricateDatabaseManager;

    /**
     * Get the text manager of the origin
     * 
     * @returns the text manager
     */
    getTextManager(): IImbricateTextManager;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseLike<void>;
}
