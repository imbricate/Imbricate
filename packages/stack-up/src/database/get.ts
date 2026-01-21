/**
 * @author WMXPY
 * @namespace Database
 * @description Get
 */

import { DatabaseAnnotations, IImbricateOrigin, IMBRICATE_DATABASE_FEATURE, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseSchema, S_DatabaseManager_GetDatabase_Unknown } from "@imbricate/core";
import express from "express";

export type ImbricateDatabaseGetResponse = {

    readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

    readonly databaseUniqueIdentifier: string;
    readonly databaseVersion: string;
    readonly databaseName: string;
    readonly databaseSchema: ImbricateDatabaseSchema;
    readonly databaseAnnotations: DatabaseAnnotations;
};

export const attachDatabaseGetRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.get("/:origin/database/:database", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_DatabaseManager_GetDatabase_Unknown.description);
            return;
        }

        const database: ImbricateDatabaseManagerGetDatabaseOutcome = await origin.getDatabaseManager().getDatabase(
            databaseUniqueIdentifier,
        );

        if (typeof database === "symbol") {

            console.error("Database Not Found", database);
            res.status(404).send(database.description);
            return;
        }

        const response: ImbricateDatabaseGetResponse = {
            supportedFeatures: database.database.supportedFeatures,
            databaseUniqueIdentifier: database.database.uniqueIdentifier,
            databaseVersion: database.database.databaseVersion,
            databaseName: database.database.databaseName,
            databaseSchema: database.database.schema,
            databaseAnnotations: database.database.annotations,
        };

        res.send(response);
    });
};
