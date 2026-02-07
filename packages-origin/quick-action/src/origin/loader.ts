/**
 * @package Quick Action
 * @namespace Origin
 * @description Loader
 */

import { ImbricateOriginLoader, OriginPayload } from "@imbricate/core";
import { ImbricateQuickActionOrigin } from "./origin";

export const originLoader: ImbricateOriginLoader = (
    payload: OriginPayload,
) => {

    return ImbricateQuickActionOrigin.create(
        payload,
    );
};
