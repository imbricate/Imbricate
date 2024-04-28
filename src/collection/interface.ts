/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageMetadata, ImbricatePageSearchResult, ImbricatePageSnapshot } from "../page/definition";
import { IImbricatePage } from "../page/interface";
import { ImbricatePageQuery, ImbricatePageQueryConfig, ImbricateSearchPageConfig } from "../query/page";

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    createPage(paths: string[], title: string, initialContent?: string): PromiseOr<IImbricatePage>;
    putPage(pageMetadata: ImbricatePageMetadata, content: string): PromiseOr<IImbricatePage>;
    retitlePage(identifier: string, newTitle: string): PromiseOr<void>;
    deletePage(identifier: string): PromiseOr<void>;
    hasPage(paths: string[], title: string): PromiseOr<boolean>;
    getPage(identifier: string): PromiseOr<IImbricatePage | null>;
    listPages(paths: string[], limit: number): PromiseOr<ImbricatePageSnapshot[]>;

    searchPages(keyword: string, config: ImbricateSearchPageConfig): PromiseOr<ImbricatePageSearchResult[]>;
    queryPages(query: ImbricatePageQuery, config: ImbricatePageQueryConfig): PromiseOr<IImbricatePage[]>;
}
