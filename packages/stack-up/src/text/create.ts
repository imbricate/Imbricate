/**
 * @author WMXPY
 * @namespace Text
 * @description Create
 */

import { IImbricateOrigin, IMBRICATE_TEXT_FEATURE, ImbricateAuthor, ImbricateTextManagerCreateTextOutcome, S_TextManager_CreateText_Unknown, checkImbricateTextFeatureSupported } from "@imbricate/core";
import express from "express";

export type ImbricateTextCreateResponse = {

    readonly textUniqueIdentifier: string;
    readonly supportedFeatures: IMBRICATE_TEXT_FEATURE[];

    author?: ImbricateAuthor;
};

export const attachTextCreateRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
    author: ImbricateAuthor,
): Promise<void> => {

    application.post("/:origin/create-text", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;

        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {
            res.status(404).send(S_TextManager_CreateText_Unknown.description);
            return;
        }

        const text: ImbricateTextManagerCreateTextOutcome = await origin.getTextManager().createText(
            body.content,
            {
                author,
            },
        );

        if (typeof text === "symbol") {

            console.error("Create Text Failed", text);
            res.status(404).send(text.description);
            return;
        }

        const response: ImbricateTextCreateResponse = {
            textUniqueIdentifier: text.text.uniqueIdentifier,
            supportedFeatures: text.text.supportedFeatures,
        };

        if (checkImbricateTextFeatureSupported(
            text.text.supportedFeatures,
            IMBRICATE_TEXT_FEATURE.TEXT_GET_AUTHOR,
        )) {
            response.author = text.text.author;
        }

        res.send(response);
    });
};
