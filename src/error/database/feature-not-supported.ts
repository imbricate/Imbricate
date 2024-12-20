/**
 * @author WMXPY
 * @namespace Error
 * @description Feature Not Supported
 */

import { IMBRICATE_DATABASE_FEATURE } from "../../database/feature";
import { ImbricateDatabaseError } from "./database-error";

export class ImbricateDatabaseFeatureNotSupportedError extends ImbricateDatabaseError {

    public static withFeature(
        feature: IMBRICATE_DATABASE_FEATURE,
    ): ImbricateDatabaseFeatureNotSupportedError {

        return new ImbricateDatabaseFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_DATABASE_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateDatabaseFeatureNotSupportedError.TYPE, reason);
    }
}
