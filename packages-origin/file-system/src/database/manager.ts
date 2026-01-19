/**
 * @author WMXPY
 * @namespace Database
 * @description Manager
 */

import { DatabaseEditRecord, IImbricateDatabaseManager, IMBRICATE_DATABASE_EDIT_TYPE, ImbricateAuthor, ImbricateDatabaseAuditOptions, ImbricateDatabaseManagerCreateDatabaseOutcome, ImbricateDatabaseManagerFullFeatureBase, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseManagerQueryDatabasesOutcome, ImbricateDatabaseManagerRemoveDatabaseOutcome, ImbricateDatabaseQuery, ImbricateDatabaseSchema, ImbricateDatabaseSchemaForCreation, S_DatabaseManager_CreateDatabase_DatabaseNameDuplicated, S_DatabaseManager_CreateDatabase_IdentifierDuplicated, S_DatabaseManager_CreateDatabase_InvalidSchema, S_DatabaseManager_GetDatabase_NotFound, S_DatabaseManager_RemoveDatabase_NotFound, validateImbricateSchema } from "@imbricate/core";
import { UUIDVersion1 } from "@sudoo/uuid";
import { fixDatabaseSchema } from "../util/fix-schema";
import { deleteDatabaseMeta, getDatabaseMeta, getDatabaseMetaList, putDatabaseMeta } from "./action";
import { ImbricateFileSystemDatabase } from "./database";
import { ImbricateFileSystemDatabaseMeta } from "./definition";

export class ImbricateFileSystemDatabaseManager extends ImbricateDatabaseManagerFullFeatureBase implements IImbricateDatabaseManager {

    public static create(
        author: ImbricateAuthor,
        basePath: string,
    ): ImbricateFileSystemDatabaseManager {

        return new ImbricateFileSystemDatabaseManager(
            author,
            basePath,
        );
    }

    private readonly _author: ImbricateAuthor;
    private readonly _basePath: string;

    private constructor(
        author: ImbricateAuthor,
        basePath: string,
    ) {

        super();

        this._author = author;
        this._basePath = basePath;
    }

    public async queryDatabases(
        _query: ImbricateDatabaseQuery,
    ): Promise<ImbricateDatabaseManagerQueryDatabasesOutcome> {

        const databaseMetaList: ImbricateFileSystemDatabaseMeta[] = await getDatabaseMetaList(
            this._basePath,
        );

        return {
            databases: databaseMetaList.map((item: ImbricateFileSystemDatabaseMeta) => {

                return ImbricateFileSystemDatabase.create(
                    this._basePath,
                    item.uniqueIdentifier,
                    item.databaseName,
                    item.databaseVersion,
                    item.schema,
                    item.annotations,
                );
            }),
            count: databaseMetaList.length,
        };
    }

    public async getDatabase(uniqueIdentifier: string): Promise<ImbricateDatabaseManagerGetDatabaseOutcome> {

        const databaseMeta: ImbricateFileSystemDatabaseMeta | null = await getDatabaseMeta(
            this._basePath,
            uniqueIdentifier,
        );

        if (!databaseMeta) {
            return S_DatabaseManager_GetDatabase_NotFound;
        }

        return {
            database: ImbricateFileSystemDatabase.create(
                this._basePath,
                databaseMeta.uniqueIdentifier,
                databaseMeta.databaseName,
                databaseMeta.databaseVersion,
                databaseMeta.schema,
                databaseMeta.annotations,
            ),
        };
    }

    public async createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchemaForCreation,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabaseManagerCreateDatabaseOutcome> {

        const databases: ImbricateDatabaseManagerQueryDatabasesOutcome = await this.queryDatabases({});

        if (typeof databases === "symbol") {
            return S_DatabaseManager_CreateDatabase_IdentifierDuplicated;
        }

        for (const database of databases.databases) {
            if (database.databaseName === databaseName) {
                return S_DatabaseManager_CreateDatabase_DatabaseNameDuplicated;
            }
        }

        const identifier: string = UUIDVersion1.generateString();
        const fixedSchema: ImbricateDatabaseSchema = fixDatabaseSchema(schema);

        const validationResult: string | null = validateImbricateSchema(fixedSchema);
        if (typeof validationResult === "string") {
            return S_DatabaseManager_CreateDatabase_InvalidSchema;
        }

        const initialEditRecords: DatabaseEditRecord[] = [{
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: "-1",
            afterVersion: "0",
            author: this._author,
            operations: [
                {
                    action: IMBRICATE_DATABASE_EDIT_TYPE.PUT_SCHEMA,
                    value: fixedSchema,
                },
            ],
        }];

        await putDatabaseMeta(
            this._basePath,
            {
                uniqueIdentifier: identifier,
                databaseName,
                databaseVersion: "0",
                schema: fixedSchema,
                editRecords: initialEditRecords,
                annotations: {},
            },
        );

        return {
            database: ImbricateFileSystemDatabase.create(
                this._basePath,
                identifier,
                databaseName,
                "0",
                fixedSchema,
                {},
            ),
        };
    }

    public async removeDatabase(
        uniqueIdentifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabaseManagerRemoveDatabaseOutcome> {

        const databaseMeta: ImbricateFileSystemDatabaseMeta | null = await getDatabaseMeta(
            this._basePath,
            uniqueIdentifier,
        );

        if (!databaseMeta) {
            return S_DatabaseManager_RemoveDatabase_NotFound;
        }

        await deleteDatabaseMeta(
            this._basePath,
            uniqueIdentifier,
        );

        return {
            success: true,
        };
    }
}
