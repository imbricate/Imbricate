/**
 * @author WMXPY
 * @namespace Capability
 * @description Definition
 */

export type ImbricateCapabilityKey = string;

export enum IMBRICATE_CAPABILITY_EFFECT {

    ALLOW = "ALLOW",
    DENY = "DENY",
}

export type ImbricateCapability = {

    readonly effect: IMBRICATE_CAPABILITY_EFFECT;
}

export type ImbricateCapabilityRecord<T extends ImbricateCapabilityKey> =
    Record<T, ImbricateCapability>;

export const createAllowImbricateCapability = (): ImbricateCapability => {

    return {
        effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
    };
};

export const createDenyImbricateCapability = (): ImbricateCapability => {

    return {
        effect: IMBRICATE_CAPABILITY_EFFECT.DENY,
    };
};
