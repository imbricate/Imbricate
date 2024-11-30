/**
 * @author WMXPY
 * @namespace Static
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";

export type ImbricateStaticAuditOptions = {

    /**
     * Static author, this is controlled an function may vary by origin
     */
    readonly author?: ImbricateAuthor;
};
