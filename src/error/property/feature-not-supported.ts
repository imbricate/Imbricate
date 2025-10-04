/**
 * @namespace Error
 * @description Property Feature Not Supported
 */

import { IMBRICATE_PROPERTY_FEATURE } from "../../property/feature";
import { PropertyError } from "./property-error";

export class PropertyFeatureNotSupportedError extends PropertyError {

    public static withFeature(
        feature: IMBRICATE_PROPERTY_FEATURE,
    ): PropertyFeatureNotSupportedError {

        return new PropertyFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_PROPERTY_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, PropertyFeatureNotSupportedError.TYPE, reason);

        Object.setPrototypeOf(this, PropertyFeatureNotSupportedError.prototype);
    }
}
