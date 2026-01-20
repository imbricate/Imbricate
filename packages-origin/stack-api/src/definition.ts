/**
 * @author WMXPY
 * @namespace Root
 * @description Definition
 */

export type ImbricateStackAPIAuthentication = {

    readonly type: "Bearer" | "Basic";
    readonly value: string;
};
