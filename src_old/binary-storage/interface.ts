/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricateBinaryStorageCapability } from "./definition";

export interface IImbricateBinaryStorage {
    /**
     * Capabilities of the binary storage
     */
    readonly capabilities: ImbricateBinaryStorageCapability;

    /**
     * Store a binary file
     * 
     * @param binary Base64 encoded binary
     * @param fileName File name
     */
    putBinaryBase64(binary: string, fileName: string): PromiseOr<string>;

    /**
     * Validate if the binary is a valid base64 to be stored
     * 
     * @param binary Base64 encoded binary
     */
    validateBinaryBase64(binary: string): PromiseOr<boolean>;
}
