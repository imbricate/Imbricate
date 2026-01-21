/**
 * @author WMXPY
 * @namespace Document
 * @description Get
 */

import { DocumentAnnotations, IImbricateOrigin, IMBRICATE_DOCUMENT_FEATURE, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, S_Database_GetDocument_Unknown } from "@imbricate/core";
import express from "express";
import { DocumentPropertyInstanceRecord, recordToInstanceRecord } from "../common/properties";

export type ImbricateDocumentGetResponse = {

    readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[];

    readonly documentUniqueIdentifier: string;
    readonly documentVersion: string;
    readonly properties: DocumentPropertyInstanceRecord;
    readonly annotations: DocumentAnnotations;
};

export const attachDocumentGetRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.get("/:origin/database/:database/document/:document", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Database_GetDocument_Unknown.description);
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

        const properties = document.document.getProperties();

        if (typeof properties === "symbol") {

            console.error("Failed to get properties", properties);
            res.status(500).send(properties.description);
            return;
        }

        const response: ImbricateDocumentGetResponse = {
            supportedFeatures: document.document.supportedFeatures,
            documentUniqueIdentifier: document.document.uniqueIdentifier,
            documentVersion: document.document.documentVersion,
            properties: recordToInstanceRecord(properties.properties),
            annotations: document.document.annotations,
        };

        res.send(response);
    });
};
