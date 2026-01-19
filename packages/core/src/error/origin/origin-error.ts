/**
 * @namespace Error_Origin
 * @description Origin Error
 */

import { ImbricateError } from "../imbricate-error";

export class OriginError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, OriginError.prototype);
    }
}
