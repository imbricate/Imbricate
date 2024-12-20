/**
 * @author WMXPY
 * @namespace Document
 * @description Outcome
 */

import { DocumentEditRecord } from "./definition";

// Put Property
export const S_PutProperty_InvalidKey: unique symbol = Symbol("PutProperty_InvalidKey");

export type ImbricatePutPropertyOutcomeSymbol =
    | typeof S_PutProperty_InvalidKey;

export type ImbricatePutPropertyOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricatePutPropertyOutcomeSymbol;

// Put Annotation
export const S_PutAnnotation_InvalidNamespace: unique symbol = Symbol("PutAnnotation_InvalidNamespace");
export const S_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("PutAnnotation_InvalidIdentifier");

export type ImbricatePutAnnotationOutcomeSymbol =
    | typeof S_PutAnnotation_InvalidNamespace
    | typeof S_PutAnnotation_InvalidIdentifier;

export type ImbricatePutAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricatePutAnnotationOutcomeSymbol;


// Delete Annotation
export const S_DeleteAnnotation_NotFound: unique symbol = Symbol("DeleteAnnotation_NotFound");

export type ImbricateDeleteAnnotationOutcomeSymbol =
    | typeof S_DeleteAnnotation_NotFound;

export type ImbricateDeleteAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_AddEditRecords_InvalidRecord: unique symbol = Symbol("AddEditRecords_InvalidRecord");

export type ImbricateAddEditRecordsOutcomeSymbol =
    | typeof S_AddEditRecords_InvalidRecord;

export type ImbricateAddEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_GetEditRecords_NotFound: unique symbol = Symbol("GetEditRecords_NotFound");

export type ImbricateGetEditRecordsOutcomeSymbol =
    | typeof S_GetEditRecords_NotFound;

export type ImbricateGetEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | ImbricateGetEditRecordsOutcomeSymbol;
