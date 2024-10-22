/**
 * @author WMXPY
 * @namespace Loader
 * @description Origin Loader
 */

import { ImbricateOriginPersistance } from "./persistance";

export class ImbricateOriginLoader {

    public static fromPersistance(
        persistance: ImbricateOriginPersistance,
    ): ImbricateOriginLoader {

        return new ImbricateOriginLoader(persistance);
    }

    private readonly _persistance: ImbricateOriginPersistance;

    private constructor(persistance: ImbricateOriginPersistance) {

        this._persistance = persistance;
    }
}
