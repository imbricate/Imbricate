/**
 * @author WMXPY
 * @namespace Property
 * @description Property
 */

import { IImbricateProperty, IMBRICATE_PROPERTY_TYPE, ImbricatePropertyFullFeatureBase, ImbricatePropertyKey, ImbricatePropertyValueObject, ImbricatePropertyVariant } from "@imbricate/core";

export class ImbricateStackAPIProperty<T extends IMBRICATE_PROPERTY_TYPE> extends ImbricatePropertyFullFeatureBase<T> implements IImbricateProperty<T> {

    public static create<T extends IMBRICATE_PROPERTY_TYPE>(
        propertyKey: ImbricatePropertyKey,
        propertyType: T,
        propertyValue: ImbricatePropertyValueObject<T>,
        propertyVariant: ImbricatePropertyVariant,
    ): ImbricateStackAPIProperty<T> {

        return new ImbricateStackAPIProperty(
            propertyKey,
            propertyType,
            propertyValue,
            propertyVariant,
        );
    }

    private readonly _propertyKey: ImbricatePropertyKey;
    private readonly _propertyType: T;
    private readonly _propertyValue: ImbricatePropertyValueObject<T>;
    private readonly _propertyVariant: ImbricatePropertyVariant;

    private constructor(
        propertyKey: ImbricatePropertyKey,
        propertyType: T,
        propertyValue: ImbricatePropertyValueObject<T>,
        propertyVariant: ImbricatePropertyVariant,
    ) {

        super();

        this._propertyKey = propertyKey;
        this._propertyType = propertyType;
        this._propertyValue = propertyValue;
        this._propertyVariant = propertyVariant;
    }

    public get propertyKey(): ImbricatePropertyKey {
        return this._propertyKey;
    }

    public get propertyType(): T {
        return this._propertyType;
    }

    public get propertyValue(): ImbricatePropertyValueObject<T> {
        return this._propertyValue;
    }

    public get propertyVariant(): ImbricatePropertyVariant {
        return this._propertyVariant;
    }
}
