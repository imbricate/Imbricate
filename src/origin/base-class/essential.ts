/**
 * @author WMXPY
 * @namespace Origin
 * @description Essential
 */

import { ImbricateOriginFeatureNotSupportedError } from "../../error/origin/feature-not-supported";
import { IImbricateStaticManager } from "../../static/manager";
import { IMBRICATE_ORIGIN_FEATURE } from "../feature";
import { IImbricateOrigin } from "../interface";
import { ImbricateOriginSearchOutcome } from "../outcome";
import { ImbricateOriginFullFeatureBase } from "./full-feature";

export abstract class ImbricateOriginEssentialBase extends ImbricateOriginFullFeatureBase implements IImbricateOrigin {

    public readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[] = [

        IMBRICATE_ORIGIN_FEATURE.DATABASE_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.TEXT_MANAGER,
    ];

    public getStaticManager(): IImbricateStaticManager {

        throw ImbricateOriginFeatureNotSupportedError.withFeature(
            IMBRICATE_ORIGIN_FEATURE.STATIC_MANAGER,
        );
    }

    public search(
        _keyword: string,
    ): PromiseLike<ImbricateOriginSearchOutcome> {

        throw ImbricateOriginFeatureNotSupportedError.withFeature(
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_SEARCH,
        );
    }
}
