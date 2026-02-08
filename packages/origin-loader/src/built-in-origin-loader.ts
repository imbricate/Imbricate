/**
 * @author WMXPY
 * @namespace OriginLoader
 * @description Built-in Origin Loader
 */

import { IImbricateOrigin, IMBRICATE_ORIGIN_BUILT_IN, IMBRICATE_ORIGIN_LOAD_TYPE, ImbricateOriginBuiltInList, ImbricateOriginPersistenceOrigin } from "@imbricate/core";
import fileSystemOriginLoader from "@imbricate/origin-file-system";
import quickActionOriginLoader from "@imbricate/origin-quick-action";

/**
 * Load imbricate origin from built-in origin
 *  This function will load the origin from the built-in origin
 *  and initialize the origin with the payloads
 * 
 * @param origin origin to persistence to load
 * 
 * @returns a promise of the loaded origin
 *  if the origin is not found, return null
 */
export const loadImbricateOriginFromBuiltInOrigin = async (
    origin: ImbricateOriginPersistenceOrigin,
): Promise<IImbricateOrigin | null> => {

    if (origin.originLoadType !== IMBRICATE_ORIGIN_LOAD_TYPE.BUILT_IN) {

        return null;
    }

    switch (origin.originLoadValue) {

        case IMBRICATE_ORIGIN_BUILT_IN.ORIGIN_FILE_SYSTEM: {

            return fileSystemOriginLoader(origin.originPayloads);
        }
        case IMBRICATE_ORIGIN_BUILT_IN.ORIGIN_QUICK_ACTION: {

            return quickActionOriginLoader(origin.originPayloads);
        }
        default: {

            console.log(
                `Origin load value ${origin.originLoadValue} is not found`,
            );
            console.log(
                `Available built-in origin load values: ${ImbricateOriginBuiltInList.join(", ")}`,
            );

            return null;
        }
    }

    return null;
};
