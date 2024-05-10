/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";

export interface IImbricateBinaryStorage {

    putBinaryBase64(binary: string, fileName: string): PromiseOr<string>;
}
