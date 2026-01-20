/**
 * @author WMXPY
 * @namespace OriginTest
 * @description Testing Target
 */

import { IImbricateOrigin } from "@imbricate/core";
import { ImbricateOriginTestConstructionFunction, ImbricateOriginTestResetFunction } from "./definition";

export class ImbricateOriginTestingTarget {

    public static fromConstructor(
        originConstructor: ImbricateOriginTestConstructionFunction,
        originResetFunction: ImbricateOriginTestResetFunction,
    ): ImbricateOriginTestingTarget {

        return new ImbricateOriginTestingTarget(
            originConstructor,
            originResetFunction,
        );
    }

    private _originConstructor: ImbricateOriginTestConstructionFunction;
    private _originResetFunction: ImbricateOriginTestResetFunction;

    private _targetOrigin: IImbricateOrigin | null;

    public constructor(
        originConstructor: ImbricateOriginTestConstructionFunction,
        originResetFunction: ImbricateOriginTestResetFunction,
    ) {

        this._originConstructor = originConstructor;
        this._originResetFunction = originResetFunction;

        this._targetOrigin = null;
    }

    public ensureOrigin(): IImbricateOrigin {

        if (!this._targetOrigin) {
            throw new Error("Origin not constructed");
        }

        return this._targetOrigin;
    }

    public async resetOrigin(): Promise<void> {

        await this._originResetFunction();
    }

    public async construct(): Promise<void> {

        if (this._targetOrigin) {
            return;
        }

        const constructed: IImbricateOrigin = await this._originConstructor();

        if (!constructed) {
            throw new Error("Origin not constructed");
        }
        this._targetOrigin = constructed;
    }

    public async dispose(): Promise<void> {

        if (!this._targetOrigin) {
            return;
        }

        if (this._targetOrigin.dispose) {

            await this._targetOrigin.dispose();
            this._targetOrigin = null;
        }
    }
}
