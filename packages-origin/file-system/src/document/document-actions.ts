/**
 * @author WMXPY
 * @namespace Document_DocumentAction
 * @description Document Action
 */

import { ImbricateOriginAction } from "@imbricate/core";
import { IETF_LOCALE } from "@sudoo/locale";
import { GET_DOCUMENT_PATH_ORIGIN_ACTION_IDENTIFIER } from "./document-action/get-document-path";

export const getDocumentDocumentAction = (): ImbricateOriginAction[] => {

    return [
        {
            actionIdentifier: GET_DOCUMENT_PATH_ORIGIN_ACTION_IDENTIFIER,
            defaultLocale: IETF_LOCALE.ENGLISH_UNITED_STATES,
            actionName: {
                [IETF_LOCALE.CHINESE_SIMPLIFIED]: "获取文档路径",
                [IETF_LOCALE.ENGLISH_UNITED_STATES]: "Get Document Path",
            },
            actionDescription: {
                [IETF_LOCALE.CHINESE_SIMPLIFIED]: "获取文档路径",
                [IETF_LOCALE.ENGLISH_UNITED_STATES]: "Get Document Path",
            },
            parameters: [],
        },
    ];
};
