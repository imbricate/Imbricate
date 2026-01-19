/**
 * @author WMXPY
 * @namespace Origin
 * @description Origin Actions
 */

import { IMBRICATE_ORIGIN_ACTION_APPEARANCE, ImbricateOriginAction } from "@imbricate/core";
import { IETF_LOCALE } from "@sudoo/locale";
import { GET_BASE_PATH_ORIGIN_ACTION_IDENTIFIER } from "./origin-action/get-base-path";

export const getOriginOriginAction = (): ImbricateOriginAction[] => {

    return [
        {
            actionIdentifier: GET_BASE_PATH_ORIGIN_ACTION_IDENTIFIER,
            defaultLocale: IETF_LOCALE.ENGLISH_UNITED_STATES,
            actionName: {
                [IETF_LOCALE.CHINESE_SIMPLIFIED]: "获取基础路径",
                [IETF_LOCALE.ENGLISH_UNITED_STATES]: "Get Base Path",
            },
            actionDescription: {
                [IETF_LOCALE.CHINESE_SIMPLIFIED]: "获取基础路径",
                [IETF_LOCALE.ENGLISH_UNITED_STATES]: "Get Base Path",
            },
            parameters: [],
            appearance: IMBRICATE_ORIGIN_ACTION_APPEARANCE.WARNING,
        },
    ];
};
