/**
 * @namespace Static
 * @description Author Only
 */

import { ImbricateStaticFeatureNotSupportedError } from "../../error/static/feature-not-supported";
import { IMBRICATE_STATIC_FEATURE } from "../feature";
import { IImbricateStatic } from "../interface";
import { ImbricateStaticGetContentOutcome } from "../outcome";
import { ImbricateStaticFullFeatureBase } from "./full-feature";

export abstract class ImbricateStaticAuthorOnlyBase extends ImbricateStaticFullFeatureBase implements IImbricateStatic {

    public readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[] = [
        IMBRICATE_STATIC_FEATURE.STATIC_GET_AUTHOR,
    ];

    public getContentInBase64(): PromiseLike<ImbricateStaticGetContentOutcome<string>> {

        throw ImbricateStaticFeatureNotSupportedError.withFeature(
            IMBRICATE_STATIC_FEATURE.STATIC_GET_CONTENT,
        );
    }
}
