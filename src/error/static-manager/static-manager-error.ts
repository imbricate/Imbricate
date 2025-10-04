/**
 * @namespace Error
 * @description Static Manager Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateStaticManagerError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateStaticManagerError.prototype);
    }
}
