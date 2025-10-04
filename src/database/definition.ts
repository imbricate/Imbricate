/**
 * @namespace Database
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { IMBRICATE_QUERY_ATTRIBUTE, IMBRICATE_QUERY_COMPARE_CONDITION, IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET } from "../common/definition";
import { ImbricateDatabaseSchema } from "./schema";

export type ImbricateDocumentQueryPropertyFilter = {

    readonly propertyIdentifier: string;

    readonly target: IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET;
    readonly attribute: IMBRICATE_QUERY_ATTRIBUTE;
    readonly condition: IMBRICATE_QUERY_COMPARE_CONDITION;
    readonly value: any;
};

export type ImbricateDocumentQueryAnnotationFilter = {

    readonly namespace: string;
    readonly identifier: string;

    readonly attribute: IMBRICATE_QUERY_ATTRIBUTE;
    readonly condition: IMBRICATE_QUERY_COMPARE_CONDITION;
    readonly value: any;
};

export enum IMBRICATE_QUERY_SORT_DIRECTION {

    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING",
}

export enum IMBRICATE_QUERY_SORT_TYPE {

    PROPERTY = "PROPERTY",
}

export type ImbricateDocumentQuerySortProperty = {

    readonly type: IMBRICATE_QUERY_SORT_TYPE.PROPERTY;

    readonly propertyIdentifier: string;
    readonly direction: IMBRICATE_QUERY_SORT_DIRECTION;
};

export type ImbricateDocumentQuerySort = ImbricateDocumentQuerySortProperty;

/**
 * Query of the document
 * 
 * @param limit limit of the query
 * @param skip skip of the query
 */
export type ImbricateDocumentQuery = {

    readonly limit?: number;
    readonly skip?: number;

    readonly propertyFilters?: ImbricateDocumentQueryPropertyFilter[];
    readonly annotationFilters?: ImbricateDocumentQueryAnnotationFilter[];

    readonly sorts?: ImbricateDocumentQuerySort[];
};

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DATABASE_EDIT_TYPE {

    PUT_SCHEMA = "PUT_SCHEMA",
    PUT_ANNOTATION = "PUT_ANNOTATION",
    DELETE_ANNOTATION = "DELETE_ANNOTATION",

    RESOLVE_CONFLICT = "RESOLVE_CONFLICT",
}

export type DatabaseEditOperationPutAnnotation = {

    readonly annotationNamespace: string;
    readonly annotationIdentifier: string;

    readonly data: any;
};

export type DatabaseEditOperationDeleteAnnotation = {

    readonly annotationNamespace: string;
    readonly annotationIdentifier: string;
};

export type DatabaseEditOperationResolveConflict = {

    readonly conflictedEditRecords: string[];
};

// IMBRICATE_DATABASE_EDIT_TYPE SWITCH
export type DatabaseEditOperationValue<T extends IMBRICATE_DATABASE_EDIT_TYPE> =
    T extends IMBRICATE_DATABASE_EDIT_TYPE.PUT_SCHEMA ? ImbricateDatabaseSchema :
    T extends IMBRICATE_DATABASE_EDIT_TYPE.PUT_ANNOTATION ? DatabaseEditOperationPutAnnotation :
    T extends IMBRICATE_DATABASE_EDIT_TYPE.DELETE_ANNOTATION ? DatabaseEditOperationDeleteAnnotation :
    T extends IMBRICATE_DATABASE_EDIT_TYPE.RESOLVE_CONFLICT ? DatabaseEditOperationResolveConflict :
    never;

/**
 * Edit operation of the database
 */
export type DatabaseEditOperation<T extends IMBRICATE_DATABASE_EDIT_TYPE> = {

    readonly action: T;
    readonly value: DatabaseEditOperationValue<T>;
};

/**
 * Edit record of the database
 */
export type DatabaseEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly beforeVersion: string;
    readonly afterVersion: string;

    readonly operations: Array<DatabaseEditOperation<IMBRICATE_DATABASE_EDIT_TYPE>>;

    readonly author?: ImbricateAuthor;
};

/**
 * Annotations of the database
 */
export type DatabaseAnnotations = Record<DatabaseAnnotationKey, DatabaseAnnotationValue>;

/**
 * Annotation key of the database
 */
export type DatabaseAnnotationKey = string;

/**
 * Annotation value of the database
 */
export type DatabaseAnnotationValue = {

    readonly namespace: string;
    readonly identifier: string;

    readonly data: any;
};

export type ImbricateDatabaseAuditOptions = {

    /**
     * Do not add edit record, this is controlled an function may vary by origin
     */
    readonly noEditRecord?: boolean;
    /**
     * Use this author to add edit record, this is controlled an function may vary by origin
     */
    readonly author?: ImbricateAuthor;
};
