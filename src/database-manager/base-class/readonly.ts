/**
 * @author WMXPY
 * @namespace DatabaseManager
 * @description Readonly
 */

import { ImbricateDatabaseAuditOptions } from "../../database/definition";
import { ImbricateDatabaseSchemaForCreation } from "../../database/schema";
import { ImbricateDatabaseManagerFeatureNotSupportedError } from "../../error/database-manager/feature-not-supported";
import { IImbricateDatabaseManager } from "../database-manager";
import { IMBRICATE_DATABASE_MANAGER_FEATURE } from "../feature";
import { ImbricateDatabaseManagerCreateDatabaseOutcome, ImbricateDatabaseManagerRemoveDatabaseOutcome } from "../outcome";
import { ImbricateDatabaseManagerFullFeatureBase } from "./full-feature";

export abstract class ImbricateDatabaseManagerReadonlyBase extends ImbricateDatabaseManagerFullFeatureBase implements IImbricateDatabaseManager {

    public readonly supportedFeatures: IMBRICATE_DATABASE_MANAGER_FEATURE[] = [

        IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_GET_DATABASE,
    ];

    public createDatabase(
        _databaseName: string,
        _schema: ImbricateDatabaseSchemaForCreation,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseManagerCreateDatabaseOutcome> {

        throw ImbricateDatabaseManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_PUT_DATABASE,
        );
    }

    public removeDatabase(
        _uniqueIdentifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseManagerRemoveDatabaseOutcome> {

        throw ImbricateDatabaseManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_MANAGER_FEATURE.DATABASE_MANAGER_DELETE_DATABASE,
        );
    }
}
