/**
 * @namespace Error
 * @description Feature Not Supported
 */

import { IMBRICATE_TEXT_MANAGER_FEATURE } from "../../text-manager/feature";
import { ImbricateTextManagerError } from "./text-manager-error";

export class ImbricateTextManagerFeatureNotSupportedError extends ImbricateTextManagerError {

    public static withFeature(
        feature: IMBRICATE_TEXT_MANAGER_FEATURE,
    ): ImbricateTextManagerFeatureNotSupportedError {

        return new ImbricateTextManagerFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_TEXT_MANAGER_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateTextManagerFeatureNotSupportedError.TYPE, reason);
    }
}
