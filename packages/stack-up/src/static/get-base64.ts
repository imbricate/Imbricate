/**
 * @author WMXPY
 * @namespace Static
 * @description Get Base64
 */

import { IMBRICATE_STATIC_FEATURE, ImbricateAuthor, ImbricateStaticGetContentOutcome, ImbricateStaticManagerGetStaticOutcome, S_TextManager_GetText_Unknown, checkImbricateStaticFeatureSupported } from "@imbricate/core";
import express from "express";
import { LoadedOrigin } from "../util/load";

export type ImbricateStaticGetBase64Response = {

    readonly staticUniqueIdentifier: string;
    readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[];

    author?: ImbricateAuthor;
    content?: string;
    mimeType?: string;
};

export const attachStaticGetBase64Route = async (
    application: express.Express,
    originMap: Map<string, LoadedOrigin>,
): Promise<void> => {

    application.get("/:origin/static/:static/base64", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const staticUniqueIdentifier: string = req.params.static;

        const loadedOrigin: LoadedOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!loadedOrigin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_TextManager_GetText_Unknown.description);
            return;
        }

        const staticInstance: ImbricateStaticManagerGetStaticOutcome =
            await loadedOrigin
                .origin
                .getStaticManager()
                .getStatic(staticUniqueIdentifier);

        if (typeof staticInstance === "symbol") {

            console.error("Static Not Found", staticInstance);
            res.status(404).send(staticInstance.description);
            return;
        }

        const staticContent: ImbricateStaticGetContentOutcome<string> = await staticInstance.static.getContentInBase64();

        if (typeof staticContent === "symbol") {

            console.error("Static Content Not Found", staticContent);
            res.status(404).send(staticContent.description);
            return;
        }

        const response: ImbricateStaticGetBase64Response = {
            staticUniqueIdentifier: staticInstance.static.uniqueIdentifier,
            supportedFeatures: staticInstance.static.supportedFeatures,
        };

        if (checkImbricateStaticFeatureSupported(
            staticInstance.static.supportedFeatures,
            IMBRICATE_STATIC_FEATURE.STATIC_GET_AUTHOR,
        )) {
            response.author = staticInstance.static.author;
        }

        if (checkImbricateStaticFeatureSupported(
            staticInstance.static.supportedFeatures,
            IMBRICATE_STATIC_FEATURE.STATIC_GET_CONTENT,
        )) {
            response.content = staticContent.content;
            response.mimeType = staticInstance.static.mimeType;
        }

        res.send(response);
    });
};

