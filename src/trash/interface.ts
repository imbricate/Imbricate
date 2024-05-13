/**
 * @author WMXPY
 * @namespace Trash
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateVacantPage, ImbricateVacantScript } from "./definition";

export interface IImbricateTrashStash {

    tossPage(page: ImbricateVacantPage): PromiseOr<void>;
    retrievePage(collectionUniqueIdentifier: string, pageIdentifier: string): PromiseOr<ImbricateVacantPage | null>;

    tossScript(script: ImbricateVacantScript): PromiseOr<void>;
    retrieveScript(scriptIdentifier: string): PromiseOr<ImbricateVacantScript | null>;
}
