/**
 * @author WMXPY
 * @namespace Error
 * @description Feature Not Supported
 */

import { IMBRICATE_DOCUMENT_FEATURE } from "../../document/feature";
import { DocumentError } from "./document-error";

export class ImbricateDocumentFeatureNotSupportedError extends DocumentError {

    public static withFeature(
        feature: IMBRICATE_DOCUMENT_FEATURE,
    ): ImbricateDocumentFeatureNotSupportedError {

        return new ImbricateDocumentFeatureNotSupportedError(`Feature ${feature} is not supported`, feature);
    }

    public static readonly TYPE: string = "IMBRICATE_DOCUMENT_FEATURE_NOT_SUPPORTED";

    protected constructor(
        message: string,
        reason?: any,
    ) {
        super(message, ImbricateDocumentFeatureNotSupportedError.TYPE, reason);

        Object.setPrototypeOf(this, ImbricateDocumentFeatureNotSupportedError.prototype);
    }
}
