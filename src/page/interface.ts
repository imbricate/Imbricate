/**
 * @author WMXPY
 * @namespace Origin_Page
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";

export interface IImbricatePage {

    readonly title: string;
    readonly identifier: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readContent(): PromiseOr<string>;
    writeContent(content: string): PromiseOr<void>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
}
