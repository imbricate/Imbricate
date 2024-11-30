/**
 * @author WMXPY
 * @namespace Text
 * @description Manager
 */

import { ImbricateTextAuditOptions } from "./definition";
import { IImbricateText } from "./interface";

export interface IImbricateTextManager {

    /**
     * Get the text object from the origin
     * 
     * @returns a promise of the text object, null if not found
     */
    getText(uniqueIdentifier: string): PromiseLike<IImbricateText | null>;

    /**
     * Create a new text object in the origin
     *  Text object is immutable, once created, it cannot be changed
     *  Patch a new text object if you want to change the content
     * 
     * @param content content of the text
     * @param auditOptions audit options of the text
     * 
     * @returns a promise of the text object
     */
    createText(
        content: string,
        auditOptions?: ImbricateTextAuditOptions,
    ): PromiseLike<IImbricateText>;
}
