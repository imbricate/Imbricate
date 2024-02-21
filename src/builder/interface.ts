/**
 * @author WMXPY
 * @namespace Builder
 * @description Interface
 */

import { IImbricateInterface } from "../schema/interface";
import { Writable } from "../util/writable";
import { verifyInterface } from "../verify/interface";

export class ImbricateInterfaceBuilder<
    InputSchema = unknown,
    OutputSchema = unknown,
> {

    public static fromScratch(): ImbricateInterfaceBuilder {

        return new ImbricateInterfaceBuilder();
    }

    private readonly _interface: Writable<
        IImbricateInterface<InputSchema, OutputSchema>
    >;

    private constructor() {

        this._interface = {} as Writable<
            IImbricateInterface<InputSchema, OutputSchema>
        >;
    }

    public identifier(identifier: string): this {

        this._interface.identifier = identifier;
        return this;
    }

    public version(version: string): this {

        this._interface.version = version;
        return this;
    }

    public protocol(protocol: string): this {

        this._interface.protocol = protocol;
        return this;
    }

    public matcher(matcher: string): this {

        this._interface.matcher = matcher;
        return this;
    }

    public humanFriendlyName(humanFriendlyName: string): this {

        this._interface.humanFriendlyName = humanFriendlyName;
        return this;
    }

    public description(description: string): this {

        this._interface.description = description;
        return this;
    }

    public input(): this {

        this._interface.input = {} as InputSchema;
        return this;
    }

    public output(): this {

        this._interface.output = {} as OutputSchema;
        return this;
    }

    public verify(): boolean {

        return verifyInterface(this._interface as IImbricateInterface);
    }

    public build(): IImbricateInterface<InputSchema, OutputSchema> {

        return this._interface as IImbricateInterface<InputSchema, OutputSchema>;
    }
}
