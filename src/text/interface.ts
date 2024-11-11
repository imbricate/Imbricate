/**
 * @author WMXPY
 * @namespace Text
 * @description Interface
 */

export interface IImbricateText {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    /**
     * Update the content of the text
     * 
     * @param content new content of the text
     */
    putContent(content: string): PromiseLike<void>;

    /**
     * Append content to the text
     * 
     * @param content content to append
     */
    appendContent(content: string): PromiseLike<void>;

    /**
     * Get the content of the text
     * 
     * @returns a promise of the content of the text
     */
    getContent(): PromiseLike<string>;
}
