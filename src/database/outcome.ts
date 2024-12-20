/**
 * @author WMXPY
 * @namespace Database
 * @description Outcome
 */

import { IImbricateDocument } from "../document/interface";
import { DatabaseEditRecord } from "./definition";

// Put Schema
export const S_PutSchema_VersionConflict: unique symbol = Symbol("PutSchema_VersionConflict");

export type ImbricatePutSchemaDatabaseOutcomeSymbol =
    | typeof S_PutSchema_VersionConflict;

export type ImbricatePutSchemaOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricatePutSchemaDatabaseOutcomeSymbol;

// Create Document
export const S_CreateDocument_IdentifierDuplicated: unique symbol = Symbol("CreateDocument_IdentifierDuplicated");

export type ImbricateCreateDocumentOutcomeSymbol =
    | typeof S_CreateDocument_IdentifierDuplicated;

export type ImbricateCreateDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateCreateDocumentOutcomeSymbol;

// Get Document
export const S_GetDocument_NotFound: unique symbol = Symbol("GetDocument_NotFound");

export type ImbricateGetDocumentOutcomeSymbol =
    | typeof S_GetDocument_NotFound;

export type ImbricateGetDocumentOutcome = {

    readonly document: IImbricateDocument;
} | ImbricateGetDocumentOutcomeSymbol;

// Query Documents
export const S_QueryDocuments_Stale: unique symbol = Symbol("QueryDocuments_Stale");

export type ImbricateQueryDocumentsOutcomeSymbol =
    | typeof S_QueryDocuments_Stale;

export type ImbricateQueryDocumentsOutcome = {
    readonly documents: IImbricateDocument[];
} | ImbricateQueryDocumentsOutcomeSymbol;

export const S_CountDocuments_Stale: unique symbol = Symbol("CountDocuments_Stale");

export type ImbricateCountDocumentsOutcomeSymbol =
    | typeof S_CountDocuments_Stale;

export type ImbricateCountDocumentsOutcome = {

    readonly count: number;
} | ImbricateCountDocumentsOutcomeSymbol;

// Remove Document
export const S_RemoveDocument_NotFound: unique symbol = Symbol("RemoveDocument_NotFound");

export type ImbricateRemoveDocumentOutcomeSymbol =
    | typeof S_RemoveDocument_NotFound;

export type ImbricateRemoveDocumentOutcome = {

    readonly success: boolean;
} | ImbricateRemoveDocumentOutcomeSymbol;

// Put Annotation
export const S_PutAnnotation_InvalidNamespace: unique symbol = Symbol("PutAnnotation_InvalidNamespace");
export const S_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("PutAnnotation_InvalidIdentifier");

export type ImbricatePutAnnotationOutcomeSymbol =
    | typeof S_PutAnnotation_InvalidNamespace
    | typeof S_PutAnnotation_InvalidIdentifier;

export type ImbricatePutAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricatePutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_DeleteAnnotation_NotFound: unique symbol = Symbol("DeleteAnnotation_NotFound");

export type ImbricateDeleteAnnotationOutcomeSymbol =
    | typeof S_DeleteAnnotation_NotFound;

export type ImbricateDeleteAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_AddEditRecords_InvalidEditRecord: unique symbol = Symbol("AddEditRecords_InvalidEditRecord");

export type ImbricateAddEditRecordsOutcomeSymbol =
    | typeof S_AddEditRecords_InvalidEditRecord;

export type ImbricateAddEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_GetEditRecords_NotFound: unique symbol = Symbol("GetEditRecords_NotFound");

export type ImbricateGetEditRecordsOutcomeSymbol =
    | typeof S_GetEditRecords_NotFound;

export type ImbricateGetEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | ImbricateGetEditRecordsOutcomeSymbol;
