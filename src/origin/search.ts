/**
 * @author WMXPY
 * @namespace Origin
 * @description Search
 */

export enum IMBRICATE_SEARCH_TARGET_TYPE {

    DATABASE = "DATABASE",
    DOCUMENT = "DOCUMENT",
    MARKDOWN = "MARKDOWN",
}

export type ImbricateSearchTargetSwitch<T extends IMBRICATE_SEARCH_TARGET_TYPE> =
    T extends IMBRICATE_SEARCH_TARGET_TYPE.DATABASE ? {
        readonly originUniqueIdentifier: string;
        readonly databaseUniqueIdentifier: string;
    } :
    T extends IMBRICATE_SEARCH_TARGET_TYPE.DOCUMENT ? {
        readonly originUniqueIdentifier: string;
        readonly databaseUniqueIdentifier: string;
        readonly documentUniqueIdentifier: string;
    } :
    T extends IMBRICATE_SEARCH_TARGET_TYPE.MARKDOWN ? {
        readonly originUniqueIdentifier: string;
        readonly databaseUniqueIdentifier: string;
        readonly documentUniqueIdentifier: string;
        readonly propertyUniqueIdentifier: string;
        readonly lineNumber: number;
    } :
    never;

export type ImbricateSearchTarget<T extends IMBRICATE_SEARCH_TARGET_TYPE> = {

    readonly type: T;
    readonly target: ImbricateSearchTargetSwitch<T>;
};

export type ImbricateSearchItem = {

    readonly target: ImbricateSearchTarget<IMBRICATE_SEARCH_TARGET_TYPE>;

    readonly primary: string;

    /**
     * @description Source are optional, use for source context
     */
    readonly sourceDatabaseName?: string;
    readonly sourceDocumentPrimaryKey?: string;

    /**
     * @description Previous are optional, use for previous context on the secondary object
     */
    readonly secondaryPrevious?: string[];
    readonly secondary: string;
    /**
     * @description Next are optional, use for next context on the secondary object
     */
    readonly secondaryNext?: string[];
};

export type ImbricateSearchResult = {

    readonly items: ImbricateSearchItem[];
};
