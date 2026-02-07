/**
 * @package Quick Action
 * @namespace Origin
 * @description Loader
 */

import { IImbricateDatabaseManager, IImbricateOrigin, IImbricateTextManager, ImbricateOriginEssentialBase, OriginPayload } from "@imbricate/core";
import { ImbricateQuickActionDatabaseManager } from "../database/manager";
import { QuickActionOriginPayload } from "./payload";

export class ImbricateQuickActionOrigin extends ImbricateOriginEssentialBase implements IImbricateOrigin {

    public static create(
        payload: OriginPayload,
    ): ImbricateQuickActionOrigin {

        return new ImbricateQuickActionOrigin(
            payload as QuickActionOriginPayload,
        );
    }

    public readonly payloads: QuickActionOriginPayload;

    private constructor(
        payload: QuickActionOriginPayload,
    ) {

        super();

        this.payloads = payload;
    }

    public get uniqueIdentifier(): string {

        return this.payloads.uniqueIdentifier;
    }

    public getDatabaseManager(): IImbricateDatabaseManager {

        return ImbricateQuickActionDatabaseManager.create();
    }

    public getTextManager(): IImbricateTextManager {
        throw new Error("Method not implemented.");
    }
}
