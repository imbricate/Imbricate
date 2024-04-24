/**
 * @author WMXPY
 * @namespace Page
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageAttributes, ImbricatePageHistory } from "./definition";

export interface IImbricatePage {

    readonly title: string;
    readonly identifier: string;

    readonly digest: string;
    readonly histories: ImbricatePageHistory[];

    readonly description?: string;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readContent(): PromiseOr<string>;
    writeContent(content: string): PromiseOr<void>;

    readAttributes(): PromiseOr<ImbricatePageAttributes>;
    writeAttribute(key: string, value: string): PromiseOr<void>;

    refreshUpdatedAt(updatedAt: Date): PromiseOr<void>;
}
