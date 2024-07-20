/**
 * @author WMXPY
 * @namespace Operation
 * @description Interface
 */

import { ImbricateOriginOperationManagerCapability } from "./definition";

export interface IImbricateOriginOperationManager {

    /**
     * Capabilities of the executable manager
     */
    readonly capabilities: ImbricateOriginOperationManagerCapability;
}
