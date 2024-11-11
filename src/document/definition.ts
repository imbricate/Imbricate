/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";

export enum IMBRICATE_PROPERTY_TYPE {

    STRING = "STRING",
    MARKDOWN = "MARKDOWN",
}

export type DocumentProperties = Record<DocumentPropertyKey, DocumentPropertyValue>;

export type DocumentPropertyKey = string;
export type DocumentPropertyValue = {

    readonly type: IMBRICATE_PROPERTY_TYPE;
    readonly value: any;
};

export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT = "PUT",
}

export type DocumentEditOperation = {

    readonly key: DocumentPropertyKey;
    readonly action: IMBRICATE_DOCUMENT_EDIT_TYPE;
    readonly value: DocumentPropertyValue;
};

export type DocumentEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;
    readonly author: ImbricateAuthor;

    readonly operations: DocumentEditOperation[];
};
