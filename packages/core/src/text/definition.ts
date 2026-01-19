/**
 * @namespace Text
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";

export type ImbricateTextAuditOptions = {

    /**
     * Text author, this is controlled an function may vary by origin
     */
    readonly author?: ImbricateAuthor;
};
