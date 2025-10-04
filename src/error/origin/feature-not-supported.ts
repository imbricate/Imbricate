/**
 * @namespace Error_Origin
 * @description Feature Not Supported
 */

import { IMBRICATE_ORIGIN_FEATURE } from "../../origin/feature";
import { OriginError } from "./origin-error";

export class ImbricateOriginFeatureNotSupportedError extends OriginError {

    public static withFeature(
        feature: IMBRICATE_ORIGIN_FEATURE,
    ): ImbricateOriginFeatureNotSupportedError {

        return new ImbricateOriginFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_ORIGIN_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateOriginFeatureNotSupportedError.TYPE, reason);

        Object.setPrototypeOf(this, ImbricateOriginFeatureNotSupportedError.prototype);
    }
}
