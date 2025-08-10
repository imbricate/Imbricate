/**
 * @author WMXPY
 * @namespace Error
 * @description Feature Not Supported
 */

import { IMBRICATE_DATABASE_MANAGER_FEATURE } from "../../database-manager/feature";
import { ImbricateDatabaseManagerError } from "./database-manager-error";

export class ImbricateDatabaseManagerFeatureNotSupportedError extends ImbricateDatabaseManagerError {

    public static withFeature(
        feature: IMBRICATE_DATABASE_MANAGER_FEATURE,
    ): ImbricateDatabaseManagerFeatureNotSupportedError {

        return new ImbricateDatabaseManagerFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_DATABASE_MANAGER_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateDatabaseManagerFeatureNotSupportedError.TYPE, reason);
    }
}
