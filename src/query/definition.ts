/**
 * @author WMXPY
 * @namespace Query
 * @description Definition
 */

export type ImbricateQueryTime = {

    readonly before?: Date;
    readonly after?: Date;
};

export type ImbricateQueryString = {

    readonly equal?: string;
    readonly include?: string;
    readonly exclude?: string;
};
