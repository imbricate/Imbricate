/**
 * @author WMXPY
 * @namespace Error
 * @description Not Implemented
 */

import { ImbricateError } from "./imbricate-error";

export class ImbricateNoteImplemented extends ImbricateError {

    public static create(
        originName: string,
        capabilityIdentifier: string,
    ): ImbricateNoteImplemented {

        return new ImbricateNoteImplemented(
            `Origin: ${originName} Capability: ${capabilityIdentifier} Not Implemented`,
        );
    }

    protected constructor(
        message: string,
        reason?: any,
    ) {

        super(message, "ImbricateNoteImplemented", reason);

        Object.setPrototypeOf(this, ImbricateNoteImplemented.prototype);
    }
}
