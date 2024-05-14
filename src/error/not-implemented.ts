/**
 * @author WMXPY
 * @namespace Error
 * @description Not Implemented
 */

import { ImbricateError } from "./imbricate-error";

export class ImbricateNotImplemented extends ImbricateError {

    public static create(
        feature: string,
        capabilityIdentifier: string,
    ): ImbricateNotImplemented {

        return new ImbricateNotImplemented(
            `Feature: [${feature}], which correspond with capability: [${capabilityIdentifier}] is not Implemented`,
        );
    }

    protected constructor(
        message: string,
        reason?: any,
    ) {

        super(message, "ImbricateNotImplemented", reason);

        Object.setPrototypeOf(this, ImbricateNotImplemented.prototype);
    }
}
