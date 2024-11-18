/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { IImbricateDocument } from "../document/interface";
import { DocumentProperties } from "../document/property";
import { DatabaseEditRecord, ImbricateDocumentQuery } from "./definition";
import { ImbricateDatabaseSchema } from "./schema";

export interface IImbricateDatabase {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    /**
     * Name of the database
     */
    readonly databaseName: string;

    /**
     * Schema of the database
     */
    readonly schema: ImbricateDatabaseSchema;

    /**
     * Put and replace the schema of the database
     *  Existing documents will still be kept, and stays unchanged
     * 
     * @param schema schema of the database
     * @param noEditRecord do not add edit record, optional
     * 
     * @returns a promise of the updated schema
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true
     */
    putSchema(
        schema: ImbricateDatabaseSchema,
        noEditRecord?: boolean,
    ): PromiseLike<void>;

    /**
     * Create a new document in the database
     *  If origin supports Document Edit Record, the edit record will be added by default
     * 
     * @param properties properties of the document
     * @param uniqueIdentifier unique identifier of the document, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the created document
     */
    createDocument(
        properties: DocumentProperties,
        uniqueIdentifier?: string,
    ): PromiseLike<IImbricateDocument>;

    /**
     * Get one document from the database
     * 
     * @param uniqueIdentifier unique identifier of the document
     * 
     * @returns a promise of the documents in the database, null if not found
     */
    getDocument(
        uniqueIdentifier: string,
    ): PromiseLike<IImbricateDocument | null>;

    /**
     * Query documents from the database
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the documents in the database
     */
    queryDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<IImbricateDocument[]>;

    /**
     * Add edit records to the database, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * @param records database edit records
     */
    addEditRecords?(
        records: DatabaseEditRecord[],
    ): PromiseLike<void>;

    /**
     * Get edit records of the database, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * @returns a promise of the edit records of the database
     */
    getEditRecords?(): PromiseLike<DatabaseEditRecord[]>;
}
