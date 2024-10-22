/**
 * @author WMXPY
 * @namespace Capability
 * @description Builder
 */

import { createImbricateCapabilityRecord } from "./create";
import { ImbricateCapability, ImbricateCapabilityKey, ImbricateCapabilityRecord, createAllowImbricateCapability, createDenyImbricateCapability } from "./definition";

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

    public set(key: T, value: ImbricateCapability): this {

        this._capabilities[key] = value;
        return this;
    }

    public allow(key: T): this {

        this._capabilities[key] = createAllowImbricateCapability();
        return this;
    }

    public deny(key: T): this {

        this._capabilities[key] = createDenyImbricateCapability();
        return this;
    }

    public build(): ImbricateCapabilityRecord<T> {

        return Object.keys(this._capabilities).reduce(
            (
                previous: ImbricateCapabilityRecord<T>,
                current: string,
            ) => {
                return {
                    ...previous,
                    [current]: this._capabilities[current as T],
                };
            },
            {} as ImbricateCapabilityRecord<T>,
        ) as ImbricateCapabilityRecord<T>;
    }
}
