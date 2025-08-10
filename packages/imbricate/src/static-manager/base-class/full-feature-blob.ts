/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Full Feature Blob
 */

import { ImbricateStaticManagerFeatureNotSupportedError } from "../../error/static-manager/feature-not-supported";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../feature";
import { ImbricateStaticManagerGetStaticUriOutcome } from "../outcome";
import { IImbricateStaticManager } from "../static-manager";
import { ImbricateStaticManagerFullFeatureBase } from "./full-feature";

export abstract class ImbricateStaticManagerFullFeatureBlobBase extends ImbricateStaticManagerFullFeatureBase implements IImbricateStaticManager {

    public readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[] = [

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC,
        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_CREATE_STATIC,
    ];

    public getStaticUri(
        _staticUniqueIdentifier: string,
    ): PromiseLike<ImbricateStaticManagerGetStaticUriOutcome> {

        throw ImbricateStaticManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC_URI,
        );
    }
}
