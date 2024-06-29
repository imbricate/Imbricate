/**
 * @author WMXPY
 * @namespace Collection
 * @description Interface
 */

import type { PromiseOr } from "../definition/promise";
import type { IMBRICATE_PAGE_VARIANT, ImbricatePageMetadata, ImbricatePageSearchResult, ImbricatePageSnapshot } from "../page/definition";
import type { IImbricatePage } from "../page/interface";
import type { ImbricatePageQuery, ImbricatePageQueryConfig, ImbricateSearchPageConfig } from "../query/page";
import type { ImbricateCollectionCapability } from "./definition";

export interface IImbricateCollection {

    readonly collectionName: string;
    readonly uniqueIdentifier: string;

    readonly description?: string;

    readonly capabilities: ImbricateCollectionCapability;

    createPage(
        directories: string[],
        title: string,
        variant: IMBRICATE_PAGE_VARIANT,
        initialContent: string,
    ): PromiseOr<IImbricatePage>;
    putPage(pageMetadata: ImbricatePageMetadata, content: string): PromiseOr<IImbricatePage>;
    retitlePage(identifier: string, newTitle: string): PromiseOr<void>;
    deletePage(identifier: string): PromiseOr<void>;
    hasPage(directories: string[], title: string): PromiseOr<boolean>;
    getPage(identifier: string): PromiseOr<IImbricatePage | null>;

    listPages(directories: string[], recursive: boolean): PromiseOr<ImbricatePageSnapshot[]>;
    listDirectories(directories: string[]): PromiseOr<string[]>;

    searchPages(keyword: string, config: ImbricateSearchPageConfig): PromiseOr<ImbricatePageSearchResult[]>;
    queryPages(query: ImbricatePageQuery, config: ImbricatePageQueryConfig): PromiseOr<IImbricatePage[]>;
}
