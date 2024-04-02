/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageSnapshot } from "../page/definition";
import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../search/snippet";

export type ImbricatePageSearchSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE>;

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    findScripts(...onActivities: string[]): PromiseOr<void>;

    listPages(): PromiseOr<ImbricatePageSnapshot[]>;
    createPage(title: string, initialContent?: string): PromiseOr<ImbricatePageSnapshot>;
    deletePage(identifier: string, title: string): PromiseOr<void>;
    hasPage(title: string): PromiseOr<boolean>;
    readPage(identifier: string): PromiseOr<string | null>;
    writePage(identifier: string, content: string): PromiseOr<void>;
    searchPages(keyword: string): PromiseOr<ImbricatePageSearchSnippet[]>;
}
