/**
 * @author WMXPY
 * @namespace Document
 * @description Put
 */

import { IImbricateOrigin, IImbricateProperty, IMBRICATE_DOCUMENT_FEATURE, IMBRICATE_PROPERTY_TYPE, ImbricateAuthor, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDocumentPutPropertyOutcome, S_Document_PutProperty_Unknown, checkImbricateDocumentFeatureSupported } from "@imbricate/core";
import express from "express";
import { DocumentPropertyInstance } from "../common/properties";

export type ImbricateDocumentMergeResponse = {

    readonly documentUniqueIdentifier: string;
    readonly documentVersion: string;
};

export const attachDocumentMergeRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.post("/:origin/database/:database/document/:document/merge", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;
        const documentUniqueIdentifier: string = req.params.document;

        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Document_PutProperty_Unknown.description);
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

        const editRecords: ImbricateDocumentPutPropertyOutcome =
            await document.document.mergeProperties(
                (generator) => {

                    const result: IImbricateProperty<IMBRICATE_PROPERTY_TYPE>[] = [];

                    Object.entries(body.properties).forEach(([key, value]) => {

                        const fixedValue = value as DocumentPropertyInstance;

                        result.push(generator(key, fixedValue.type, fixedValue.value, fixedValue.variant));
                    });

                    return result;
                },
                {
                    author,
                },
            );

        if (typeof editRecords === "symbol") {

            console.error("Edit Records Not Found", editRecords);
            res.status(404).send(editRecords.description);
            return;
        }

        if (checkImbricateDocumentFeatureSupported(
            document.document.supportedFeatures,
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        )) {

            await document.document.addEditRecords(editRecords.editRecords);
        } else {

            console.log("Edit Records Not Supported, skipping");
        }

        const response: ImbricateDocumentMergeResponse = {
            documentUniqueIdentifier: document.document.uniqueIdentifier,
            documentVersion: document.document.documentVersion,
        };

        res.send(response);
    });
};
