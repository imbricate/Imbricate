/**
 * @author WMXPY
 * @namespace Capability
 * @description Create
 */

import { ImbricateCapability, ImbricateCapabilityRecord } from "./definition";

export const createImbricateCapabilityRecord = <T extends string>(
    list: T[],
    initialValue: ImbricateCapability,
): ImbricateCapabilityRecord<T> => {

    const record: Partial<ImbricateCapabilityRecord<T>> = {};

    for (const key of list) {

        record[key] = {
            ...initialValue,
        };
    }
    return record as ImbricateCapabilityRecord<T>;
};
