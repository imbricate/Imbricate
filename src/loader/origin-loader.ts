/**
 * @author WMXPY
 * @namespace Loader
 * @description Origin Loader
 */

import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_ORIGIN_LOAD_TYPE, ImbricateOriginPersistance, ImbricateOriginPersistanceOrigin } from "./persistance";

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
