/**
 * @author WMXPY
 * @namespace Capability
 * @description Builder
 */

import { ImbricateCapability } from "./definition";

export class ImbricateCapabilityBuilder<T> {

    private readonly _capabilities: Map<T, ImbricateCapability>;

    private constructor() {
        this._capabilities = new Map();
    }
}
