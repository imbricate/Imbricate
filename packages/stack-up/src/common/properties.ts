/**
 * @author WMXPY
 * @namespace Common
 * @description Properties
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyRecord, ImbricatePropertyValueObject, ImbricatePropertyVariant } from "@imbricate/core";

export type DocumentPropertyInstance = {

    readonly key: string;
    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: ImbricatePropertyValueObject<IMBRICATE_PROPERTY_TYPE>;
    readonly variant: ImbricatePropertyVariant;
};

export type DocumentPropertyInstanceRecord = Record<string, DocumentPropertyInstance>;

export const recordToInstanceRecord = (record: ImbricatePropertyRecord): DocumentPropertyInstanceRecord => {

    const result: DocumentPropertyInstanceRecord = Object.entries(record).reduce((
        instanceRecord,
        [key, value],
    ) => {

        return {
            ...instanceRecord,
            [key]: {
                key: value.propertyKey,
                type: value.propertyType,
                value: value.propertyValue,
                variant: value.propertyVariant,
            },
        };
    }, {} as DocumentPropertyInstanceRecord);

    return result;
};
