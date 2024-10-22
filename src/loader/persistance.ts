/**
 * @author WMXPY
 * @namespace Loader
 * @description Persistance
 */

export enum IMBRICATE_ORIGIN_LOAD_TYPE {

    NPM_PACKAGE = "NPM_PACKAGE",
}

export type ImbricateOriginPersistanceOrigin = {

    readonly originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE;
    readonly originLoadValue: string;

    readonly originName: string;

    readonly originPayloads: Record<string, any>;
};

export type ImbricateOriginPersistance = {

    readonly origins: ImbricateOriginPersistanceOrigin[];
};
