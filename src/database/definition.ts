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
    readonly author: ImbricateAuthor;

    readonly operations: DatabaseEditOperation[];
};
