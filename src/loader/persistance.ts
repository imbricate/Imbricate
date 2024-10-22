/**
 * @author WMXPY
 * @namespace Loader
 * @description Persistance
 */

import { OriginPayload } from "../origin/definition";

export enum IMBRICATE_ORIGIN_LOAD_TYPE {

    NPM_PACKAGE = "NPM_PACKAGE",
}

export type ImbricateOriginPersistanceOrigin = {

    readonly originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE;
    readonly originLoadValue: string;

    readonly originName: string;

    readonly originPayloads: OriginPayload;
};

export type ImbricateOriginPersistance = {

    readonly origins: ImbricateOriginPersistanceOrigin[];
};
