/**
 * @author WMXPY
 * @namespace Database
 * @description Manager
 */

import { IImbricateDatabase } from "./interface";
import { ImbricateDatabaseSchema } from "./schema";

export interface IImbricateDatabaseManager {

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
     * @param uniqueIdentifier unique identifier of the database, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the created database
     */
    createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchema,
        uniqueIdentifier?: string,
    ): PromiseLike<IImbricateDatabase>;
}
