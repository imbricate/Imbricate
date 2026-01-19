/**
 * @namespace Property
 * @description Full Feature
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { PropertyFeatureNotSupportedError } from "../../error/property/feature-not-supported";
import { IMBRICATE_PROPERTY_FEATURE } from "../feature";
import { IImbricateProperty } from "../interface";
import { IMBRICATE_PROPERTY_TYPE } from "../type";
import { ImbricatePropertyFullFeatureWithActionBase } from "./full-feature-with-action";

export abstract class ImbricatePropertyFullFeatureBase<T extends IMBRICATE_PROPERTY_TYPE> extends ImbricatePropertyFullFeatureWithActionBase<T> implements IImbricateProperty<T> {

    public readonly supportedFeatures: IMBRICATE_PROPERTY_FEATURE[] = [];

    public queryOriginActions(
        _query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome> {

        throw PropertyFeatureNotSupportedError.withFeature(
            IMBRICATE_PROPERTY_FEATURE.PROPERTY_GET_ORIGIN_ACTIONS,
        );
    }

    public executeOriginAction(
        _input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome> {

        throw PropertyFeatureNotSupportedError.withFeature(
            IMBRICATE_PROPERTY_FEATURE.PROPERTY_EXECUTE_ORIGIN_ACTION,
        );
    }
}
