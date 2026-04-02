/**
 * @author WMXPY
 * @namespace Static
 * @description Create Base64
 */

import { IMBRICATE_STATIC_FEATURE, ImbricateAuthor, ImbricateStaticManagerCreateStaticOutcome, S_TextManager_CreateText_Unknown, checkImbricateStaticFeatureSupported } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export type ImbricateStaticCreateBase64Response = {

    readonly staticUniqueIdentifier: string;
    readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[];

    author?: ImbricateAuthor;
};

export const attachStaticCreateBase64Route = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.post("/:origin/create-static/base64", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;

        const body: any = req.body;

        const loadedOrigin: LoadedOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!loadedOrigin) {
            res.status(404).send(S_TextManager_CreateText_Unknown.description);
            return;
        }

        const staticInstance: ImbricateStaticManagerCreateStaticOutcome = await loadedOrigin
            .origin
            .getStaticManager()
            .createInBase64(
                body.content,
                body.mimeType,
                {
                    author,
                },
            );

        if (typeof staticInstance === "symbol") {

            console.error("Create Static Failed", staticInstance);
            res.status(404).send(staticInstance.description);
            return;
        }

        const response: ImbricateStaticCreateBase64Response = {
            staticUniqueIdentifier: staticInstance.static.uniqueIdentifier,
            supportedFeatures: staticInstance.static.supportedFeatures,
        };

        if (checkImbricateStaticFeatureSupported(
            staticInstance.static.supportedFeatures,
            IMBRICATE_STATIC_FEATURE.STATIC_GET_AUTHOR,
        )) {
            response.author = staticInstance.static.author;
        }

        res.send(response);
    });
};
