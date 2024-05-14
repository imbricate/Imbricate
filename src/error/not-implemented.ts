/**
 * @author WMXPY
 * @namespace Error
 * @description Not Implemented
 */

import { ImbricateError } from "./imbricate-error";

export class ImbricateNotImplemented extends ImbricateError {

    public static create(
        originName: string,
        capabilityIdentifier: string,
    ): ImbricateNotImplemented {

        return new ImbricateNotImplemented(
            `Origin: ${originName} Capability: ${capabilityIdentifier} Not Implemented`,
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
