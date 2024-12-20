/**
 * @author WMXPY
 * @namespace TextManager
 * @description Text Manager
 */

import { ImbricateTextAuditOptions } from "../text/definition";
import { ImbricateTextManagerCreateTextOutcome, ImbricateTextManagerGetTextOutcome } from "./outcome";

export interface IImbricateTextManager {

    /**
     * Get the text object from the origin
     * 
     * @returns a promise of the text object, null if not found
     *  Symbol: S_TextManager_GetText_NotFound - if the text is not found
     */
    getText(uniqueIdentifier: string): PromiseLike<ImbricateTextManagerGetTextOutcome>;

    /**
     * Create a new text object in the origin
     *  Text object is immutable, once created, it cannot be changed
     *  Patch a new text object if you want to change the content
     * 
     * @param content content of the text
     * @param auditOptions audit options of the text
     * 
     * @returns a promise of the text object
     *  Symbol: S_TextManager_CreateText_IdentifierDuplicated - if the identifier is duplicated
     */
    createText(
        content: string,
        auditOptions?: ImbricateTextAuditOptions,
    ): PromiseLike<ImbricateTextManagerCreateTextOutcome>;
}
