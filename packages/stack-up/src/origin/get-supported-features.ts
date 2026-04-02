/**
 * @author WMXPY
 * @namespace Origin
 * @description Get Supported Features
 */

import { S_Common_QueryOriginActions_Unknown } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export const attachOriginGetSupportedFeaturesRoute = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
): Promise<void> => {

    application.post("/:origin/get-supported-features", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;

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

        res.send({
            features: supportedFeatures.features,
        });
    });
};
