/**
 * @author WMXPY
 * @namespace Database
 * @description Put Schema
 */

import { IImbricateOrigin, ImbricateAuthor, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabasePutSchemaOutcome, S_Database_PutSchema_Unknown } from "@imbricate/core";
import express from "express";

export type ImbricateDatabasePutSchemaResponse = {

    readonly databaseUniqueIdentifier: string;
    readonly databaseVersion: string;
};

export const attachDatabasePutSchemaRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.put("/:origin/database/:database/schema", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;

        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Database_PutSchema_Unknown.description);
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

        const result: ImbricateDatabasePutSchemaOutcome = await database.database.putSchema(
            body.schema,
            {
                author,
            },
        );

        if (typeof result === "symbol") {

            console.error("Put Schema Failed", result);
            res.status(404).send(result.description);
            return;
        }

        const response: ImbricateDatabasePutSchemaResponse = {

            databaseUniqueIdentifier: database.database.uniqueIdentifier,
            databaseVersion: database.database.databaseVersion,
        };

        res.send(response);
    });
};
