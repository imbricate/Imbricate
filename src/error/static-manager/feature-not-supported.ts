/**
 * @author WMXPY
 * @namespace Error
 * @description Feature Not Supported
 */

import { IMBRICATE_STATIC_MANAGER_FEATURE } from "../../static-manager/feature";
import { ImbricateStaticManagerError } from "./static-manager-error";

export class ImbricateStaticManagerFeatureNotSupportedError extends ImbricateStaticManagerError {

    public static withFeature(
        feature: IMBRICATE_STATIC_MANAGER_FEATURE,
    ): ImbricateStaticManagerFeatureNotSupportedError {

        return new ImbricateStaticManagerFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_STATIC_MANAGER_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateStaticManagerFeatureNotSupportedError.TYPE, reason);
    }
}
