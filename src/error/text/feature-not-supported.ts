/**
 * @namespace Error
 * @description Text Feature Not Supported
 */

import { IMBRICATE_TEXT_FEATURE } from "../../text/feature";
import { ImbricateTextError } from "./text-error";

export class ImbricateTextFeatureNotSupportedError extends ImbricateTextError {

    public static withFeature(
        feature: IMBRICATE_TEXT_FEATURE,
    ): ImbricateTextFeatureNotSupportedError {

        return new ImbricateTextFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_TEXT_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateTextFeatureNotSupportedError.TYPE, reason);
    }
}
