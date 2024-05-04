/**
 * @author WMXPY
 * @namespace Capability
 * @description Definition
 */

export enum IMBRICATE_CAPABILITY_EFFECT {

    ALLOW = "ALLOW",
    DENY = "DENY",
}

export type ImbricateCapability = {

    readonly effect: IMBRICATE_CAPABILITY_EFFECT;
}
