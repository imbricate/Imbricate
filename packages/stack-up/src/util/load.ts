/**
 * @author WMXPY
 * @namespace Util
 * @description Loader
 */

import { IImbricateOrigin, loadImbricateOriginFromPersistenceOrigin } from "@imbricate/core";
import { StackUpConfig } from "../definition";

export const loadOriginsFromConfig = async (
    config: StackUpConfig,
    port: number,
): Promise<Map<string, IImbricateOrigin>> => {

    const originMap: Map<string, IImbricateOrigin> = new Map();

    for (const origin of config.originPersistencies) {

        const originInstance: IImbricateOrigin | null = await loadImbricateOriginFromPersistenceOrigin(origin);

        if (originInstance) {

            console.log(`ORIGIN: ${origin.originName} - [${origin.originLoadType}] - ${origin.originLoadValue}`);
            console.log(`   URL: http://localhost:${port}/${originInstance.uniqueIdentifier}/`);
            console.log();

            originMap.set(originInstance.uniqueIdentifier, originInstance);
        }
    }

    return originMap;
};
