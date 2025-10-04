/**
 * @namespace Mock
 * @description Property
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricatePropertyFullFeatureBase, ImbricatePropertyKey, ImbricatePropertyVariant } from "../../src";

export class MockProperty extends ImbricatePropertyFullFeatureBase<IMBRICATE_PROPERTY_TYPE> implements IImbricateProperty<IMBRICATE_PROPERTY_TYPE> {

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
    private readonly _variant: ImbricatePropertyVariant;

    private constructor(
        key: ImbricatePropertyKey,
        type: IMBRICATE_PROPERTY_TYPE,
        value: any,
    ) {

        super();

        this._key = key;
        this._type = type;
        this._value = value;
        this._variant = null;
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

    public get propertyVariant(): ImbricatePropertyVariant {

        return this._variant;
    }
}
