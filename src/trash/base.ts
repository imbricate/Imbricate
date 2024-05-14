/**
 * @author WMXPY
 * @namespace Trash
 * @description Base
 */

import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_TRASH_STASH_CAPABILITY_KEY, ImbricateTrashStashCapability, ImbricateVacantPage, ImbricateVacantScript } from "./definition";
import type { IImbricateTrashStash } from "./interface";

export abstract class ImbricateTrashStashBase implements IImbricateTrashStash {

    public abstract readonly capabilities: ImbricateTrashStashCapability;

    public tossPage(
        _page: ImbricateVacantPage,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "TossPage",
            IMBRICATE_TRASH_STASH_CAPABILITY_KEY.TOSS_PAGE,
        );
    }

    public retrievePage(
        _collectionUniqueIdentifier: string,
        _pageIdentifier: string,
    ): PromiseOr<ImbricateVacantPage | null> {

        throw ImbricateNotImplemented.create(
            "RetrievePage",
            IMBRICATE_TRASH_STASH_CAPABILITY_KEY.RETRIEVE_PAGE,
        );
    }

    public tossScript(
        _script: ImbricateVacantScript,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "TossScript",
            IMBRICATE_TRASH_STASH_CAPABILITY_KEY.TOSS_SCRIPT,
        );
    }

    public retrieveScript(
        _scriptIdentifier: string,
    ): PromiseOr<ImbricateVacantScript | null> {

        throw ImbricateNotImplemented.create(
            "RetrieveScript",
            IMBRICATE_TRASH_STASH_CAPABILITY_KEY.RETRIEVE_SCRIPT,
        );
    }
}
