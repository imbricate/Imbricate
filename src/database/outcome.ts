/**
 * @author WMXPY
 * @namespace Database
 * @description Outcome
 */

import { IImbricateDocument } from "../document/interface";
import { DatabaseEditRecord } from "./definition";

// Put Schema
export const S_Database_PutSchema_VersionConflict: unique symbol = Symbol("Database_PutSchema_VersionConflict");
export const S_Database_PutSchema_InvalidSchema: unique symbol = Symbol("Database_PutSchema_InvalidSchema");
export const S_Database_PutSchema_Unknown: unique symbol = Symbol("Database_PutSchema_Unknown");

export type ImbricateDatabasePutSchemaOutcomeSymbol =
    | typeof S_Database_PutSchema_VersionConflict
    | typeof S_Database_PutSchema_InvalidSchema
    | typeof S_Database_PutSchema_Unknown;

export type ImbricateDatabasePutSchemaOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabasePutSchemaOutcomeSymbol;

// Create Document
export const S_Database_CreateDocument_IdentifierDuplicated: unique symbol = Symbol("Database_CreateDocument_IdentifierDuplicated");
export const S_Database_CreateDocument_Unknown: unique symbol = Symbol("Database_CreateDocument_Unknown");

export type ImbricateDatabaseCreateDocumentOutcomeSymbol =
    | typeof S_Database_CreateDocument_IdentifierDuplicated
    | typeof S_Database_CreateDocument_Unknown;

export type ImbricateDatabaseCreateDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateDatabaseCreateDocumentOutcomeSymbol;

// Get Document
export const S_Database_GetDocument_NotFound: unique symbol = Symbol("Database_GetDocument_NotFound");
export const S_Database_GetDocument_Unknown: unique symbol = Symbol("Database_GetDocument_Unknown");

export type ImbricateDatabaseGetDocumentOutcomeSymbol =
    | typeof S_Database_GetDocument_NotFound
    | typeof S_Database_GetDocument_Unknown;

export type ImbricateDatabaseGetDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateDatabaseGetDocumentOutcomeSymbol;

// Query Documents
export const S_Database_QueryDocuments_Stale: unique symbol = Symbol("Database_QueryDocuments_Stale");
export const S_Database_QueryDocuments_Unknown: unique symbol = Symbol("Database_QueryDocuments_Unknown");

export type ImbricateDatabaseQueryDocumentsOutcomeSymbol =
    | typeof S_Database_QueryDocuments_Stale
    | typeof S_Database_QueryDocuments_Unknown;

export type ImbricateDatabaseQueryDocumentsOutcome = {
    readonly documents: IImbricateDocument[];
} | ImbricateDatabaseQueryDocumentsOutcomeSymbol;

export const S_Database_CountDocuments_Stale: unique symbol = Symbol("Database_CountDocuments_Stale");
export const S_Database_CountDocuments_Unknown: unique symbol = Symbol("Database_CountDocuments_Unknown");

export type ImbricateDatabaseCountDocumentsOutcomeSymbol =
    | typeof S_Database_CountDocuments_Stale
    | typeof S_Database_CountDocuments_Unknown;

export type ImbricateDatabaseCountDocumentsOutcome = {

    readonly count: number;
} | ImbricateDatabaseCountDocumentsOutcomeSymbol;

// Remove Document
export const S_Database_RemoveDocument_NotFound: unique symbol = Symbol("Database_RemoveDocument_NotFound");
export const S_Database_RemoveDocument_Unknown: unique symbol = Symbol("Database_RemoveDocument_Unknown");

export type ImbricateDatabaseRemoveDocumentOutcomeSymbol =
    | typeof S_Database_RemoveDocument_NotFound
    | typeof S_Database_RemoveDocument_Unknown;

export type ImbricateDatabaseRemoveDocumentOutcome = {

    readonly success: boolean;
} | ImbricateDatabaseRemoveDocumentOutcomeSymbol;

// Put Annotation
export const S_Database_PutAnnotation_InvalidNamespace: unique symbol = Symbol("Database_PutAnnotation_InvalidNamespace");
export const S_Database_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("Database_PutAnnotation_InvalidIdentifier");
export const S_Database_PutAnnotation_Unknown: unique symbol = Symbol("Database_PutAnnotation_Unknown");

export type ImbricateDatabasePutAnnotationOutcomeSymbol =
    | typeof S_Database_PutAnnotation_InvalidNamespace
    | typeof S_Database_PutAnnotation_InvalidIdentifier
    | typeof S_Database_PutAnnotation_Unknown;

export type ImbricateDatabasePutAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabasePutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_Database_DeleteAnnotation_NotFound: unique symbol = Symbol("Database_DeleteAnnotation_NotFound");
export const S_Database_DeleteAnnotation_Unknown: unique symbol = Symbol("Database_DeleteAnnotation_Unknown");

export type ImbricateDatabaseDeleteAnnotationOutcomeSymbol =
    | typeof S_Database_DeleteAnnotation_NotFound
    | typeof S_Database_DeleteAnnotation_Unknown;

export type ImbricateDatabaseDeleteAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_Database_AddEditRecords_InvalidEditRecord: unique symbol = Symbol("Database_AddEditRecords_InvalidEditRecord");
export const S_Database_AddEditRecords_Unknown: unique symbol = Symbol("Database_AddEditRecords_Unknown");

export type ImbricateDatabaseAddEditRecordsOutcomeSymbol =
    | typeof S_Database_AddEditRecords_InvalidEditRecord
    | typeof S_Database_AddEditRecords_Unknown;

export type ImbricateDatabaseAddEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_Database_GetEditRecords_NotFound: unique symbol = Symbol("Database_GetEditRecords_NotFound");
export const S_Database_GetEditRecords_Unknown: unique symbol = Symbol("Database_GetEditRecords_Unknown");

export type ImbricateDatabaseGetEditRecordsOutcomeSymbol =
    | typeof S_Database_GetEditRecords_NotFound
    | typeof S_Database_GetEditRecords_Unknown;

export type ImbricateDatabaseGetEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseGetEditRecordsOutcomeSymbol;

