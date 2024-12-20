/**
 * @author WMXPY
 * @namespace Static
 * @description Content Only
 */

import { ImbricateAuthor } from "../../author/definition";
import { ImbricateStaticFeatureNotSupportedError } from "../../error/static/feature-not-supported";
import { IMBRICATE_STATIC_FEATURE } from "../feature";
import { ImbricateStaticFullFeatureBase } from "./full-feature";

export abstract class ImbricateStaticContentOnlyBase extends ImbricateStaticFullFeatureBase {

    public readonly features: IMBRICATE_STATIC_FEATURE[] = [
        IMBRICATE_STATIC_FEATURE.STATIC_GET_CONTENT,
    ];

    public get author(): ImbricateAuthor {

        throw ImbricateStaticFeatureNotSupportedError.withFeature(
            IMBRICATE_STATIC_FEATURE.STATIC_GET_AUTHOR,
        );
    }
}
