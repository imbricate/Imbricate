/**
 * @author WMXPY
 * @namespace Schema
 * @description Interface
 */

export interface IImbricateInterface<
    InputSchema,
    OutputSchema,
> {

    readonly identifier: string;
    readonly version: string;

    readonly protocol: string;
    readonly matcher: string;

    readonly humanFriendlyName?: string;
    readonly description?: string;

    readonly input: InputSchema;
    readonly output: OutputSchema;
}
