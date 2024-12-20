/**
 * @author WMXPY
 * @namespace Origin
 * @description Full Feature
 */

import { IImbricateDatabaseManager } from "../../database/manager";
import { IImbricateStaticManager } from "../../static/manager";
import { IImbricateTextManager } from "../../text/manager";
import { OriginPayload } from "../definition";
import { IMBRICATE_ORIGIN_FEATURE } from "../feature";
import { IImbricateOrigin } from "../interface";
import { ImbricateOriginSearchOutcome } from "../outcome";

export abstract class ImbricateOriginFullFeatureBase implements IImbricateOrigin {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly payloads: OriginPayload;

    public readonly supportedFeatures: IMBRICATE_ORIGIN_FEATURE[] = [

        IMBRICATE_ORIGIN_FEATURE.DATABASE_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.TEXT_MANAGER,
        IMBRICATE_ORIGIN_FEATURE.STATIC_MANAGER,

        IMBRICATE_ORIGIN_FEATURE.ORIGIN_SEARCH,
    ];

    public abstract getDatabaseManager(): IImbricateDatabaseManager;
    public abstract getTextManager(): IImbricateTextManager;
    public abstract getStaticManager(): IImbricateStaticManager;

    public abstract search(keyword: string): PromiseLike<ImbricateOriginSearchOutcome>;
}
