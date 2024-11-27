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
        databaseUniqueIdentifier: string;
    } :
    T extends IMBRICATE_SEARCH_TARGET_TYPE.DOCUMENT ? {
        databaseUniqueIdentifier: string;
        documentUniqueIdentifier: string;
    } :
    T extends IMBRICATE_SEARCH_TARGET_TYPE.MARKDOWN ? {
        databaseUniqueIdentifier: string;
        documentUniqueIdentifier: string;
        propertyUniqueIdentifier: string;
        lineNumber: number;
    } :
    never;

export type ImbricateSearchTarget<T extends IMBRICATE_SEARCH_TARGET_TYPE> = {

    readonly type: T;
    readonly target: ImbricateSearchTargetSwitch<T>;
};

export type ImbricateSearchItem = {

    readonly target: ImbricateSearchTarget<IMBRICATE_SEARCH_TARGET_TYPE>;

    readonly primary: string;
    readonly secondary: string;
};

export type ImbricateSearchResult = {

    readonly items: ImbricateSearchItem[];
};
