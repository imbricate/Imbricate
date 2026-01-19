/**
 * @namespace Static
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";
import { IMBRICATE_STATIC_MIME_TYPE } from "./definition";
import { IMBRICATE_STATIC_FEATURE } from "./feature";
import { ImbricateStaticGetContentOutcome } from "./outcome";

export interface IImbricateStatic {

    /**
     * Unique identifier of the static object
     */
    readonly uniqueIdentifier: string;

    /**
     * Mime type of the static object
     */
    readonly mimeType: IMBRICATE_STATIC_MIME_TYPE;

    /**
     * Features supported by the static object
     */
    readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[];

    /**
     * Author of the text object
     */
    readonly author: ImbricateAuthor;

    /**
     * Get the content of the static object
     * 
     * @returns a promise of the content of the text, encoded in base64
     *  Symbol: S_Static_GetContent_NotFound - if the content is not found
     */
    getContentInBase64(): PromiseLike<ImbricateStaticGetContentOutcome<string>>;
}
