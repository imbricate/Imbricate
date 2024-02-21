/**
 * @author WMXPY
 * @namespace Builder
 * @description Interface
 */

export class ImbricateInterfaceBuilder {

    public static fromScratch(): ImbricateInterfaceBuilder {

        return new ImbricateInterfaceBuilder();
    }

    private readonly _identifier: string;
    private readonly _version: string;

    private readonly _protocol: string;
    private readonly _matcher: string;

    private _humanFriendlyName?: string;
    private _description?: string;

    private _input: any;
    private _output: any;
}
