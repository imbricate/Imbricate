/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Readonly
 */

import { ImbricateStaticManagerFeatureNotSupportedError } from "../../error/static-manager/feature-not-supported";
import { IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticAuditOptions } from "../../static/definition";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../feature";
import { ImbricateStaticManagerCreateStaticOutcome } from "../outcome";
import { IImbricateStaticManager } from "../static-manager";
import { ImbricateStaticManagerFullFeatureBase } from "./full-feature";

export abstract class ImbricateStaticManagerReadonlyBase extends ImbricateStaticManagerFullFeatureBase implements IImbricateStaticManager {

    public readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[] = [

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC,

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC_URI,
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
