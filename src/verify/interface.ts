/**
 * @author WMXPY
 * @namespace Verify
 * @description Interface
 */

import { IImbricateInterface } from "../schema/interface";

export const verifyInterface = (
    imbricateInterface: IImbricateInterface,
): boolean => {

    if (typeof imbricateInterface.identifier !== "string") {
        return false;
    }
    if (typeof imbricateInterface.version !== "string") {
        return false;
    }

    if (typeof imbricateInterface.protocol !== "string") {
        return false;
    }
    if (typeof imbricateInterface.matcher !== "string") {
        return false;
    }

    return true;
};
