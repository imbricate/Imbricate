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
        if (origin.originLoadType === IMBRICATE_ORIGIN_LOAD_TYPE.NPM_PACKAGE) {

            const originPackage = await import(origin.originLoadValue);

            if (typeof originPackage.default === "function") {

                const initialized = originPackage.default.call(null, origin.originPayloads);

                origins.push(initialized);
            }
        }
    }

    return origins;
};
