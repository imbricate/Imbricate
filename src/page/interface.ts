/**
 * @author WMXPY
 * @namespace Page
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageAttributes } from "./definition";

export interface IImbricatePage {

    readonly title: string;
    readonly identifier: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readContent(): PromiseOr<string>;
    writeContent(content: string): PromiseOr<void>;

    readAttributes(): PromiseOr<ImbricatePageAttributes>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
}
