/**
 * @author WMXPY
 * @namespace Document
 * @description Remove
 */

import { IImbricateOrigin, ImbricateAuthor, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseRemoveDocumentOutcome, S_Database_RemoveDocument_Unknown } from "@imbricate/core";
import express from "express";

export type ImbricateDocumentRemoveResponse = {

    readonly succeed: boolean;
};

export const attachDocumentRemoveRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.delete("/:origin/database/:database/document/:document", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;


        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {
            res.status(404).send(S_Database_RemoveDocument_Unknown.description);
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
