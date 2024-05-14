/**
 * @author WMXPY
 * @namespace Capability
 * @description Builder
 */

import { createImbricateCapabilityRecord } from "./create";
import type { ImbricateCapability, ImbricateCapabilityKey, ImbricateCapabilityRecord } from "./definition";

export class ImbricateCapabilityBuilder<T extends ImbricateCapabilityKey> {

    public static create<T extends ImbricateCapabilityKey>(
        list: T[],
        initialValue: ImbricateCapability,
    ): ImbricateCapabilityBuilder<T> {

        const capabilities: ImbricateCapabilityRecord<T> =
            createImbricateCapabilityRecord(list, initialValue);

        return new ImbricateCapabilityBuilder<T>(capabilities);
    }

    private readonly _capabilities: ImbricateCapabilityRecord<T>;

    private constructor(
        capabilities: ImbricateCapabilityRecord<T>,
    ) {

        this._capabilities = capabilities;
    }

    public build(): ImbricateCapabilityRecord<T> {

        return Object.keys(this._capabilities).map((key: string) => {
            return {
                [key]: this._capabilities[key],
            };
        }) as ImbricateCapabilityRecord<T>;
    }
}
