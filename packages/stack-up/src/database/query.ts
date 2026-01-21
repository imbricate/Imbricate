/**
 * @author WMXPY
 * @namespace Database
 * @description Query
 */

import { DatabaseAnnotations, IImbricateDatabase, IImbricateOrigin, IMBRICATE_DATABASE_FEATURE, ImbricateDatabaseManagerQueryDatabasesOutcome, ImbricateDatabaseQuery, ImbricateDatabaseSchema, S_DatabaseManager_QueryDatabases_Unknown } from "@imbricate/core";
import express from "express";

export type ImbricateDatabaseQueryResponse = {

    readonly databases: {
        readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

        readonly databaseUniqueIdentifier: string;
        readonly databaseVersion: string;
        readonly databaseName: string;
        readonly databaseSchema: ImbricateDatabaseSchema;
        readonly databaseAnnotations: DatabaseAnnotations;
    }[];
    readonly count: number;
};

export const attachDatabaseQueryRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/query-database", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_DatabaseManager_QueryDatabases_Unknown.description);
            return;
        }

        const query: ImbricateDatabaseQuery = body.query ?? {};
        const databases: ImbricateDatabaseManagerQueryDatabasesOutcome = await origin.getDatabaseManager().queryDatabases(query);

        if (typeof databases === "symbol") {

            console.error("List Databases Failed", databases);
            res.status(404).send(databases.description);
            return;
        }

        const response: ImbricateDatabaseQueryResponse = {
            databases: databases.databases.map((database: IImbricateDatabase) => {
                return {
                    supportedFeatures: database.supportedFeatures,
                    databaseUniqueIdentifier: database.uniqueIdentifier,
                    databaseVersion: database.databaseVersion,
                    databaseName: database.databaseName,
                    databaseSchema: database.schema,
                    databaseAnnotations: database.annotations,
                };
            }),
            count: databases.count,
        };

        res.send(response);
    });
};
