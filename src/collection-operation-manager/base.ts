/**
 * @author WMXPY
 * @namespace CollectionOperationManager
 * @description Base
 */

import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { IMBRICATE_OPERATION_SCOPE, ImbricateOperation } from "../operation/definition";
import { IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY, ImbricateCollectionOperationManagerCapability, ImbricateCollectionOperationManagerCapabilityList } from "./definition";
import { IImbricateCollectionOperationManager } from "./interface";

export abstract class ImbricateCollectionOperationManagerBase implements IImbricateCollectionOperationManager {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY>(
            ImbricateCollectionOperationManagerCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateCollectionOperationManagerCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateCollectionOperationManagerCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly capabilities: ImbricateCollectionOperationManagerCapability;

    public async listOperations(
        _scope?: IMBRICATE_OPERATION_SCOPE,
    ): Promise<Array<ImbricateOperation<IMBRICATE_OPERATION_SCOPE>>> {

        throw ImbricateNotImplemented.create(
            "ListOperations",
            IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY.LIST_OPERATIONS,
        );
    }

    public async executeOperation(
        _operationIdentifier: string,
        _parameter: unknown,
    ): Promise<void> {

        throw ImbricateNotImplemented.create(
            "ExecuteOperation",
            IMBRICATE_COLLECTION_OPERATION_MANAGER_CAPABILITY_KEY.EXECUTE_OPERATION,
        );
    }
}
