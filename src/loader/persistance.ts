/**
 * @author WMXPY
 * @namespace Loader
 * @description Persistance
 */

import { OriginPayload } from "../origin/definition";

export enum IMBRICATE_ORIGIN_LOAD_TYPE {

    NPM_PACKAGE = "NPM_PACKAGE",
    FILE_SYSTEM = "FILE_SYSTEM",
}

export type ImbricateOriginPersistanceOrigin = {

    readonly uniqueIdentifier: string;

    readonly originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE;
    readonly originLoadValue: string;

    readonly originName: string;

    readonly originPayloads: OriginPayload;
};

export type ImbricateOriginPersistance = {

    readonly origins: ImbricateOriginPersistanceOrigin[];
};
