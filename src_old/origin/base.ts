/**
 * @author WMXPY
 * @namespace Origin
 * @description Base
 */

import type { IImbricateBinaryStorage } from "../binary-storage/interface";
import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { IImbricateCollectionManager } from "../collection-manager/interface";
import { ImbricateNotImplemented } from "../error/not-implemented";
import type { IImbricateFunctionManager } from "../function/interface";
import { IImbricateOriginOperationManager } from "../origin-operation-manager/interface";
import type { IImbricateOrigin } from "../origin/interface";
import { IImbricateScriptManager } from "../script-manager/interface";
import { IMBRICATE_ORIGIN_CAPABILITY_KEY, ImbricateOriginCapability, ImbricateOriginCapabilityList, ImbricateOriginMetadata } from "./definition";

export abstract class ImbricateOriginBase implements IImbricateOrigin {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_ORIGIN_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_ORIGIN_CAPABILITY_KEY>(
            ImbricateOriginCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateOriginCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateOriginCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly originType: string;
    public abstract readonly uniqueIdentifier: string;

    public abstract readonly metadata: ImbricateOriginMetadata;
    public abstract readonly payloads: Record<string, any>;

    public abstract readonly capabilities: ImbricateOriginCapability;

    public getFunctionManager(): IImbricateFunctionManager {

        throw ImbricateNotImplemented.create(
            "GetFunctionManager",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_FUNCTION,
        );
    }

    public getBinaryStorage(): IImbricateBinaryStorage {

        throw ImbricateNotImplemented.create(
            "GetBinaryStorage",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_BINARY_STORAGE,
        );
    }

    public getScriptManager(): IImbricateScriptManager {

        throw ImbricateNotImplemented.create(
            "GetScriptManager",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_SCRIPT_MANAGER,
        );
    }

    public getCollectionManager(): IImbricateCollectionManager {

        throw ImbricateNotImplemented.create(
            "GetCollectionManager",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_COLLECTION_MANAGER,
        );
    }

    public getOperationManager(): IImbricateOriginOperationManager {

        throw ImbricateNotImplemented.create(
            "GetOperationManager",
            IMBRICATE_ORIGIN_CAPABILITY_KEY.ORIGIN_OPERATION_MANAGER,
        );
    }
}
