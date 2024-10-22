/**
 * @author WMXPY
 * @namespace Origin
 * @description Loader
 */

import { OriginPayload } from "./definition";
import { IImbricateOrigin } from "./interface";

export type ImbricateOriginLoader = (payload: OriginPayload) => IImbricateOrigin;
