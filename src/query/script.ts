/**
 * @author WMXPY
 * @namespace Query
 * @description Script
 */

import { ImbricateQueryString, ImbricateQueryTime } from "./definition";

export type ImbricateScriptQuery = {

    readonly scriptName?: ImbricateQueryString;
    readonly attributes?: Record<string, ImbricateQueryString>;

    readonly createdAt?: ImbricateQueryTime;
    readonly updatedAt?: ImbricateQueryTime;
};

export type ImbricateScriptQueryConfig = {

    readonly limit?: number;
    readonly skip?: number;
};
