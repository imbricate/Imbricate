/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateDatabaseManager } from "../database/manager";
import { IImbricateStaticManager } from "../static/manager";
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
     *  The text manager is used to manage text objects
     * 
     * @returns the text manager
     */
    getTextManager(): IImbricateTextManager;

    /**
     * Get the static manager of the origin
     *  The static manager is used to manage static objects
     * 
     * @returns the static manager
     */
    getStaticManager(): IImbricateStaticManager;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     * 
     * If the origin needs to dispose resources, override this method
     *  else, do not implement this method
     * 
     * Example: close database connection, or close file system
     */
    dispose?(): PromiseLike<void>;
}
