/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageSearchSnippet, ImbricatePageSnapshot } from "../page/definition";
import { IImbricatePage, ImbricatePageMetadata } from "../page/interface";

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    createPage(title: string, initialContent?: string): PromiseOr<IImbricatePage>;
    putPage(pageMetadata: ImbricatePageMetadata, content: string): PromiseOr<IImbricatePage>;
    retitlePage(identifier: string, newTitle: string): PromiseOr<void>;
    deletePage(identifier: string, title: string): PromiseOr<void>;
    hasPage(title: string): PromiseOr<boolean>;
    getPage(identifier: string): PromiseOr<IImbricatePage | null>;
    listPages(): PromiseOr<ImbricatePageSnapshot[]>;
    searchPages(keyword: string): PromiseOr<ImbricatePageSearchSnippet[]>;
}
