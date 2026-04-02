/**
 * @author WMXPY
 * @namespace Document
 * @description Remove
 */

import { ImbricateAuthor, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseRemoveDocumentOutcome, S_Database_RemoveDocument_Unknown } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export type ImbricateDocumentRemoveResponse = {

    readonly succeed: boolean;
};

export const attachDocumentRemoveRoute = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.delete("/:origin/database/:database/document/:document", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;


        const loadedOrigin: LoadedOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!loadedOrigin) {
            res.status(404).send(S_Database_RemoveDocument_Unknown.description);
            return;
        }

        const database: ImbricateDatabaseManagerGetDatabaseOutcome = await loadedOrigin
            .origin.getDatabaseManager()
            .getDatabase(
                databaseUniqueIdentifier,
            );

        if (typeof database === "symbol") {

            console.error("Database Not Found", database);
            res.status(404).send(database.description);
            return;
        }

        try {

            const result: ImbricateDatabaseRemoveDocumentOutcome = await database.database.removeDocument(
                documentUniqueIdentifier,
                {
                    author,
                },
            );

            if (typeof result === "symbol") {
                console.error("Failed to remove document", result);
                res.status(500).send(result.description);
                return;
            }

            res.status(200).send({
                succeed: true,
            });
        } catch (error) {

            console.error("Failed to remove document", error);

            res.status(500).send(S_Database_RemoveDocument_Unknown.description);
        }
    });
};
