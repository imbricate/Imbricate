/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageSnapshot } from "../page/definition";
import { IImbricatePage, ImbricatePageMetadata } from "../page/interface";
import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE>;

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
