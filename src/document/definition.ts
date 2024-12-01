/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "./property";

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT_PROPERTY = "PUT_PROPERTY",
}

export type DocumentEditOperationValuePutProperty = {

    readonly key: DocumentPropertyKey;
    readonly value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>;
};

export type DocumentEditOperationValue<T extends IMBRICATE_DOCUMENT_EDIT_TYPE> =
    T extends IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_PROPERTY ? DocumentEditOperationValuePutProperty :
    never;

export type DocumentEditOperation<T extends IMBRICATE_DOCUMENT_EDIT_TYPE> = {

    readonly action: T;
    readonly value: DocumentEditOperationValue<T>;
};

export type DocumentEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly operations: Array<DocumentEditOperation<IMBRICATE_DOCUMENT_EDIT_TYPE>>;

    readonly author?: ImbricateAuthor;
};

export type ImbricateDocumentAuditOptions = {

    /**
     * Do not add edit record, this is controlled an function may vary by origin
     */
    readonly noEditRecord?: boolean;
    /**
     * Use this author to add edit record, this is controlled an function may vary by origin
     */
    readonly author?: ImbricateAuthor;
};
