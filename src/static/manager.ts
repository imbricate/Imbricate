/**
 * @author WMXPY
 * @namespace Static
 * @description Manager
 */

import { IImbricateStatic } from "./interface";

export interface IImbricateStaticManager {

    /**
     * Get the static object from the origin
     * 
     * @returns a promise of the static object, null if not found
     */
    getStatic(uniqueIdentifier: string): PromiseLike<IImbricateStatic | null>;

    /**
     * Create a new static object in the origin, encoded in base64
     *  Static object is immutable, once created, it cannot be changed
     *  Patch a new static object if you want to change the content
     * 
     * @param content content of the static object, encoded in base64
     * @param uniqueIdentifier unique identifier of the static object, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the created static object
     */
    createInBase64(
        content: string,
        uniqueIdentifier?: string,
    ): PromiseLike<IImbricateStatic>;
}
