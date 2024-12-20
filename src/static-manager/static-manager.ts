/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Static Manager
 */

import { ImbricateStaticAuditOptions } from "../static/definition";
import { ImbricateStaticManagerCreateStaticOutcome, ImbricateStaticManagerGetStaticOutcome } from "./outcome";

export interface IImbricateStaticManager {

    /**
     * Get the static object from the origin
     * 
     * @returns a promise of the static object, null if not found
     *  Symbol: S_StaticManager_GetStatic_NotFound - if the static object is not found
     */
    getStatic(uniqueIdentifier: string): PromiseLike<ImbricateStaticManagerGetStaticOutcome>;

    /**
     * Create a new static object in the origin, encoded in base64
     *  Static object is immutable, once created, it cannot be changed
     *  Patch a new static object if you want to change the content
     * 
     * @param content content of the static object, encoded in base64
     * @param auditOptions audit options of the static object
     * 
     * @returns a promise of the created static object
     *  Symbol: S_StaticManager_CreateStatic_IdentifierDuplicated - if the identifier is duplicated 
     */
    createInBase64(
        content: string,
        auditOptions?: ImbricateStaticAuditOptions,
    ): PromiseLike<ImbricateStaticManagerCreateStaticOutcome>;
}
