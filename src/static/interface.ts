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
     * Get the content of the static object
     * 
     * @returns a promise of the content of the text, encoded in base64
     */
    getContentInBase64(): PromiseLike<string>;
}
