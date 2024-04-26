/**
 * @author WMXPY
 * @namespace Origin
 * @description Definition
 */

export enum IMBRICATE_DIGEST_ALGORITHM {

    MD5 = "MD5",

    SHA1 = "SHA1",
    SHA256 = "SHA256",
}

export type ImbricateOriginMetadata = {

    readonly type: string;
    readonly digestAlgorithm: IMBRICATE_DIGEST_ALGORITHM;
};
