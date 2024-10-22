/**
 * @author WMXPY
 * @namespace Origin
 * @description Static Manager
 */

export interface IImbricateOriginStaticManager {

    /**
     * Get static file from the origin
     * 
     * @returns a promise of the static file in Base64
     */
    getStaticFileAsBase64(uniqueIdentifier: string): PromiseLike<string>;

    /**
     * Put static file to the origin
     * 
     * @param content content of the static file
     * @param uniqueIdentifier unique identifier of the static file, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the unique identifier of the static file
     */
    putStaticFileAsBase64(
        content: string,
        uniqueIdentifier?: string,
    ): PromiseLike<string>;
}
