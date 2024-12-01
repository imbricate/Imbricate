/**
 * @author WMXPY
 * @namespace Database
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";
import { ImbricateDatabaseSchema } from "./schema";

/**
 * Query of the document
 * 
 * @param limit limit of the query
 * @param skip skip of the query
 */
export type ImbricateDocumentQuery = {

    readonly limit?: number;
    readonly skip?: number;
};

/**
 * Edit record type of the document
 */
export enum IMBRICATE_DATABASE_EDIT_TYPE {

    PUT_SCHEMA = "PUT_SCHEMA",
}

export type DatabaseEditOperation = {

    readonly action: IMBRICATE_DATABASE_EDIT_TYPE;
    readonly value: ImbricateDatabaseSchema;
};

export type DatabaseEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;

    readonly operations: DatabaseEditOperation[];

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
