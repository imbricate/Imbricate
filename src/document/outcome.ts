/**
 * @author WMXPY
 * @namespace Document
 * @description Outcome
 */

import { DocumentEditRecord } from "./definition";

// Put Property
export const S_Document_PutProperty_InvalidKey: unique symbol = Symbol("Document_PutProperty_InvalidKey");

export type ImbricateDocumentPutPropertyOutcomeSymbol =
    | typeof S_Document_PutProperty_InvalidKey;

export type ImbricateDocumentPutPropertyOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDocumentPutPropertyOutcomeSymbol;

// Put Annotation
export const S_Document_PutAnnotation_InvalidNamespace: unique symbol = Symbol("Document_PutAnnotation_InvalidNamespace");
export const S_Document_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("Document_PutAnnotation_InvalidIdentifier");

export type ImbricateDocumentPutAnnotationOutcomeSymbol =
    | typeof S_Document_PutAnnotation_InvalidNamespace
    | typeof S_Document_PutAnnotation_InvalidIdentifier;

export type ImbricateDocumentPutAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDocumentPutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_Document_DeleteAnnotation_NotFound: unique symbol = Symbol("Document_DeleteAnnotation_NotFound");

export type ImbricateDocumentDeleteAnnotationOutcomeSymbol =
    | typeof S_Document_DeleteAnnotation_NotFound;

export type ImbricateDocumentDeleteAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDocumentDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_Document_AddEditRecords_InvalidRecord: unique symbol = Symbol("Document_AddEditRecords_InvalidRecord");

export type ImbricateDocumentAddEditRecordsOutcomeSymbol =
    | typeof S_Document_AddEditRecords_InvalidRecord;

export type ImbricateDocumentAddEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDocumentAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_Document_GetEditRecords_NotFound: unique symbol = Symbol("Document_GetEditRecords_NotFound");

export type ImbricateDocumentGetEditRecordsOutcomeSymbol =
    | typeof S_Document_GetEditRecords_NotFound;

export type ImbricateDocumentGetEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDocumentGetEditRecordsOutcomeSymbol;

