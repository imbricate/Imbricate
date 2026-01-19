/**
 * @author WMXPY
 * @namespace Origin
 * @description Loader
 */

import { ImbricateOriginLoader, OriginPayload } from "@imbricate/core";
import { ImbricateFileSystemOrigin } from "./origin";

export const originLoader: ImbricateOriginLoader = (
    payload: OriginPayload,
) => {

    return ImbricateFileSystemOrigin.create(
        payload,
    );
};
