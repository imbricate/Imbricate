/**
 * @author WMXPY
 * @namespace DatabaseManager
 * @description Full Feature
 */

import { ImbricateDatabaseAuditOptions } from "../../database/definition";
import { ImbricateDatabaseSchemaForCreation } from "../../database/schema";
import { IImbricateDatabaseManager } from "../database-manager";
import { IMBRICATE_DATABASE_MANAGER_FEATURE } from "../feature";
import { ImbricateDatabaseManagerCreateDatabaseOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseManagerListDatabasesOutcome, ImbricateDatabaseManagerRemoveDatabaseOutcome } from "../outcome";

export abstract class ImbricateDatabaseManagerFullFeatureBase implements IImbricateDatabaseManager {

    public readonly supportedFeatures: IMBRICATE_DATABASE_MANAGER_FEATURE[] = [

        IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_GET_DATABASE,
        IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_PUT_DATABASE,
        IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_DELETE_DATABASE,
    ];

    public abstract listDatabases(): PromiseLike<ImbricateDatabaseManagerListDatabasesOutcome>;

    public abstract getDatabase(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateDatabaseManagerGetDatabaseOutcome>;

    public abstract createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchemaForCreation,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseManagerCreateDatabaseOutcome>;

    public abstract removeDatabase(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateDatabaseManagerRemoveDatabaseOutcome>;
}
