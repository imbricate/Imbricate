/**
 * @author WMXPY
 * @namespace Error
 * @description Static Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateStaticError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateStaticError.prototype);
    }
}
