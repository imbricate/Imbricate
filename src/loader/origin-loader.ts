/**
 * @author WMXPY
 * @namespace Loader
 * @description Origin Loader
 */

import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_ORIGIN_LOAD_TYPE, ImbricateOriginPersistance, ImbricateOriginPersistanceOrigin } from "./persistance";

/**
 * Load imbricate origin from persistance origin
 *  This function will load the origin from the persistance origin
 *  and initialize the origin with the payloads
 * 
 * @param origin origin to persistance to load
 * 
 * @returns a promise of the loaded origin
 *  if the origin is not found, return null
 */
export const loadImbricateOriginFromPersistanceOrigin = async (
    origin: ImbricateOriginPersistanceOrigin,
): Promise<IImbricateOrigin | null> => {

    switch (origin.originLoadType) {

        case IMBRICATE_ORIGIN_LOAD_TYPE.NPM_PACKAGE: {

            const originPackage = await import(origin.originLoadValue);

            if (typeof originPackage.default === "function") {

                const initialized = originPackage.default.call(
                    null,
                    origin.originPayloads,
                );

                return initialized;
            }
            break;
        }

        case IMBRICATE_ORIGIN_LOAD_TYPE.FILE_SYSTEM: {

            const originPackage = await import(origin.originLoadValue);

            if (typeof originPackage.default === "function") {

                const initialized = originPackage.default.call(
                    null,
                    origin.originPayloads,
                );

                return initialized;
            }
            break;
        }
    }

    return null;
};

/**
 * Load imbricate origins from persistance
 *  This function will load all origins from the persistance
 *  and initialize the origins with the payloads
 *  If the origin is not found, it will be ignored
 * 
 * @param persistance persistance to load origins
 *  
 * @returns a promise of the loaded origins, if the origin is not found, return empty array
 */
export const loadImbricateOriginsFromPersistance = async (
    persistance: ImbricateOriginPersistance,
): Promise<IImbricateOrigin[]> => {

    const origins: IImbricateOrigin[] = [];

    for (const origin of persistance.origins) {

        const originInstance: IImbricateOrigin | null = await loadImbricateOriginFromPersistanceOrigin(origin);

        if (originInstance) {
            origins.push(originInstance);
        }
    }

    return origins;
};
