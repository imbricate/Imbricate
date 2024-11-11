/**
 * @author WMXPY
 * @namespace Static
 * @description Interface
 */

export interface IImbricateStatic {

    /**
     * Unique identifier of the static object
     */
    readonly uniqueIdentifier: string;

    /**
     * Update the content of the static object
     * 
     * @param content new content of the text, encoded in base64
     */
    putContentInBase64(content: string): PromiseLike<void>;

    /**
     * Get the content of the static object
     * 
     * @returns a promise of the content of the text, encoded in base64
     */
    getContentInBase64(): PromiseLike<string>;
}
