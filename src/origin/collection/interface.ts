/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { IMBRICATE_SEARCH_SNIPPET_TYPE, ImbricateSearchSnippet } from "../../search/snippet";

export type ImbricateOriginCollectionListPagesResponse = {

    readonly title: string;
    readonly identifier: string;
};

type PageSnippet = ImbricateSearchSnippet<IMBRICATE_SEARCH_SNIPPET_TYPE.PAGE>;

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    // Collection Scripts
    findScripts(...onActivities: string[]): Promise<void>;

    // Collection Pages
    listPages(): Promise<ImbricateOriginCollectionListPagesResponse[]>;

    createPage(
        title: string,
        initialContent?: string,
    ): Promise<ImbricateOriginCollectionListPagesResponse>;

    deletePage(
        identifier: string,
        title: string,
    ): Promise<void>;

    readPage(
        identifier: string,
    ): Promise<string>;

    writePage(
        identifier: string,
        content: string,
    ): Promise<void>;

    hasPage(
        title: string,
    ): Promise<boolean>;

    searchPages(
        keyword: string,
    ): Promise<PageSnippet>;
}
