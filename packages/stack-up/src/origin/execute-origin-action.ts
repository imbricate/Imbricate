/**
 * @author WMXPY
 * @namespace Origin
 * @description Execute Origin Action
 */

import { IMBRICATE_ORIGIN_FEATURE, ImbricateOriginActionInput, ImbricateOriginActionOutcome, S_Common_QueryOriginActions_Unknown, checkImbricateOriginFeatureSupported } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export const attachOriginExecuteOriginActionRoute = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
): Promise<void> => {

    application.post("/:origin/execute-origin-action", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const body: any = req.body;

        const loadedOrigin: LoadedOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!loadedOrigin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const supportedFeatures = await loadedOrigin
            .origin
            .getSupportedFeatures();

        if (typeof supportedFeatures === "symbol") {

            console.error("Origin Not Supported", originUniqueIdentifier);
            res.status(404).send(supportedFeatures.description);
            return;
        }

        if (!checkImbricateOriginFeatureSupported(
            supportedFeatures.features,
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_EXECUTE_ORIGIN_ACTION,
        )) {

            console.error("Origin Action Not Supported", originUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const input: ImbricateOriginActionInput = {

            actionIdentifier: body.actionIdentifier,
            parameters: body.parameters,
        };

        const result: ImbricateOriginActionOutcome = await loadedOrigin
            .origin
            .executeOriginAction(input);

        if (typeof result === "symbol") {

            console.error("Origin Action Failed", result);
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
