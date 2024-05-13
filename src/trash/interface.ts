/**
 * @author WMXPY
 * @namespace Trash
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateVacantPage } from "./definition";

export interface IImbricateTrashStash {

    tossPage(page: ImbricateVacantPage): PromiseOr<void>;
    retrievePage(collectionUniqueIdentifier: string, pageIdentifier: string): PromiseOr<ImbricateVacantPage | null>;
}
