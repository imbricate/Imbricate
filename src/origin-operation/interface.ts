/**
 * @author WMXPY
 * @namespace OriginOperation
 * @description Interface
 */

import { ImbricateOriginOperationManagerCapability } from "./definition";

export interface IImbricateOriginOperationManager {

    /**
     * Capabilities of the executable manager
     */
    readonly capabilities: ImbricateOriginOperationManagerCapability;
}
