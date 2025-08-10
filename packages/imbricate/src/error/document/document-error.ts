/**
 * @author WMXPY
 * @namespace Error_Document
 * @description Document Error
 */

import { ImbricateError } from "../imbricate-error";

export class DocumentError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, DocumentError.prototype);
    }
}
