/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Readonly
 */

import { ImbricateStaticManagerFeatureNotSupportedError } from "../../error/static-manager/feature-not-supported";
import { ImbricateStaticAuditOptions } from "../../static/definition";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../feature";
import { ImbricateStaticManagerCreateStaticOutcome } from "../outcome";
import { IImbricateStaticManager } from "../static-manager";
import { ImbricateStaticManagerFullFeatureBase } from "./full-feature";

export abstract class ImbricateStaticManagerReadonlyBase extends ImbricateStaticManagerFullFeatureBase implements IImbricateStaticManager {

    public readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[] = [

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC,
    ];

    public createInBase64(
        _content: string,
        _auditOptions?: ImbricateStaticAuditOptions,
    ): PromiseLike<ImbricateStaticManagerCreateStaticOutcome> {

        throw ImbricateStaticManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_CREATE_STATIC,
        );
    }
}
