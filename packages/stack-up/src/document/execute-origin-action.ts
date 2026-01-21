/**
 * @author WMXPY
 * @namespace Document
 * @description Execute Origin Action
 */

import { IImbricateOrigin, IMBRICATE_DOCUMENT_FEATURE, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateOriginActionInput, ImbricateOriginActionOutcome, S_Common_QueryOriginActions_Unknown, checkImbricateDocumentFeatureSupported } from "@imbricate/core";
import express from "express";

export const attachDocumentExecuteOriginActionRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/database/:database/document/:document/execute-origin-action", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;

        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
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

        const document: ImbricateDatabaseGetDocumentOutcome = await database.database.getDocument(
            documentUniqueIdentifier,
        );

        if (typeof document === "symbol") {

            console.error("Document Not Found", document);
            res.status(404).send(document.description);
            return;
        }

        if (!checkImbricateDocumentFeatureSupported(
            document.document.supportedFeatures,
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_EXECUTE_ORIGIN_ACTION,
        )) {

            console.error("Document Action Not Supported", documentUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const input: ImbricateOriginActionInput = {

            actionIdentifier: body.actionIdentifier,
            parameters: body.parameters,
        };

        const result: ImbricateOriginActionOutcome = await document.document.executeOriginAction(input);

        if (typeof result === "symbol") {

            console.error("Document Action Failed", result);
            res.status(400).send(result.description);
            return;
        }

        const response = {

            response: result.response,
            outputs: result.outputs,
            references: result.references,
        };

        res.send(response);
    });
};
