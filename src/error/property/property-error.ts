/**
 * @namespace Error
 * @description Property Error
 */

import { ImbricateError } from "../imbricate-error";

export class PropertyError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, PropertyError.prototype);
    }
}
