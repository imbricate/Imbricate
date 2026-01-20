/**
 * @author WMXPY
 * @namespace OriginTest
 * @description Definition
 */

import { IImbricateOrigin } from "@imbricate/core";

export type ImbricateOriginTestConstructionFunction = () => Promise<IImbricateOrigin>;
export type ImbricateOriginTestResetFunction = () => Promise<void>;
