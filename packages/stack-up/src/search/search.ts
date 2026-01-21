/**
 * @author WMXPY
 * @namespace Search
 * @description Search
 */

import { IImbricateOrigin, ImbricateOriginSearchOutcome, S_Origin_Search_Unknown } from "@imbricate/core";
import express from "express";

export type ImbricateSearchSearchResponse = {

    readonly result: ImbricateOriginSearchOutcome;
};

export const attachSearchSearchRoute = async (
    application: express.Express,
    originMap: Map<string, IImbricateOrigin>,
): Promise<void> => {

    application.post("/:origin/search", async (req, res) => {

        const originUniqueIdentifier: string = req.params.origin;

        const body: any = req.body;

        const origin: IImbricateOrigin | null =
            originMap.get(originUniqueIdentifier) ?? null;

        if (!origin) {

            console.log("Origin Not Found", originUniqueIdentifier);
            res.status(404).send(S_Origin_Search_Unknown.description);
            return;
        }

        const searchResult: ImbricateOriginSearchOutcome = await origin.search(body.keyword);

        if (typeof searchResult === "symbol") {

            console.error("Search Result Not Found", searchResult);
            res.status(404).send(searchResult.description);
            return;
        }

        const response: ImbricateSearchSearchResponse = {
            result: searchResult,
        };

        res.send(response);
    });
};
