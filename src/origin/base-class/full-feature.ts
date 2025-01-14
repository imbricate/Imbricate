/**
 * @author WMXPY
 * @namespace Origin
 * @description Full Feature
 */

import { ImbricateOriginAction, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { ImbricateOriginFeatureNotSupportedError } from "../../error/origin/feature-not-supported";
import { IMBRICATE_ORIGIN_FEATURE } from "../feature";
import { IImbricateOrigin } from "../interface";
import { ImbricateOriginSearchOutcome } from "../outcome";
import { ImbricateOriginFullFeatureWithActionBase } from "./full-feature-with-action";

export abstract class ImbricateOriginFullFeatureBase extends ImbricateOriginFullFeatureWithActionBase implements IImbricateOrigin {

    public readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[] = [

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_DATABASE_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.ORIGIN_TEXT_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.ORIGIN_STATIC_MANAGER,

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_SEARCH,
    ];

    public abstract search(
        keyword: string,
    ): PromiseLike<ImbricateOriginSearchOutcome>;

    public getOriginActions(): ImbricateOriginAction[] {

        throw ImbricateOriginFeatureNotSupportedError.withFeature(
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_GET_ORIGIN_ACTIONS,
        );
    }

    public executeOriginAction(
        _input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome> {

        throw ImbricateOriginFeatureNotSupportedError.withFeature(
            IMBRICATE_ORIGIN_FEATURE.ORIGIN_EXECUTE_ORIGIN_ACTION,
        );
    }
}
