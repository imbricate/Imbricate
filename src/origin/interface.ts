/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

import { IImbricateDatabase } from "../database/interface";
import { ImbricateDatabaseSchema } from "../database/schema";

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
    readonly payloads: Record<string, any>;

    /**
     * Get databases from the origin
     * 
     * @returns a promise of the databases in the origin
     */
    getDatabases(): PromiseLike<IImbricateDatabase[]>;

    /**
     * Create a new database
     * 
     * @param databaseName name of the database
     * @param schema schema of the database
     * 
     * @returns a promise of the created database
     */
    createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchema,
    ): PromiseLike<IImbricateDatabase>;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseLike<void>;
}
