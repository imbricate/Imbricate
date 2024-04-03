/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageSnapshot } from "../page/definition";
import { IImbricatePage } from "../page/interface";
import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE>;

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    listPages(): PromiseOr<ImbricatePageSnapshot[]>;
    createPage(title: string, initialContent?: string): PromiseOr<ImbricatePageSnapshot>;
    deletePage(identifier: string, title: string): PromiseOr<void>;
    hasPage(title: string): PromiseOr<boolean>;
    getPage(identifier: string): PromiseOr<IImbricatePage | null>;
    searchPages(keyword: string): PromiseOr<ImbricatePageSearchSnippet[]>;
}
