/**
 * @author WMXPY
 * @namespace Error
 * @description Text Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateTextError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateTextError.prototype);
    }
}
