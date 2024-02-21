/**
 * @author WMXPY
 * @namespace Schema
 * @description Interface
 */

export interface IImbricateInterface<
    InputSchema,
    OutputSchema,
> {

    readonly protocol: string;

    readonly input: InputSchema;
    readonly output: OutputSchema;
}
