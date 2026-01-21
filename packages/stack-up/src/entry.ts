/**
 * @author WMXPY
 * @description Entry
 */

import { IImbricateOrigin } from "@imbricate/core";
import { json } from "body-parser";
import cors from "cors";
import express from "express";
import { attachDatabaseCreateRoute } from "./database/create";
import { attachDatabaseExecuteOriginActionRoute } from "./database/execute-origin-action";
import { attachDatabaseGetRoute } from "./database/get";
import { attachDatabasePutSchemaRoute } from "./database/put-schema";
import { attachDatabaseQueryRoute } from "./database/query";
import { attachDatabaseQueryOriginActionsRoute } from "./database/query-origin-action";
import { StackUpConfig } from "./definition";
import { attachDocumentCreateRoute } from "./document/create";
import { attachDocumentGetEditRecordsRoute } from "./document/edit-records";
import { attachDocumentExecuteOriginActionRoute } from "./document/execute-origin-action";
import { attachDocumentGetRoute } from "./document/get";
import { attachDocumentMergeRoute } from "./document/merge";
import { attachDocumentPutRoute } from "./document/put";
import { attachDocumentQueryRoute } from "./document/query";
import { attachDocumentQueryOriginActionsRoute } from "./document/query-origin-action";
import { attachDocumentRemoveRoute } from "./document/remove";
import { attachOriginExecuteOriginActionRoute } from "./origin/execute-origin-action";
import { attachOriginQueryOriginActionsRoute } from "./origin/query-origin-action";
import { attachSearchSearchRoute } from "./search/search";
import { attachStaticCreateBase64Route } from "./static/create-base64";
import { attachStaticGetRoute } from "./static/get";
import { attachStaticGetBase64Route } from "./static/get-base64";
import { attachTextCreateRoute } from "./text/create";
import { attachTextGetRoute } from "./text/get";
import { loadOriginsFromConfig } from "./util/load";
import { validateStackUpConfig } from "./util/validate";

export const createStackUpServer = async (
    config: StackUpConfig,
    port: number,
): Promise<express.Express> => {

    const validationResult: boolean = validateStackUpConfig(config);

    if (!validationResult) {

        console.error("Invalid Stack Up Configuration");
        throw new Error("Invalid Stack Up Configuration");
    }

    const authenticationSecret: string = config.authenticationSecret;
    const author = config.author;

    const originMap: Map<string, IImbricateOrigin> =
        await loadOriginsFromConfig(config, port);

    const corsAllowList = [
        "https://imbricate.app",
    ];

    if (Array.isArray(config.corsOriginList)) {
        corsAllowList.push(...config.corsOriginList);
    }

    console.log("Allowed Origin List for CORS:");

    for (const allowedCorsDomain of corsAllowList) {
        console.log(`- ${allowedCorsDomain}`);
    }

    const application = express();
    application.use(json({
        limit: "64mb",
    }));
    application.use(cors({
        origin: corsAllowList,
    }));

    application.use((req, res, next) => {

        console.log(req.method, req.url);

        if (req.query.authentication === authenticationSecret) {

            console.log("Authorized by Query");
            next();
            return;
        }

        if (req.headers.authorization !== `Bearer ${authenticationSecret}`) {

            console.log(`Unauthorized: ${req.headers.authorization}`);
            res.status(401).send("Unauthorized");
            return;
        }
        next();
    });

    attachDatabaseGetRoute(application, originMap);
    attachDatabaseCreateRoute(application, originMap, author);
    attachDatabasePutSchemaRoute(application, originMap, author);
    attachDatabaseQueryRoute(application, originMap);
    attachDatabaseQueryOriginActionsRoute(application, originMap);
    attachDatabaseExecuteOriginActionRoute(application, originMap);

    attachDocumentCreateRoute(application, originMap, author);
    attachDocumentGetEditRecordsRoute(application, originMap);
    attachDocumentGetRoute(application, originMap);
    attachDocumentPutRoute(application, originMap, author);
    attachDocumentMergeRoute(application, originMap, author);
    attachDocumentQueryRoute(application, originMap);
    attachDocumentRemoveRoute(application, originMap, author);
    attachDocumentQueryOriginActionsRoute(application, originMap);
    attachDocumentExecuteOriginActionRoute(application, originMap);

    attachOriginQueryOriginActionsRoute(application, originMap);
    attachOriginExecuteOriginActionRoute(application, originMap);

    attachSearchSearchRoute(application, originMap);

    attachStaticCreateBase64Route(application, originMap, author);
    attachStaticGetBase64Route(application, originMap);
    attachStaticGetRoute(application, originMap);

    attachTextCreateRoute(application, originMap, author);
    attachTextGetRoute(application, originMap);

    return application;
};
