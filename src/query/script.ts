/**
 * @author WMXPY
 * @namespace Query
 * @description Script
 */

import { ImbricateQueryString, ImbricateQueryTime } from "./definition";

export type ImbricateScriptQuery = {

    readonly limit?: number;
    readonly skip?: number;

    readonly scriptName?: ImbricateQueryString;
    readonly attributes?: Record<string, ImbricateQueryString>;

    readonly createdAt?: ImbricateQueryTime;
    readonly updatedAt?: ImbricateQueryTime;
};
