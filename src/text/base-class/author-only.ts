/**
 * @author WMXPY
 * @namespace Text
 * @description Author Only
 */

import { ImbricateTextFeatureNotSupportedError } from "../../error/text/feature-not-supported";
import { IMBRICATE_TEXT_FEATURE } from "../feature";
import { IImbricateText } from "../interface";
import { ImbricateTextGetContentOutcome } from "../outcome";
import { ImbricateTextFullFeatureBase } from "./full-feature";

export abstract class ImbricateTextAuthorOnlyBase extends ImbricateTextFullFeatureBase implements IImbricateText {

    public readonly features: IMBRICATE_TEXT_FEATURE[] = [
        IMBRICATE_TEXT_FEATURE.TEXT_GET_AUTHOR,
    ];

    public getContent(): PromiseLike<ImbricateTextGetContentOutcome> {

        throw ImbricateTextFeatureNotSupportedError.withFeature(
            IMBRICATE_TEXT_FEATURE.TEXT_GET_CONTENT,
        );
    }
}
