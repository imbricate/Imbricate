/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../common/action";
import { IImbricateDatabaseManager } from "../database-manager/database-manager";
import { IImbricateStaticManager } from "../static-manager/static-manager";
import { IImbricateTextManager } from "../text-manager/text-manager";
import { OriginPayload } from "./definition";
import { IMBRICATE_ORIGIN_FEATURE } from "./feature";
import { ImbricateOriginSearchOutcome } from "./outcome";

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
     * Supported features of the origin
     */
    readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[];

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

    /**
     * Search for items in the origin
     * 
     * @param keyword the keyword to search
     * 
     * @returns the search
     *  Symbol: S_Origin_Search_InvalidKeyword - if the keyword is invalid
     */
    search(
        keyword: string,
    ): PromiseLike<ImbricateOriginSearchOutcome>;

    /**
     * Query the origin actions
     * 
     * @param query the query of the origin actions
     * 
     * @returns the origin actions
     *  Symbol: S_Common_QueryOriginActions_Stale - if the origin actions are stale
     *  Symbol: S_Common_QueryOriginActions_Unknown - if the origin actions are unknown
     */
    queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome>;

    /**
     * Execute the origin action
     * 
     * @param input the input of the action
     * 
     * @returns the result of the action
     */
    executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome>;
}
