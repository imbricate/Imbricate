/**
 * @namespace Error
 * @description Static Feature Not Supported
 */

import { IMBRICATE_STATIC_FEATURE } from "../../static/feature";
import { ImbricateStaticError } from "./static-error";

export class ImbricateStaticFeatureNotSupportedError extends ImbricateStaticError {

    public static withFeature(
        feature: IMBRICATE_STATIC_FEATURE,
    ): ImbricateStaticFeatureNotSupportedError {

        return new ImbricateStaticFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_STATIC_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateStaticFeatureNotSupportedError.TYPE, reason);
    }
}
