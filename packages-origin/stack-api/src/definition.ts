/**
 * @author WMXPY
 * @namespace StackAPI
 * @description Definition
 */

export type ImbricateStackAPIAuthentication = {

    readonly type: "Bearer" | "Basic";
    readonly value: string;
};
