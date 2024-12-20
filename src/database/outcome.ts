/**
 * @author WMXPY
 * @namespace Database
 * @description Outcome
 */

import { IImbricateDocument } from "../document/interface";
import { DatabaseEditRecord } from "./definition";

// Put Schema
export const S_Database_PutSchema_VersionConflict: unique symbol = Symbol("Database_PutSchema_VersionConflict");

export type ImbricateDatabasePutSchemaOutcomeSymbol =
    | typeof S_Database_PutSchema_VersionConflict;

export type ImbricateDatabasePutSchemaOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabasePutSchemaOutcomeSymbol;

// Create Document
export const S_Database_CreateDocument_IdentifierDuplicated: unique symbol = Symbol("Database_CreateDocument_IdentifierDuplicated");

export type ImbricateDatabaseCreateDocumentOutcomeSymbol =
    | typeof S_Database_CreateDocument_IdentifierDuplicated;

export type ImbricateDatabaseCreateDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateDatabaseCreateDocumentOutcomeSymbol;

// Get Document
export const S_Database_GetDocument_NotFound: unique symbol = Symbol("Database_GetDocument_NotFound");

export type ImbricateDatabaseGetDocumentOutcomeSymbol =
    | typeof S_Database_GetDocument_NotFound;

export type ImbricateDatabaseGetDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateDatabaseGetDocumentOutcomeSymbol;

// Query Documents
export const S_Database_QueryDocuments_Stale: unique symbol = Symbol("Database_QueryDocuments_Stale");

export type ImbricateDatabaseQueryDocumentsOutcomeSymbol =
    | typeof S_Database_QueryDocuments_Stale;

export type ImbricateDatabaseQueryDocumentsOutcome = {
    readonly documents: IImbricateDocument[];
} | ImbricateDatabaseQueryDocumentsOutcomeSymbol;

export const S_Database_CountDocuments_Stale: unique symbol = Symbol("Database_CountDocuments_Stale");

export type ImbricateDatabaseCountDocumentsOutcomeSymbol =
    | typeof S_Database_CountDocuments_Stale;

export type ImbricateDatabaseCountDocumentsOutcome = {

    readonly count: number;
} | ImbricateDatabaseCountDocumentsOutcomeSymbol;

// Remove Document
export const S_Database_RemoveDocument_NotFound: unique symbol = Symbol("Database_RemoveDocument_NotFound");

export type ImbricateDatabaseRemoveDocumentOutcomeSymbol =
    | typeof S_Database_RemoveDocument_NotFound;

export type ImbricateDatabaseRemoveDocumentOutcome = {

    readonly success: boolean;
} | ImbricateDatabaseRemoveDocumentOutcomeSymbol;

// Put Annotation
export const S_Database_PutAnnotation_InvalidNamespace: unique symbol = Symbol("Database_PutAnnotation_InvalidNamespace");
export const S_Database_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("Database_PutAnnotation_InvalidIdentifier");

export type ImbricateDatabasePutAnnotationOutcomeSymbol =
    | typeof S_Database_PutAnnotation_InvalidNamespace
    | typeof S_Database_PutAnnotation_InvalidIdentifier;

export type ImbricateDatabasePutAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabasePutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_Database_DeleteAnnotation_NotFound: unique symbol = Symbol("Database_DeleteAnnotation_NotFound");

export type ImbricateDatabaseDeleteAnnotationOutcomeSymbol =
    | typeof S_Database_DeleteAnnotation_NotFound;

export type ImbricateDatabaseDeleteAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_Database_AddEditRecords_InvalidEditRecord: unique symbol = Symbol("Database_AddEditRecords_InvalidEditRecord");

export type ImbricateDatabaseAddEditRecordsOutcomeSymbol =
    | typeof S_Database_AddEditRecords_InvalidEditRecord;

export type ImbricateDatabaseAddEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_Database_GetEditRecords_NotFound: unique symbol = Symbol("Database_GetEditRecords_NotFound");

export type ImbricateDatabaseGetEditRecordsOutcomeSymbol =
    | typeof S_Database_GetEditRecords_NotFound;

export type ImbricateDatabaseGetEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDatabaseGetEditRecordsOutcomeSymbol;

