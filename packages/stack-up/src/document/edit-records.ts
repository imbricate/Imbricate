/**
 * @author WMXPY
 * @namespace Document
 * @description Edit Records
 */

import { DocumentEditRecord, IImbricateOrigin, IMBRICATE_DOCUMENT_FEATURE, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDocumentGetEditRecordsOutcome, S_Document_GetEditRecords_Unknown, checkImbricateDocumentFeatureSupported } from "@imbricate/core";
import express from "express";

export type ImbricateDocumentGetEditRecordsResponse = {

    readonly documentUniqueIdentifier: string;
    readonly documentVersion: string;

    editRecords?: DocumentEditRecord[];
};

export const attachDocumentGetEditRecordsRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.get("/:origin/database/:database/document/:document/edit-records", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Document_GetEditRecords_Unknown.description);
            return;
        }

        const database: ImbricateDatabaseManagerGetDatabaseOutcome =
            await origin.getDatabaseManager().getDatabase(
                databaseUniqueIdentifier,
            );

        if (typeof database === "symbol") {

            console.error("Database Not Found", database);
            res.status(404).send(database.description);
            return;
        }

        const document: ImbricateDatabaseGetDocumentOutcome =
            await database.database.getDocument(
                documentUniqueIdentifier,
            );

        if (typeof document === "symbol") {

            console.error("Document Not Found", document);
            res.status(404).send(document.description);
            return;
        }

        if (!checkImbricateDocumentFeatureSupported(
            document.document.supportedFeatures,
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
        )) {

            console.error("Document Not Support Edit Records", document.document.supportedFeatures);
            res.status(501).send(S_Document_GetEditRecords_Unknown.description);
            return;
        }

        const editRecords: ImbricateDocumentGetEditRecordsOutcome = await document.document.getEditRecords();

        if (typeof editRecords === "symbol") {

            console.error("Edit Records Not Found", editRecords);
            res.status(404).send(editRecords.description);
            return;
        }

        const response: ImbricateDocumentGetEditRecordsResponse = {
            documentUniqueIdentifier: document.document.uniqueIdentifier,
            documentVersion: document.document.documentVersion,
        };

        if (checkImbricateDocumentFeatureSupported(
            document.document.supportedFeatures,
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
        )) {

            response.editRecords = editRecords.editRecords;
        }

        res.send(response);
    });
};
