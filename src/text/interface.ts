/**
 * @author WMXPY
 * @namespace Text
 * @description Interface
 */

export interface IImbricateText {

    /**
     * Unique identifier of the text object
     */
    readonly uniqueIdentifier: string;

    /**
     * Get the content of the text object
     * 
     * @returns a promise of the content of the text object
     */
    getContent(): PromiseLike<string>;
}
