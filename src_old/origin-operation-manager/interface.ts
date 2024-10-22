/**
 * @author WMXPY
 * @namespace OriginOperationManager
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { IMBRICATE_OPERATION_SCOPE, ImbricateOperation, ImbricateOperationParameter } from "../operation/definition";
import { ImbricateOriginOperationManagerCapability } from "./definition";

export interface IImbricateOriginOperationManager {

    /**
     * Capabilities of the origin operation manager
     */
    readonly capabilities: ImbricateOriginOperationManagerCapability;

    /**
     * List all operations
     * 
     * @returns all operations
     */
    listOperations(): PromiseOr<Array<ImbricateOperation<IMBRICATE_OPERATION_SCOPE>>>;

    /**
     * List operations by scope
     * 
     * @param scope the scope of the operation
     * @returns all operations
     */
    listOperations<T extends IMBRICATE_OPERATION_SCOPE>(
        scope: IMBRICATE_OPERATION_SCOPE,
    ): PromiseOr<Array<ImbricateOperation<T>>>;

    /**
     * Execute operation by identifier
     * 
     * @param operationIdentifier the identifier of the operation
     * @param parameter the parameter of the operation
     */
    executeOperation<T extends IMBRICATE_OPERATION_SCOPE>(
        operationIdentifier: string,
        parameter: ImbricateOperationParameter<T>,
    ): PromiseOr<void>;
}
