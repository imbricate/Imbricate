/**
 * @namespace StaticManager
 * @description Static Manager
 */

import { IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticAuditOptions } from "../static/definition";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "./feature";
import { ImbricateStaticManagerCreateStaticOutcome, ImbricateStaticManagerGetStaticOutcome, ImbricateStaticManagerGetStaticUriOutcome } from "./outcome";

export interface IImbricateStaticManager {

    /**
     * Supported features of the static manager
     */
    readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[];

    /**
     * Get the static object from the origin
     * 
     * @param staticUniqueIdentifier unique identifier of the static object
     * 
     * @returns a promise of the static object, null if not found
     *  Symbol: S_StaticManager_GetStatic_NotFound - if the static object is not found
     */
    getStatic(
        staticUniqueIdentifier: string,
    ): PromiseLike<ImbricateStaticManagerGetStaticOutcome>;

    /**
     * Create a new static object in the origin, encoded in base64
     *  Static object is immutable, once created, it cannot be changed
     *  Patch a new static object if you want to change the content
     * 
     * @param content content of the static object, encoded in base64
     * @param mimeType mime type of the static object
     * @param auditOptions audit options of the static object
     * 
     * @returns a promise of the created static object
     *  Symbol: S_StaticManager_CreateStatic_IdentifierDuplicated - if the identifier is duplicated 
     */
    createInBase64(
        content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        auditOptions?: ImbricateStaticAuditOptions,
    ): PromiseLike<ImbricateStaticManagerCreateStaticOutcome>;

    /**
     * Get the Uri of the static object
     * 
     * @param staticUniqueIdentifier unique identifier of the static object
     * 
     * @returns a promise of the Uri of the static object
     *  Symbol: S_StaticManager_GetStaticUri_NotFound - if the static object is not found
     */
    getStaticUri(
        staticUniqueIdentifier: string,
    ): PromiseLike<ImbricateStaticManagerGetStaticUriOutcome>;
}
