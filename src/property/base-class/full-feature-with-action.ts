/**
 * @author WMXPY
 * @namespace Property
 * @description Full Feature
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { ImbricatePropertyKey } from "../definition";
import { IMBRICATE_PROPERTY_FEATURE } from "../feature";
import { IImbricateProperty } from "../interface";
import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObject } from "../type";

export abstract class ImbricatePropertyFullFeatureWithActionBase<T extends IMBRICATE_PROPERTY_TYPE> implements IImbricateProperty<T> {

    public abstract readonly propertyKey: ImbricatePropertyKey;

    public abstract readonly propertyType: T;
    public abstract readonly propertyValue: ImbricatePropertyValueObject<T>;

    public readonly supportedFeatures: IMBRICATE_PROPERTY_FEATURE[] = [

        IMBRICATE_PROPERTY_FEATURE.PROPERTY_GET_ORIGIN_ACTIONS,
        IMBRICATE_PROPERTY_FEATURE.PROPERTY_EXECUTE_ORIGIN_ACTION,
    ];

    public abstract queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome>;

    public abstract executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome>;
}
