/**
 * @author WMXPY
 * @namespace Database
 * @description Manager
 */

import { IImbricateDatabaseManager, ImbricateDatabaseManagerCreateDatabaseOutcome, ImbricateDatabaseManagerFullFeatureBase, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseManagerQueryDatabasesOutcome, ImbricateDatabaseManagerRemoveDatabaseOutcome, ImbricateDatabaseQuery, ImbricateDatabaseSchemaForCreation, rebuildImbricateDatabaseManagerCreateDatabaseSymbol, rebuildImbricateDatabaseManagerGetDatabaseSymbol, rebuildImbricateDatabaseManagerQueryDatabasesSymbol, rebuildImbricateDatabaseManagerRemoveDatabaseSymbol } from "@imbricate/core";
import { ImbricateStackAPIAuthentication } from "../definition";
import { axiosClient } from "../util/client";
import { getAxiosErrorSymbol } from "../util/error";
import { buildHeader } from "../util/header";
import { joinUrl } from "../util/path-joiner";
import { ImbricateStackAPIDatabase } from "./database";

export class ImbricateStackAPIDatabaseManager extends ImbricateDatabaseManagerFullFeatureBase implements IImbricateDatabaseManager {

    public static create(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
    ): ImbricateStackAPIDatabaseManager {

        return new ImbricateStackAPIDatabaseManager(
            basePath,
            authentication,
        );
    }

    private readonly _basePath: string;
    private readonly _authentication: ImbricateStackAPIAuthentication;

    private constructor(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
    ) {

        super();

        this._basePath = basePath;
        this._authentication = authentication;
    }

    public async queryDatabases(
        query: ImbricateDatabaseQuery,
    ): Promise<ImbricateDatabaseManagerQueryDatabasesOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "query-database",
            ), {
                query,
            }, {
                headers: buildHeader(this._authentication),
            });

            const databases = response.data.databases;

            return {
                databases: databases.map((database: any) => {

                    return ImbricateStackAPIDatabase.create(
                        this._basePath,
                        this._authentication,
                        database.databaseUniqueIdentifier,
                        database.databaseName,
                        database.databaseVersion,
                        database.supportedFeatures,
                        database.databaseSchema,
                        database.databaseAnnotations,
                    );
                }),
                count: response.data.count,
            };
        } catch (error) {

            return rebuildImbricateDatabaseManagerQueryDatabasesSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async getDatabase(
        uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseManagerGetDatabaseOutcome> {

        try {

            const response = await axiosClient.get(joinUrl(
                this._basePath,
                "database",
                uniqueIdentifier,
            ), {
                headers: buildHeader(this._authentication),
            });

            const databaseName = response.data.databaseName;
            const databaseVersion = response.data.databaseVersion;
            const supportedFeatures = response.data.supportedFeatures;
            const databaseSchema = response.data.databaseSchema;
            const databaseAnnotations = response.data.databaseAnnotations;

            const database = ImbricateStackAPIDatabase.create(

                this._basePath,
                this._authentication,
                uniqueIdentifier,
                databaseName,
                databaseVersion,
                supportedFeatures,
                databaseSchema,
                databaseAnnotations,
            );

            return {
                database,
            };
        } catch (error) {

            return rebuildImbricateDatabaseManagerGetDatabaseSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async createDatabase(
        databaseName: string,
        schema: ImbricateDatabaseSchemaForCreation,
    ): Promise<ImbricateDatabaseManagerCreateDatabaseOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "create-database",
            ), {
                databaseName,
                schema,
            }, {
                headers: buildHeader(this._authentication),
            });

            const databaseUniqueIdentifier = response.data.databaseUniqueIdentifier;
            const databaseVersion = response.data.databaseVersion;
            const supportedFeatures = response.data.supportedFeatures;
            const responseSchema = response.data.schema;
            const responseAnnotations = response.data.annotations;

            const database = ImbricateStackAPIDatabase.create(

                this._basePath,
                this._authentication,
                databaseUniqueIdentifier,
                databaseName,
                databaseVersion,
                supportedFeatures,
                responseSchema,
                responseAnnotations,
            );

            return {
                database,
            };
        } catch (error) {

            return rebuildImbricateDatabaseManagerCreateDatabaseSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async removeDatabase(
        uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseManagerRemoveDatabaseOutcome> {

        try {

            await axiosClient.delete(joinUrl(
                this._basePath,
                "database",
                uniqueIdentifier,
            ), {
                headers: buildHeader(this._authentication),
            });

            return {
                success: true,
            };
        } catch (error) {

            return rebuildImbricateDatabaseManagerRemoveDatabaseSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }
}
