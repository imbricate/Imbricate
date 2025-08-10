/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Readonly Blob
 */

import { ImbricateStaticManagerFeatureNotSupportedError } from "../../error/static-manager/feature-not-supported";
import { IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticAuditOptions } from "../../static/definition";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../feature";
import { ImbricateStaticManagerCreateStaticOutcome } from "../outcome";
import { IImbricateStaticManager } from "../static-manager";
import { ImbricateStaticManagerFullFeatureBlobBase } from "./full-feature-blob";

export abstract class ImbricateStaticManagerReadonlyBlobBase extends ImbricateStaticManagerFullFeatureBlobBase implements IImbricateStaticManager {

    public readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[] = [

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC,
    ];

    public createInBase64(
        _content: string,
        _mimeType: IMBRICATE_STATIC_MIME_TYPE,
        _auditOptions?: ImbricateStaticAuditOptions,
    ): PromiseLike<ImbricateStaticManagerCreateStaticOutcome> {

        throw ImbricateStaticManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_CREATE_STATIC,
        );
    }
}
