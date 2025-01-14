/**
 * @author WMXPY
 * @namespace Origin
 * @description Full Feature
 */

import { ImbricateOriginAction, ImbricateOriginActionInput, ImbricateOriginActionResult } from "../../common/action";
import { IImbricateDatabaseManager } from "../../database-manager/database-manager";
import { IImbricateStaticManager } from "../../static-manager/static-manager";
import { IImbricateTextManager } from "../../text-manager/text-manager";
import { OriginPayload } from "../definition";
import { IMBRICATE_ORIGIN_FEATURE } from "../feature";
import { IImbricateOrigin } from "../interface";
import { ImbricateOriginSearchOutcome } from "../outcome";

export abstract class ImbricateOriginFullFeatureWithActionBase implements IImbricateOrigin {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly payloads: OriginPayload;

    public readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[] = [

        IMBRICATE_ORIGIN_FEATURE.DATABASE_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.TEXT_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.STATIC_MANAGER,

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_SEARCH,

        IMBRICATE_ORIGIN_FEATURE.GET_ORIGIN_ACTIONS,
        IMBRICATE_ORIGIN_FEATURE.EXECUTE_ORIGIN_ACTION,
    ];

    public abstract getDatabaseManager(): IImbricateDatabaseManager;
    public abstract getTextManager(): IImbricateTextManager;
    public abstract getStaticManager(): IImbricateStaticManager;

    public abstract search(
        keyword: string,
    ): PromiseLike<ImbricateOriginSearchOutcome>;

    public abstract getOriginActions(): ImbricateOriginAction[];
    public abstract executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionResult>;
}
