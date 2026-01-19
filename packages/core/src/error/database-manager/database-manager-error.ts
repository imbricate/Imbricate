/**
 * @namespace Error
 * @description Database Manager Error
 */

import { ImbricateError } from "../imbricate-error";

export class ImbricateDatabaseManagerError extends ImbricateError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {
        super(message, type, reason);

        Object.setPrototypeOf(this, ImbricateDatabaseManagerError.prototype);
    }
}
