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

            console.log(originPackage);
        }
    }

    return origins;
};
