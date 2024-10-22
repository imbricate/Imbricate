/**
 * @author WMXPY
 * @namespace Capability
 * @description Validate
 */

import { IMBRICATE_COLLECTION_CAPABILITY_KEY } from "../collection/definition";
import type { IImbricateCollection } from "../collection/interface";
import { IMBRICATE_ORIGIN_CAPABILITY_KEY } from "../origin/definition";
import { IImbricateOrigin } from "../origin/interface";
import { IMBRICATE_PAGE_CAPABILITY_KEY } from "../page/definition";
import { IImbricatePage } from "../page/interface";
import { IMBRICATE_SCRIPT_CAPABILITY_KEY } from "../script/definition";
import { IImbricateScript } from "../script/interface";
import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapability } from "./definition";

export const validateImbricateCapability = <
    CapabilityRecords extends Record<string, ImbricateCapability>,
    KeySet extends keyof CapabilityRecords,
>(
    capabilities: CapabilityRecords,
    capability: KeySet,
): boolean => {

    if (!capabilities) {
        return false;
    }

    const capabilityValue: ImbricateCapability = capabilities[capability];

    if (!capabilityValue) {
        return false;
    }

    return capabilityValue.effect === IMBRICATE_CAPABILITY_EFFECT.ALLOW;
};

export const validateImbricateOriginCapability = (
    origin: IImbricateOrigin,
    capability: IMBRICATE_ORIGIN_CAPABILITY_KEY,
): boolean => {

    return validateImbricateCapability(origin.capabilities, capability);
};

export const validateImbricateCollectionCapability = (
    collection: IImbricateCollection,
    capability: IMBRICATE_COLLECTION_CAPABILITY_KEY,
): boolean => {

    return validateImbricateCapability(collection.capabilities, capability);
};

export const validateImbricatePageCapability = (
    page: IImbricatePage,
    capability: IMBRICATE_PAGE_CAPABILITY_KEY,
): boolean => {

    return validateImbricateCapability(page.capabilities, capability);
};

export const validateImbricateScriptCapability = (
    script: IImbricateScript,
    capability: IMBRICATE_SCRIPT_CAPABILITY_KEY,
): boolean => {

    return validateImbricateCapability(script.capabilities, capability);
};
