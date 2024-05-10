/**
 * @author WMXPY
 * @namespace Error
 * @description Imbricate
 */

export class ImbricateError extends Error {

    private readonly _type: string;
    private readonly _message: string;
    private readonly _reason: any | undefined;

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {

        super(message);

        this._type = type;
        this._message = message;
        this._reason = reason;

        Object.setPrototypeOf(this, ImbricateError.prototype);
    }

    public get type(): string {

        return this._type;
    }

    public get message(): string {

        return this._message;
    }

    public get reason(): any | undefined {

        return this._reason;
    }

    public toString(): string {

        return `[${this._type}] ${this.message}`;
    }
}
