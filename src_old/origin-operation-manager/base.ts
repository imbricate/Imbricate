/**
 * @author WMXPY
 * @namespace OriginOperationManager
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_OPERATION_SCOPE, ImbricateOperation } from "../operation/definition";
import { IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY, ImbricateOriginOperationManagerCapability, ImbricateOriginOperationManagerCapabilityList } from "./definition";
import { IImbricateOriginOperationManager } from "./interface";

export abstract class ImbricateOriginOperationManagerBase implements IImbricateOriginOperationManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY>(
            ImbricateOriginOperationManagerCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateOriginOperationManagerCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateOriginOperationManagerCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateOriginOperationManagerCapability;

    public async listOperations(
        _scope?: IMBRICATE_OPERATION_SCOPE,
    ): Promise<Array<ImbricateOperation<IMBRICATE_OPERATION_SCOPE>>> {

        throw ImbricateNotImplemented.create(
            "ListOperations",
            IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY.LIST_OPERATIONS,
        );
    }

    public async executeOperation(
        _operationIdentifier: string,
        _parameter: unknown,
    ): Promise<void> {

        throw ImbricateNotImplemented.create(
            "ExecuteOperation",
            IMBRICATE_ORIGIN_OPERATION_MANAGER_CAPABILITY_KEY.EXECUTE_OPERATION,
        );
    }
}
