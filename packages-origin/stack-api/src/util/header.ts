/**
 * @author WMXPY
 * @namespace Util
 * @description Header
 */

import { ImbricateStackAPIAuthentication } from "../definition";

export const buildHeader = (
    authentication: ImbricateStackAPIAuthentication,
): Record<string, string> => {

    switch (authentication.type) {

        case "Bearer": return {
            Authorization: `Bearer ${authentication.value}`,
        };
        case "Basic": return {
            Authorization: `Basic ${authentication.value}`,
        };
    }

    return {};
};
