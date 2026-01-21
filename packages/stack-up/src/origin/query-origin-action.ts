/**
 * @author WMXPY
 * @namespace Origin
 * @description Query Origin Action
 */

import { IImbricateOrigin, IMBRICATE_ORIGIN_FEATURE, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginAction, S_Common_QueryOriginActions_Unknown, checkImbricateOriginFeatureSupported } from "@imbricate/core";
import express from "express";

export const attachOriginQueryOriginActionsRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/query-origin-actions", async (req, res) => {

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
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_GET_ORIGIN_ACTIONS,
        )) {

            console.error("Origin Not Supported", originUniqueIdentifier);
            res.status(404).send(S_Common_QueryOriginActions_Unknown.description);
            return;
        }

        const query: ImbricateCommonQueryOriginActionsQuery = body.query ?? {};
        const actions: ImbricateCommonQueryOriginActionsOutcome = await origin.queryOriginActions(query);

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
