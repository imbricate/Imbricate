/**
 * @author WMXPY
 * @namespace Script
 * @description Definition
 */

export type ImbricateScriptSnapshot = {

    readonly scriptName: string;
    readonly identifier: string;

    readonly description?: string;
};

export type ImbricateScriptMetadata = {

    readonly createdAt: Date;
    readonly updatedAt: Date;
} & ImbricateScriptSnapshot;
