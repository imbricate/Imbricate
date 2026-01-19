/**
 * @namespace TextManager
 * @description Readonly
 */

import { ImbricateTextManagerFeatureNotSupportedError } from "../../error/text-manager/feature-not-supported";
import { ImbricateTextAuditOptions } from "../../text/definition";
import { IMBRICATE_TEXT_MANAGER_FEATURE } from "../feature";
import { ImbricateTextManagerCreateTextOutcome } from "../outcome";
import { IImbricateTextManager } from "../text-manager";
import { ImbricateTextManagerFullFeatureBase } from "./full-feature";

export abstract class ImbricateTextManagerReadonlyBase extends ImbricateTextManagerFullFeatureBase implements IImbricateTextManager {

    public readonly supportedFeatures: IMBRICATE_TEXT_MANAGER_FEATURE[] = [

        IMBRICATE_TEXT_MANAGER_FEATURE.TEXT_MANAGER_GET_TEXT,
    ];

    public createInBase64(
        _content: string,
        _auditOptions?: ImbricateTextAuditOptions,
    ): PromiseLike<ImbricateTextManagerCreateTextOutcome> {

        throw ImbricateTextManagerFeatureNotSupportedError.withFeature(
            IMBRICATE_TEXT_MANAGER_FEATURE.TEXT_MANAGER_CREATE_TEXT,
        );
    }
}
