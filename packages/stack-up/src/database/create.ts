/**
 * @author WMXPY
 * @namespace Database
 * @description Create
 */

import { IMBRICATE_DATABASE_FEATURE, ImbricateAuthor, ImbricateDatabaseManagerCreateDatabaseOutcome, S_DatabaseManager_CreateDatabase_Unknown } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export type ImbricateDatabaseCreateResponse = {

    readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

    readonly databaseUniqueIdentifier: string;
    readonly databaseVersion: string;
};

export const attachDatabaseCreateRoute = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.post("/:origin/create-database", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const body: any = req.body;

        const loadedOrigin: LoadedOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!loadedOrigin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_DatabaseManager_CreateDatabase_Unknown.description);
            return;
        }

        try {

            const database: ImbricateDatabaseManagerCreateDatabaseOutcome = await loadedOrigin
                .origin.getDatabaseManager()
                .createDatabase(
                    body.databaseName,
                    body.schema,
                    {
                        author,
                    },
                );

            if (typeof database === "symbol") {

                console.error("Create Database Failed", database);
                res.status(404).send(database.description);
                return;
            }

            const response: ImbricateDatabaseCreateResponse = {

                supportedFeatures: database.database.supportedFeatures,
                databaseUniqueIdentifier: database.database.uniqueIdentifier,
                databaseVersion: database.database.databaseVersion,
            };

            res.send(response);
        } catch (error) {

            console.error(error);

            res.status(500).send(S_DatabaseManager_CreateDatabase_Unknown.description);
        }
    });
};
