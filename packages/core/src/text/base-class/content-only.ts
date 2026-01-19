/**
 * @namespace Text
 * @description Content Only
 */

import { ImbricateAuthor } from "../../author/definition";
import { ImbricateTextFeatureNotSupportedError } from "../../error/text/feature-not-supported";
import { IMBRICATE_TEXT_FEATURE } from "../feature";
import { ImbricateTextFullFeatureBase } from "./full-feature";

export abstract class ImbricateTextContentOnlyBase extends ImbricateTextFullFeatureBase {

    public readonly supportedFeatures: IMBRICATE_TEXT_FEATURE[] = [
        IMBRICATE_TEXT_FEATURE.TEXT_GET_CONTENT,
    ];

    public get author(): ImbricateAuthor {

        throw ImbricateTextFeatureNotSupportedError.withFeature(
            IMBRICATE_TEXT_FEATURE.TEXT_GET_AUTHOR,
        );
    }
}
