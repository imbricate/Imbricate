/**
 * @author WMXPY
 * @namespace Document_DocumentAction
 * @description Get Document Path
 */

import { ImbricateOriginActionResultOutput } from "@imbricate/core";
import * as Path from "path";
import { joinDocumentFileRoute } from "../../util/path-joiner";

export const GET_DOCUMENT_PATH_ORIGIN_ACTION_IDENTIFIER = "get-document-path";

export const documentExecuteGetDocumentPathOriginAction = (
    basePath: string,
    databaseUniqueIdentifier: string,
    documentUniqueIdentifier: string,
    _parameters: Record<string, any>,
): ImbricateOriginActionResultOutput => {

    const pathRoute: string[] = joinDocumentFileRoute(
        databaseUniqueIdentifier,
        documentUniqueIdentifier,
    );

    const path: string = Path.join(basePath, ...pathRoute);

    return {
        content: path,
    };
};
