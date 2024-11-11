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
     * Update the content of the text object
     * 
     * @param content new content of the text object
     */
    putContent(content: string): PromiseLike<void>;

    /**
     * Get the content of the text object
     * 
     * @returns a promise of the content of the text object
     */
    getContent(): PromiseLike<string>;
}
