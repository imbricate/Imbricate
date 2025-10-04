/**
 * @namespace Error
 * @description Database Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateDatabaseError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateDatabaseError.prototype);
    }
}
