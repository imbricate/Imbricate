/**
 * @author WMXPY
 * @namespace Origin
 * @description Exclude Static
 */

import { ImbricateOriginFeatureNotSupportedError } from "../../error/origin/feature-not-supported";
import { IImbricateStaticManager } from "../../static-manager/static-manager";
import { IMBRICATE_ORIGIN_FEATURE } from "../feature";
import { IImbricateOrigin } from "../interface";
import { ImbricateOriginFullFeatureBase } from "./full-feature";

export abstract class ImbricateOriginExcludeStaticBase extends ImbricateOriginFullFeatureBase implements IImbricateOrigin {

    public readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[] = [

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_DATABASE_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.ORIGIN_TEXT_MANAGER,

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_SEARCH,
    ];

    public getStaticManager(): IImbricateStaticManager {

        throw ImbricateOriginFeatureNotSupportedError.withFeature(
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_STATIC_MANAGER,
        );
    }
}
