/**
 * @author WMXPY
 * @namespace Static
 * @description Get
 */

import { IImbricateOrigin, ImbricateStaticGetContentOutcome, ImbricateStaticManagerGetStaticOutcome, S_TextManager_GetText_Unknown } from "@imbricate/core";
import express from "express";

export const attachStaticGetRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.get("/:origin/static/:static", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;
        const staticUniqueIdentifier: string = req.params.static;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.error("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_TextManager_GetText_Unknown.description);
            return;
        }

        const staticInstance: ImbricateStaticManagerGetStaticOutcome =
            await origin.getStaticManager().getStatic(
                staticUniqueIdentifier,
            );

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

        const buffer: Buffer = Buffer.from(staticContent.content, "base64");

        res.header("Content-Type", staticInstance.static.mimeType);
        res.header("Content-Disposition", `attachment; filename="${staticInstance.static.uniqueIdentifier}"`);

        res.send(buffer);
    });
};
