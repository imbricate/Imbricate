/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { IImbricateDocument } from "../document/interface";
import { DocumentProperties } from "../document/property";
import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseAuditOptions, ImbricateDocumentQuery } from "./definition";
import { IMBRICATE_DATABASE_FEATURE } from "./feature";
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
     * Annotations of the database
     */
    readonly annotations: DatabaseAnnotations;

    /**
     * Supported features of the database
     */
    readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

    /**
     * Put and replace the schema of the database
     *  Existing documents will still be kept, and stays unchanged
     * 
     * RequireFeature: DATABASE_PUT_SCHEMA
     * 
     * @param schema schema of the database
     * @param auditOptions audit options of the database 
     * 
     * @returns a promise of the edit records of the database
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true
     */
    putSchema(
        schema: ImbricateDatabaseSchema,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;

    /**
     * Create a new document in the database
     *  If origin supports Document Edit Record, the edit record will be added by default
     * 
     * RequireFeature: DATABASE_CREATE_DOCUMENT
     * 
     * @param properties properties of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the created document
     */
    createDocument(
        properties: DocumentProperties,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<IImbricateDocument>;

    /**
     * Get one document from the database
     * 
     * RequireFeature: DATABASE_GET_DOCUMENT
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
     * RequireFeature: DATABASE_QUERY_DOCUMENT
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the documents in the database
     */
    queryDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<IImbricateDocument[]>;

    /**
     * Count documents in the database
     * 
     * RequireFeature: DATABASE_COUNT_DOCUMENT
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the count of the documents in the database
     */
    countDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<number>;

    /**
     * Remove a document from the database
     * 
     * RequireFeature: DATABASE_DELETE_DOCUMENT
     * 
     * @param uniqueIdentifier unique identifier of the document
     * @param auditOptions audit options of the document
     */
    removeDocument(
        uniqueIdentifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<void>;

    /**
     * Put annotation to the database
     * 
     * RequireFeature: DATABASE_PUT_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param value value of the annotation
     * @param auditOptions audit options of the database
     * 
     * @returns a promise of the edit records of the database
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true in audit options
     */
    putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;

    /**
     * Delete annotation from the database
     * 
     * RequireFeature: DATABASE_DELETE_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param auditOptions audit options of the database
     * 
     * @returns a promise of the edit records of the database
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true in audit options
     */
    deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;

    /**
     * Add edit records to the database
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DATABASE_PUT_EDIT_RECORD
     * 
     * @param records database edit records
     */
    addEditRecords(
        records: DatabaseEditRecord[],
    ): PromiseLike<void>;

    /**
     * Get edit records of the database
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DATABASE_GET_EDIT_RECORD
     * 
     * @returns a promise of the edit records of the database
     */
    getEditRecords(): PromiseLike<DatabaseEditRecord[]>;
}
