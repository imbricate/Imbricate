/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_DOCUMENT_EDIT_TYPE, IMBRICATE_PROPERTY_TYPE } from "./property";

export type DocumentEditOperation = {

    readonly key: DocumentPropertyKey;
    readonly action: IMBRICATE_DOCUMENT_EDIT_TYPE;
    readonly value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>;
};

export type DocumentEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly operations: DocumentEditOperation[];

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
