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
     * Content of the text
     */
    readonly content: string;

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
}
