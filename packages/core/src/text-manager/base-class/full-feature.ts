/**
 * @namespace TextManager
 * @description Full Feature
 */

import { ImbricateTextAuditOptions } from "../../text/definition";
import { IMBRICATE_TEXT_MANAGER_FEATURE } from "../feature";
import { ImbricateTextManagerCreateTextOutcome, ImbricateTextManagerGetTextOutcome } from "../outcome";
import { IImbricateTextManager } from "../text-manager";

export abstract class ImbricateTextManagerFullFeatureBase implements IImbricateTextManager {

    public readonly supportedFeatures: IMBRICATE_TEXT_MANAGER_FEATURE[] = [

        IMBRICATE_TEXT_MANAGER_FEATURE.TEXT_MANAGER_GET_TEXT,
        IMBRICATE_TEXT_MANAGER_FEATURE.TEXT_MANAGER_CREATE_TEXT,
    ];

    public abstract getText(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateTextManagerGetTextOutcome>;

    public abstract createText(
        content: string,
        auditOptions?: ImbricateTextAuditOptions,
    ): PromiseLike<ImbricateTextManagerCreateTextOutcome>;
}
