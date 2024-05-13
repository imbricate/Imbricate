/**
 * @author WMXPY
 * @namespace Trash
 * @description Definition
 */

export type ImbricateVacantPage = {

    readonly collectionUniqueIdentifier: string;
    readonly pageIdentifier: string;
    readonly contentDigest: string;
    readonly content: string;
};

export type ImbricateVacantScript = {

    readonly scriptIdentifier: string;
    readonly scriptDigest: string;
    readonly script: string;
};
