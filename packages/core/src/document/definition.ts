/**
 * @namespace Document
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { ImbricatePropertyKey, ImbricatePropertyVariant } from "../property/definition";
import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObject } from "../property/type";

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DOCUMENT_EDIT_TYPE {

    PUT_PROPERTY = "PUT_PROPERTY",
    PUT_ANNOTATION = "PUT_ANNOTATION",
    DELETE_ANNOTATION = "DELETE_ANNOTATION",

    RESOLVE_CONFLICT = "RESOLVE_CONFLICT",
}

export type DocumentEditOperationValuePutProperty<T extends IMBRICATE_PROPERTY_TYPE> = {

    readonly key: ImbricatePropertyKey;
    readonly type: T;
    readonly value: ImbricatePropertyValueObject<T>;
    readonly variant: ImbricatePropertyVariant;
};

export type DocumentEditOperationPutAnnotation = {

    readonly annotationNamespace: string;
    readonly annotationIdentifier: string;

    readonly data: any;
};

export type DocumentEditOperationDeleteAnnotation = {

    readonly annotationNamespace: string;
    readonly annotationIdentifier: string;
};

export type DocumentEditOperationResolveConflict = {

    readonly conflictedEditRecords: string[];
};

// IMBRICATE_DOCUMENT_EDIT_TYPE SWITCH
export type DocumentEditOperationValue<T extends IMBRICATE_DOCUMENT_EDIT_TYPE> =
    T extends IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_PROPERTY ? DocumentEditOperationValuePutProperty<IMBRICATE_PROPERTY_TYPE> :
    T extends IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_ANNOTATION ? DocumentEditOperationPutAnnotation :
    T extends IMBRICATE_DOCUMENT_EDIT_TYPE.DELETE_ANNOTATION ? DocumentEditOperationDeleteAnnotation :
    T extends IMBRICATE_DOCUMENT_EDIT_TYPE.RESOLVE_CONFLICT ? DocumentEditOperationResolveConflict :
    never;

export type DocumentEditOperation<T extends IMBRICATE_DOCUMENT_EDIT_TYPE> = {

    readonly action: T;
    readonly value: DocumentEditOperationValue<T>;
};

export type DocumentEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly beforeVersion: string;
    readonly afterVersion: string;

    readonly operations: Array<DocumentEditOperation<IMBRICATE_DOCUMENT_EDIT_TYPE>>;

    readonly author?: ImbricateAuthor;
};

export type DocumentAnnotations = Record<DocumentAnnotationKey, DocumentAnnotationValue>;

export type DocumentAnnotationKey = string;
export type DocumentAnnotationValue = {

    readonly namespace: string;
    readonly identifier: string;

    readonly data: any;
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
