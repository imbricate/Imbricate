/**
 * @author WMXPY
 * @namespace Database
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { ImbricateDatabaseSchema } from "./schema";

export enum IMBRICATE_QUERY_COMPARE_CONDITION {

    EQUAL = "EQUAL",
    EXIST = "EXIST",
}

export enum IMBRICATE_QUERY_ATTRIBUTE {

    VALUE = "VALUE",
}

export enum IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET {

    PROPERTY_TYPE = "PROPERTY_TYPE",
    PROPERTY_VALUE = "PROPERTY_VALUE",
}

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
};

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DATABASE_EDIT_TYPE {

    PUT_SCHEMA = "PUT_SCHEMA",
    PUT_ANNOTATION = "PUT_ANNOTATION",
    DELETE_ANNOTATION = "DELETE_ANNOTATION",
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

// IMBRICATE_DATABASE_EDIT_TYPE SWITCH
export type DatabaseEditOperationValue<T extends IMBRICATE_DATABASE_EDIT_TYPE> =
    T extends IMBRICATE_DATABASE_EDIT_TYPE.PUT_SCHEMA ? ImbricateDatabaseSchema :
    T extends IMBRICATE_DATABASE_EDIT_TYPE.PUT_ANNOTATION ? DatabaseEditOperationPutAnnotation :
    T extends IMBRICATE_DATABASE_EDIT_TYPE.DELETE_ANNOTATION ? DatabaseEditOperationDeleteAnnotation :
    never;

export type DatabaseEditOperation<T extends IMBRICATE_DATABASE_EDIT_TYPE> = {

    readonly action: T;
    readonly value: DatabaseEditOperationValue<T>;
};

export type DatabaseEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly operations: Array<DatabaseEditOperation<IMBRICATE_DATABASE_EDIT_TYPE>>;

    readonly author?: ImbricateAuthor;
};

export type DatabaseAnnotations = Record<DatabaseAnnotationKey, DatabaseAnnotationValue>;

export type DatabaseAnnotationKey = string;
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
