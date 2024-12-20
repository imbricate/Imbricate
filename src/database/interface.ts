/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { DocumentProperties } from "../document/property";
import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseAuditOptions, ImbricateDocumentQuery } from "./definition";
import { IMBRICATE_DATABASE_FEATURE } from "./feature";
import { ImbricateDatabaseAddEditRecordsOutcome, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabaseDeleteAnnotationOutcome, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseGetEditRecordsOutcome, ImbricateDatabasePutAnnotationOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseRemoveDocumentOutcome } from "./outcome";
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
     * Version of the database
     */
    readonly databaseVersion: string;

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
     * @returns a promise of the outcome of the put schema
     *  Symbol: S_PutSchema_VersionConflict - if the version conflict
     */
    putSchema(
        schema: ImbricateDatabaseSchema,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutSchemaOutcome>;

    /**
     * Create a new document in the database
     *  If origin supports Document Edit Record, the edit record will be added by default
     * 
     * RequireFeature: DATABASE_CREATE_DOCUMENT
     * 
     * @param properties properties of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the create document
     *  Symbol: S_CreateDocument_IdentifierDuplicated - if the identifier is duplicated
     */
    createDocument(
        properties: DocumentProperties,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseCreateDocumentOutcome>;

    /**
     * Get one document from the database
     * 
     * RequireFeature: DATABASE_GET_DOCUMENT
     * 
     * @param uniqueIdentifier unique identifier of the document
     * 
     * @returns a promise of the outcome of the get document
     *  Symbol: S_GetDocument_NotFound - if the document is not found
     */
    getDocument(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateDatabaseGetDocumentOutcome>;

    /**
     * Query documents from the database
     * 
     * RequireFeature: DATABASE_QUERY_DOCUMENT
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the outcome of the query documents
     *  Symbol: S_QueryDocuments_Stale - if the documents are stale
     */
    queryDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<ImbricateDatabaseQueryDocumentsOutcome>;

    /**
     * Count documents in the database
     * 
     * RequireFeature: DATABASE_COUNT_DOCUMENT
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the outcome of the count documents
     *  Symbol: S_CountDocuments_Stale - if the documents are stale
     */
    countDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<ImbricateDatabaseCountDocumentsOutcome>;

    /**
     * Remove a document from the database
     * 
     * RequireFeature: DATABASE_DELETE_DOCUMENT
     * 
     * @param uniqueIdentifier unique identifier of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the remove document
     *  Symbol: S_RemoveDocument_NotFound - if the document is not found
     */
    removeDocument(
        uniqueIdentifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseRemoveDocumentOutcome>;

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
     * @returns a promise of the outcome of the put annotation
     *  Symbol: S_PutAnnotation_InvalidNamespace - if the namespace is invalid
     *  Symbol: S_PutAnnotation_InvalidIdentifier - if the identifier is invalid
     */
    putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutAnnotationOutcome>;

    /**
     * Delete annotation from the database
     * 
     * RequireFeature: DATABASE_DELETE_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param auditOptions audit options of the database
     * 
     * @returns a promise of the outcome of the delete annotation
     *  Symbol: S_DeleteAnnotation_NotFound - if the annotation is not found
     */
    deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseDeleteAnnotationOutcome>;

    /**
     * Add edit records to the database
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DATABASE_PUT_EDIT_RECORD
     * 
     * @param records database edit records
     * 
     * @returns a promise of the outcome of the add edit records
     *  Symbol: S_AddEditRecords_InvalidEditRecord - if the edit record is invalid
     */
    addEditRecords(
        records: DatabaseEditRecord[],
    ): PromiseLike<ImbricateDatabaseAddEditRecordsOutcome>;

    /**
     * Get edit records of the database
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DATABASE_GET_EDIT_RECORD
     * 
     * @returns a promise of the outcome of the get edit records
     *  Symbol: S_GetEditRecords_NotFound - if the edit records are not found
     */
    getEditRecords(): PromiseLike<ImbricateDatabaseGetEditRecordsOutcome>;
}
