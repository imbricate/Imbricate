/**
 * @author WMXPY
 * @namespace Origin
 * @description Loader
 */

import { ImbricateOriginLoader, OriginPayload } from "@imbricate/core";
import { ImbricateStackAPIOrigin } from "./origin";

export const originLoader: ImbricateOriginLoader = (
    payload: OriginPayload,
) => {

    return ImbricateStackAPIOrigin.create(
        payload,
    );
};
