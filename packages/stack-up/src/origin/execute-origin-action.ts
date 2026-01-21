/**
 * @author WMXPY
 * @namespace Origin
 * @description Execute Origin Action
 */

import { IImbricateOrigin, IMBRICATE_ORIGIN_FEATURE, ImbricateOriginActionInput, ImbricateOriginActionOutcome, S_Common_QueryOriginActions_Unknown, checkImbricateOriginFeatureSupported } from "@imbricate/core";
import express from "express";

export const attachOriginExecuteOriginActionRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/execute-origin-action", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        if (!checkImbricateOriginFeatureSupported(
            origin.supportedFeatures,
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

        const result: ImbricateOriginActionOutcome = await origin.executeOriginAction(input);

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
