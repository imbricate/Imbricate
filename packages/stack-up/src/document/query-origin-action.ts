/**
 * @author WMXPY
 * @namespace Document
 * @description Query Origin Action
 */

import { IImbricateOrigin, IMBRICATE_DOCUMENT_FEATURE, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateOriginAction, S_Common_QueryOriginActions_Unknown, checkImbricateDocumentFeatureSupported } from "@imbricate/core";
import express from "express";

export const attachDocumentQueryOriginActionsRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/database/:database/document/:document/query-origin-actions", async (req, res) => {

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
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_ORIGIN_ACTIONS,
        )) {

            console.error("Document Not Supported", documentUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const query: ImbricateCommonQueryOriginActionsQuery = body.query ?? {};
        const actions: ImbricateCommonQueryOriginActionsOutcome = await document.document.queryOriginActions(query);

        if (typeof actions === "symbol") {

            console.error("Actions Not Found", actions);
            res.status(404).send(actions.description);
            return;
        }

        const response = {

            actions: actions.actions.map((
                action: ImbricateOriginAction,
            ) => {

                return {

                    actionIdentifier: action.actionIdentifier,
                    defaultLocale: action.defaultLocale,
                    actionName: action.actionName,
                    actionDescription: action.actionDescription,
                    parameters: action.parameters,
                    appearance: action.appearance,
                    disabled: action.disabled,
                };
            }),
            count: actions.count,
        };

        res.send(response);
    });
};
