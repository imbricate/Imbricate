/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Interface
 */

export interface IImbricateBinaryStorage {

    uploadBase64(binary: string): Promise<string>;
}
