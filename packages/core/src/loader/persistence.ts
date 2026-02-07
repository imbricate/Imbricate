/**
 * @namespace Loader
 * @description Persistence
 */

import { OriginPayload } from "../origin/definition";

/**
 * Imbricate Origin Load Type
 * 
 * BUILT_IN - load origin from built-in, as origin name
 * NPM_PACKAGE - load origin from npm package, as package name
 * FILE_SYSTEM - load origin from file system, as file path
 */
export enum IMBRICATE_ORIGIN_LOAD_TYPE {

    BUILT_IN = "BUILT_IN",
    NPM_PACKAGE = "NPM_PACKAGE",
    FILE_SYSTEM = "FILE_SYSTEM",
}

export enum IMBRICATE_ORIGIN_BUILT_IN {

    ORIGIN_FILE_SYSTEM = "origin-file-system",
    ORIGIN_QUICK_ACTION = "origin-quick-action",
}

export type ImbricateOriginPersistenceOrigin = {

    readonly originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE;
    readonly originLoadValue: string;

    readonly originName: string;

    readonly originPayloads: OriginPayload;
};

export type ImbricateOriginPersistence = {

    readonly origins: ImbricateOriginPersistenceOrigin[];
};
