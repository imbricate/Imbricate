/**
 * @author WMXPY
 * @namespace Database
 * @description Manager
 */

import { ImbricateDatabaseAuditOptions } from "./definition";
import { ImbricateDatabaseManagerCreateDatabaseOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseManagerListDatabasesOutcome, ImbricateDatabaseManagerRemoveDatabaseOutcome } from "./outcome";
import { ImbricateDatabaseSchemaForCreation } from "./schema";

export interface IImbricateDatabaseManager {

    /**
     * List all databases in the origin
     * 
     * @returns a promise of the databases in the origin
     *  Symbol: S_DatabaseManager_ListDatabases_Stale - if the databases are stale
     */
    listDatabases(): PromiseLike<ImbricateDatabaseManagerListDatabasesOutcome>;

    /**
     * Get one database from the origin
     * 
     * @param uniqueIdentifier unique identifier of the database
     * 
     * @returns a promise of the database
     *  Symbol: S_DatabaseManager_GetDatabase_NotFound - if the database is not found
     */
    getDatabase(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateDatabaseManagerGetDatabaseOutcome>;

    /**
     * Create a new database
     * 
     * @param databaseName name of the database
     * @param schema schema of the database
     * @param auditOptions audit options of the database
     * 
     * @returns a promise of the created database
     *  Symbol: S_DatabaseManager_CreateDatabase_IdentifierDuplicated - if the identifier is duplicated
     */
    createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchemaForCreation,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseManagerCreateDatabaseOutcome>;

    /**
     * Remove a database from the origin
     * 
     * @param uniqueIdentifier unique identifier of the database
     * @param auditOptions audit options of deletion
     * 
     * @returns a promise of the outcome of the removal
     *  Symbol: S_DatabaseManager_RemoveDatabase_NotFound - if the database is not found
     */
    removeDatabase(
        uniqueIdentifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseManagerRemoveDatabaseOutcome>;
}
