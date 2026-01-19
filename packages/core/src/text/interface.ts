/**
 * @namespace Text
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";
import { IMBRICATE_TEXT_FEATURE } from "./feature";
import { ImbricateTextGetContentOutcome } from "./outcome";

export interface IImbricateText {

    /**
     * Unique identifier of the text object
     */
    readonly uniqueIdentifier: string;

    /**
     * Features supported by the text object
     */
    readonly supportedFeatures: IMBRICATE_TEXT_FEATURE[];

    /**
     * Author of the text object
     */
    readonly author: ImbricateAuthor;

    /**
     * Get the content of the text object
     * 
     * @returns a promise of the content of the text object
     *  Symbol: S_Text_GetContent_NotFound - if the content is not found
     */
    getContent(): PromiseLike<ImbricateTextGetContentOutcome>;
}
