/**
 * @author WMXPY
 * @namespace Database
 * @description Manager
 */

import { ImbricateDatabaseAuditOptions } from "./definition";
import { IImbricateDatabase } from "./interface";
import { ImbricateDatabaseSchemaForCreation } from "./schema";

export interface IImbricateDatabaseManager {

    /**
     * List all databases in the origin
     * 
     * @returns a promise of the databases in the origin
     */
    listDatabases(): PromiseLike<IImbricateDatabase[]>;

    /**
     * Get one database from the origin
     * 
     * @param uniqueIdentifier unique identifier of the database
     * 
     * @returns a promise of the database, null if not found
     */
    getDatabase(
        uniqueIdentifier: string,
    ): PromiseLike<IImbricateDatabase | null>;

    /**
     * Create a new database
     * 
     * @param databaseName name of the database
     * @param schema schema of the database
     * @param auditOptions audit options of the database
     * 
     * @returns a promise of the created database
     */
    createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchemaForCreation,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<IImbricateDatabase>;

    /**
     * Remove a database from the origin
     * 
     * @param uniqueIdentifier unique identifier of the database
     * @param auditOptions audit options of deletion
     */
    removeDatabase(
        uniqueIdentifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<void>;
}
