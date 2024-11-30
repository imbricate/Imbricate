/**
 * @author WMXPY
 * @namespace Static
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";

export interface IImbricateStatic {

    /**
     * Unique identifier of the static object
     */
    readonly uniqueIdentifier: string;

    /**
     * Author of the text object
     */
    readonly author?: ImbricateAuthor;

    /**
     * Get the content of the static object
     * 
     * @returns a promise of the content of the text, encoded in base64
     */
    getContentInBase64(): PromiseLike<string>;
}
