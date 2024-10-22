/**
 * @author WMXPY
 * @namespace Collection
 * @description Interface
 */

import { ImbricateAuthor } from "../author/definition";
import { IImbricateCollectionOperationManager } from "../collection-operation-manager/interface";
import type { PromiseOr } from "../definition/promise";
import { ImbricatePageVariant } from "../page-variant/definition";
import type { ImbricatePageMetadata, ImbricatePageSearchResult, ImbricatePageSnapshot } from "../page/definition";
import type { IImbricatePage } from "../page/interface";
import type { ImbricatePageQuery, ImbricatePageQueryConfig, ImbricateSearchPageConfig } from "../query/page";
import type { ImbricateCollectionCapability } from "./definition";

export interface IImbricateCollection {

    readonly collectionName: string;
    readonly uniqueIdentifier: string;

    readonly description?: string;

    readonly capabilities: ImbricateCollectionCapability;

    /**
     * Create a page
     * 
     * @param directories Directories
     * @param title Title
     * @param variant Variant
     * @param author Author
     * @param initialContent Initial content
     * @param description Description
     * 
     * @returns Created page
     */
    createPage(
        directories: string[],
        title: string,
        variant: ImbricatePageVariant,
        author: ImbricateAuthor,
        initialContent: string,
        description?: string,
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

    listSupportedVariants(): PromiseOr<ImbricatePageVariant[]>;

    getOperationManager(): IImbricateCollectionOperationManager;
}
