/**
 * @author WMXPY
 * @namespace Query
 * @description Page
 */

import { ImbricateQueryString, ImbricateQueryTime } from "./definition";

export type ImbricatePageQuery = {

    readonly title?: ImbricateQueryString;
    readonly attributes?: Record<string, ImbricateQueryString>;

    readonly createdAt?: ImbricateQueryTime;
    readonly updatedAt?: ImbricateQueryTime;
};

export type ImbricatePageQueryConfig = {

    readonly limit?: number;
    readonly skip?: number;
};
