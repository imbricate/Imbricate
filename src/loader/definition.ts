/**
 * @author WMXPY
 * @namespace Loader
 * @description Definition
 */

import { OriginPayload } from "../origin/definition";
import { IImbricateOrigin } from "../origin/interface";

export type ImbricateOriginLoader = (payload: OriginPayload) => IImbricateOrigin;
