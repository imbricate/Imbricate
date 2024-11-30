/**
 * @author WMXPY
 * @namespace Text
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";

export interface IImbricateText {

    /**
     * Unique identifier of the text object
     */
    readonly uniqueIdentifier: string;

    /**
     * Author of the text object
     */
    readonly author?: ImbricateAuthor;

    /**
     * Get the content of the text object
     * 
     * @returns a promise of the content of the text object
     */
    getContent(): PromiseLike<string>;
}
