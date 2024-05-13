/**
 * @author WMXPY
 * @namespace Trash
 * @description Definition
 */

import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapability } from "../capability/definition";

export type ImbricateVacantPage = {

    readonly collectionUniqueIdentifier: string;
    readonly pageIdentifier: string;
    readonly contentDigest: string;
    readonly content: string;
};

export type ImbricateVacantScript = {

    readonly scriptIdentifier: string;
    readonly scriptDigest: string;
    readonly script: string;
};

export type ImbricateTrashStashCapability =
    Record<IMBRICATE_TRASH_STASH_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_TRASH_STASH_CAPABILITY_KEY {

    TOSS_PAGE = "imbricate.trash-stash.page.toss",
    RETRIEVE_PAGE = "imbricate.trash-stash.page.retrieve",

    TOSS_SCRIPT = "imbricate.trash-stash.script.toss",
    RETRIEVE_SCRIPT = "imbricate.trash-stash.script.retrieve",
}

export const createAllAllowImbricateTrashStashCapability = (): ImbricateTrashStashCapability => {

    return {
        [IMBRICATE_TRASH_STASH_CAPABILITY_KEY.TOSS_PAGE]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_TRASH_STASH_CAPABILITY_KEY.RETRIEVE_PAGE]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_TRASH_STASH_CAPABILITY_KEY.TOSS_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
        [IMBRICATE_TRASH_STASH_CAPABILITY_KEY.RETRIEVE_SCRIPT]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
    };
};
