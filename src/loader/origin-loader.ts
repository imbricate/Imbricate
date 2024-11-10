/**
 * @author WMXPY
 * @namespace Loader
 * @description Origin Loader
 */

import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_ORIGIN_LOAD_TYPE, ImbricateOriginPersistance } from "./persistance";

export const loadImbricateOriginsFromPersistance = async (
    persistance: ImbricateOriginPersistance,
): Promise<IImbricateOrigin[]> => {

    const origins: IImbricateOrigin[] = [];

    for (const origin of persistance.origins) {

        switch (origin.originLoadType) {

            case IMBRICATE_ORIGIN_LOAD_TYPE.NPM_PACKAGE: {

                const originPackage = await import(origin.originLoadValue);

                if (typeof originPackage.default === "function") {

                    const initialized = originPackage.default.call(
                        null,
                        origin.originPayloads,
                    );

                    origins.push(initialized);
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

                    origins.push(initialized);
                }
                break;
            }
        }
    }

    return origins;
};
