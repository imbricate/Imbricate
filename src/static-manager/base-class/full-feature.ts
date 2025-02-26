/**
 * @author WMXPY
 * @namespace StaticManager
 * @description Full Feature
 */

import { IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticAuditOptions } from "../../static/definition";
import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../feature";
import { ImbricateStaticManagerCreateStaticOutcome, ImbricateStaticManagerGetStaticOutcome } from "../outcome";
import { IImbricateStaticManager } from "../static-manager";

export abstract class ImbricateStaticManagerFullFeatureBase implements IImbricateStaticManager {

    public readonly supportedFeatures: IMBRICATE_STATIC_MANAGER_FEATURE[] = [

        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_GET_STATIC,
        IMBRICATE_STATIC_MANAGER_FEATURE.STATIC_MANAGER_CREATE_STATIC,
    ];

    public abstract getStatic(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateStaticManagerGetStaticOutcome>;

    public abstract createInBase64(
        content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        auditOptions?: ImbricateStaticAuditOptions,
    ): PromiseLike<ImbricateStaticManagerCreateStaticOutcome>;
}
