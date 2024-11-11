/**
 * @author WMXPY
 * @namespace Text
 * @description Manager
 */

import { IImbricateText } from "./interface";

export interface IImbricateTextManager {

    /**
     * Get the text object from the origin
     * 
     * @returns a promise of the static file in Base64
     */
    getText(uniqueIdentifier: string): PromiseLike<IImbricateText>;

    /**
     * Create a new text object in the origin
     * 
     * @param content content of the text
     * @param uniqueIdentifier unique identifier of the text file, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the unique identifier of the static file
     */
    createText(
        content: string,
        uniqueIdentifier?: string,
    ): PromiseLike<IImbricateText>;
}
