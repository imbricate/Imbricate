/**
 * @namespace TextManager
 * @description Text Manager
 */

import { ImbricateTextAuditOptions } from "../text/definition";
import { IMBRICATE_TEXT_MANAGER_FEATURE } from "./feature";
import { ImbricateTextManagerCreateTextOutcome, ImbricateTextManagerGetTextOutcome } from "./outcome";

export interface IImbricateTextManager {

    /**
     * Supported features of the text manager
     */
    readonly supportedFeatures: IMBRICATE_TEXT_MANAGER_FEATURE[];

    /**
     * Get the text object from the origin
     * 
     * @param uniqueIdentifier unique identifier of the text
     * 
     * @returns a promise of the text object, null if not found
     *  Symbol: S_TextManager_GetText_NotFound - if the text is not found
     */
    getText(
        textUniqueIdentifier: string,
    ): PromiseLike<ImbricateTextManagerGetTextOutcome>;

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
