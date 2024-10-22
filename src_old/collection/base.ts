/**
 * @author WMXPY
 * @namespace Collection
 * @description Base
 */

import { ImbricateAuthor } from "../author/definition";
import { ImbricateCapabilityBuilder } from "../capability/builder";
import { ImbricateCapability, createAllowImbricateCapability, createDenyImbricateCapability } from "../capability/definition";
import { IImbricateCollectionOperationManager } from "../collection-operation-manager/interface";
import type { PromiseOr } from "../definition/promise";
import { ImbricateNotImplemented } from "../error/not-implemented";
import { ImbricatePageVariant } from "../page-variant/definition";
import type { ImbricatePageMetadata, ImbricatePageSearchResult, ImbricatePageSnapshot } from "../page/definition";
import type { IImbricatePage } from "../page/interface";
import type { ImbricatePageQuery, ImbricatePageQueryConfig, ImbricateSearchPageConfig } from "../query/page";
import { IMBRICATE_COLLECTION_CAPABILITY_KEY, ImbricateCollectionCapability, ImbricateCollectionCapabilityList } from "./definition";
import type { IImbricateCollection } from "./interface";

export abstract class ImbricateCollectionBase implements IImbricateCollection {

    public static buildCapability(
        initial: ImbricateCapability = createDenyImbricateCapability(),
    ): ImbricateCapabilityBuilder<IMBRICATE_COLLECTION_CAPABILITY_KEY> {

        return ImbricateCapabilityBuilder.create<IMBRICATE_COLLECTION_CAPABILITY_KEY>(
            ImbricateCollectionCapabilityList,
            initial,
        );
    }

    public static allAllowCapability(): ImbricateCollectionCapability {

        return this.buildCapability(
            createAllowImbricateCapability(),
        ).build();
    }

    public static allDenyCapability(): ImbricateCollectionCapability {

        return this.buildCapability(
            createDenyImbricateCapability(),
        ).build();
    }

    public abstract readonly collectionName: string;
    public abstract readonly uniqueIdentifier: string;

    public abstract readonly capabilities: ImbricateCollectionCapability;

    public createPage(
        _directories: string[],
        _title: string,
        _variant: ImbricatePageVariant,
        _author: ImbricateAuthor,
        _initialContent: string,
        _description?: string,
    ): PromiseOr<IImbricatePage> {

        throw ImbricateNotImplemented.create(
            "CreatePage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.CREATE_PAGE,
        );
    }

    public putPage(
        _pageMetadata: ImbricatePageMetadata,
        _content: string,
    ): PromiseOr<IImbricatePage> {

        throw ImbricateNotImplemented.create(
            "PutPage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.PUT_PAGE,
        );
    }

    public retitlePage(
        _identifier: string,
        _newTitle: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "RetitlePage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.RETITLE_PAGE,
        );
    }

    public deletePage(
        _identifier: string,
    ): PromiseOr<void> {

        throw ImbricateNotImplemented.create(
            "DeletePage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.DELETE_PAGE,
        );
    }

    public hasPage(
        _directories: string[],
        _title: string,
    ): PromiseOr<boolean> {

        throw ImbricateNotImplemented.create(
            "HasPage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.GET_PAGE,
        );
    }

    public getPage(
        _identifier: string,
    ): PromiseOr<IImbricatePage | null> {

        throw ImbricateNotImplemented.create(
            "GetPage",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.GET_PAGE,
        );
    }

    public listPages(
        _directories: string[],
        _recursive: boolean,
    ): PromiseOr<ImbricatePageSnapshot[]> {

        throw ImbricateNotImplemented.create(
            "ListPages",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_PAGES,
        );
    }

    public listDirectories(
        _directories: string[],
    ): PromiseOr<string[]> {

        throw ImbricateNotImplemented.create(
            "ListDirectories",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_PAGES,
        );
    }

    public searchPages(
        _keyword: string,
        _config: ImbricateSearchPageConfig,
    ): PromiseOr<ImbricatePageSearchResult[]> {

        throw ImbricateNotImplemented.create(
            "SearchPages",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_PAGES,
        );
    }

    public queryPages(
        _query: ImbricatePageQuery,
        _config: ImbricatePageQueryConfig,
    ): PromiseOr<IImbricatePage[]> {

        throw ImbricateNotImplemented.create(
            "QueryPages",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_PAGES,
        );
    }

    public listSupportedVariants(): Promise<ImbricatePageVariant[]> {

        throw ImbricateNotImplemented.create(
            "ListSupportedVariants",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.LIST_SUPPORTED_VARIANTS,
        );
    }

    public getOperationManager(): IImbricateCollectionOperationManager {

        throw ImbricateNotImplemented.create(
            "GetOperationManager",
            IMBRICATE_COLLECTION_CAPABILITY_KEY.COLLECTION_OPERATION_MANAGER,
        );
    }
}
