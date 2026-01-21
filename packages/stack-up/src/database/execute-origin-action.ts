/**
 * @author WMXPY
 * @namespace Database
 * @description Execute Origin Action
 */

import { IImbricateOrigin, IMBRICATE_DATABASE_FEATURE, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateOriginActionInput, ImbricateOriginActionOutcome, S_Common_QueryOriginActions_Unknown, checkImbricateDatabaseFeatureSupported } from "@imbricate/core";
import express from "express";

export const attachDatabaseExecuteOriginActionRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/database/:database/execute-origin-action", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const databaseUniqueIdentifier: string = req.params.database;

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

        if (!checkImbricateDatabaseFeatureSupported(
            database.database.supportedFeatures,
            IMBRICATE_DATABASE_FEATURE.DATABASE_EXECUTE_ORIGIN_ACTION,
        )) {

            console.error("Database Action Not Supported", databaseUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const input: ImbricateOriginActionInput = {

            actionIdentifier: body.actionIdentifier,
            parameters: body.parameters,
        };

        const result: ImbricateOriginActionOutcome = await database.database.executeOriginAction(input);

        if (typeof result === "symbol") {

            console.error("Database Action Failed", result);
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
