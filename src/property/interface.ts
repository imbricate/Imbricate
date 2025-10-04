/**
 * @namespace Property
 * @description Interface
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../common/action";
import { ImbricatePropertyKey, ImbricatePropertyVariant } from "./definition";
import { IMBRICATE_PROPERTY_FEATURE } from "./feature";
import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObject } from "./type";

export interface IImbricateProperty<T extends IMBRICATE_PROPERTY_TYPE> {

    /**
     * Property key, reference to the property key from documents
     */
    readonly propertyKey: ImbricatePropertyKey;

    /**
     * Property type
     */
    readonly propertyType: T;

    /**
     * Property value
     */
    readonly propertyValue: ImbricatePropertyValueObject<T>;

    /**
     * Property variant
     */
    readonly propertyVariant: ImbricatePropertyVariant;

    /**
     * Supported features of the property
     */
    readonly supportedFeatures: IMBRICATE_PROPERTY_FEATURE[];

    /**
     * Query the property actions
     * 
     * @param query the query of the property actions
     * 
     * @returns the property actions
     *  Symbol: S_Common_QueryOriginActions_Stale - if the property actions are stale
     *  Symbol: S_Common_QueryOriginActions_Unknown - if the property actions are unknown
     */
    queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome>;

    /**
     * Execute the property action
     * 
     * @param input the input of the action
     * 
     * @returns the result of the action
     */
    executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome>;
}
