/**
 * @namespace Loader
 * @description Origin Loader
 */

import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_ORIGIN_LOAD_TYPE, ImbricateOriginPersistence, ImbricateOriginPersistenceOrigin } from "./persistence";

/**
 * Load imbricate origin from persistence origin
 *  This function will load the origin from the persistence origin
 *  and initialize the origin with the payloads
 * 
 * @param origin origin to persistence to load
 * 
 * @returns a promise of the loaded origin
 *  if the origin is not found, return null
 */
export const loadImbricateOriginFromPersistenceOrigin = async (
    origin: ImbricateOriginPersistenceOrigin,
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
 * Load imbricate origins from persistence
 *  This function will load all origins from the persistence
 *  and initialize the origins with the payloads
 *  If the origin is not found, it will be ignored
 * 
 * @param persistence persistence to load origins
 *  
 * @returns a promise of the loaded origins, if the origin is not found, return empty array
 */
export const loadImbricateOriginsFromPersistence = async (
    persistence: ImbricateOriginPersistence,
): Promise<IImbricateOrigin[]> => {

    const origins: IImbricateOrigin[] = [];

    for (const origin of persistence.origins) {

        const originInstance: IImbricateOrigin | null = await loadImbricateOriginFromPersistenceOrigin(origin);

        if (originInstance) {
            origins.push(originInstance);
        }
    }

    return origins;
};
