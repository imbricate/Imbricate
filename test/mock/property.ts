/**
 * @author WMXPY
 * @namespace Mock
 * @description Property
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricatePropertyKey } from "../../src";

export class MockProperty implements IImbricateProperty<IMBRICATE_PROPERTY_TYPE> {

    public static create(
        type: IMBRICATE_PROPERTY_TYPE,
        value: any,
        key?: ImbricatePropertyKey,
    ): MockProperty {

        const fixedKey: ImbricatePropertyKey = key ?? "test";

        return new MockProperty(fixedKey, type, value);
    }

    private readonly _key: ImbricatePropertyKey;
    private readonly _type: IMBRICATE_PROPERTY_TYPE;
    private readonly _value: any;

    private constructor(
        key: ImbricatePropertyKey,
        type: IMBRICATE_PROPERTY_TYPE,
        value: any,
    ) {

        this._key = key;
        this._type = type;
        this._value = value;
    }

    public get propertyKey(): ImbricatePropertyKey {

        return this._key;
    }

    public get propertyType(): IMBRICATE_PROPERTY_TYPE {

        return this._type;
    }

    public get propertyValue(): any {

        return this._value;
    }
}
