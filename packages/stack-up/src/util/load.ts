/**
 * @author WMXPY
 * @namespace Util
 * @description Loader
 */

import { IImbricateOrigin } from "@imbricate/core";
import { loadImbricateOriginFromPersistenceOrigin } from "@imbricate/origin-loader";
import { StackUpConfig, StackUpOriginPersistenceOrigin } from "../definition";

export type LoadedOrigin = {

    readonly origin: IImbricateOrigin;
    readonly persistenceOrigin: StackUpOriginPersistenceOrigin;
};

export const loadOriginsFromConfig = async (
    config: StackUpConfig,
    port: number,
): Promise<Map<string, LoadedOrigin>> => {

    const originMap: Map<string, LoadedOrigin> = new Map();

    for (const persistenceOrigin of config.originPersistencies) {

        const originInstance: IImbricateOrigin | null =
            await loadImbricateOriginFromPersistenceOrigin(persistenceOrigin);

        if (originInstance) {

            const originIdentifier: string = typeof persistenceOrigin.originIdentifierOverride === "string"
                ? persistenceOrigin.originIdentifierOverride
                : originInstance.uniqueIdentifier;

            console.log(`ORIGIN: ${persistenceOrigin.originName} - [${persistenceOrigin.originLoadType}] - ${persistenceOrigin.originLoadValue}`);
            console.log(`   URL: http://localhost:${port}/${originIdentifier}/`);
            console.log();

            originMap.set(originIdentifier, {
                origin: originInstance,
                persistenceOrigin,
            });
        }
    }

    return originMap;
};
