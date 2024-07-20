/**
 * @author WMXPY
 * @namespace OperationOperationManager
 * @description Interface
 */

import { ImbricateOriginOperationManagerCapability } from "./definition";

export interface IImbricateOriginOperationManager {

    /**
     * Capabilities of the origin operation manager
     */
    readonly capabilities: ImbricateOriginOperationManagerCapability;
}
