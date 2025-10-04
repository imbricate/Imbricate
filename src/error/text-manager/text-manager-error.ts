/**
 * @namespace Error
 * @description Text Manager Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateTextManagerError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateTextManagerError.prototype);
    }
}
