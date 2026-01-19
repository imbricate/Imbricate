/**
 * @namespace Database
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { IImbricateDocument } from "../document/interface";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";
import { DatabaseEditRecord } from "./definition";

// Put Schema
export const S_Database_PutSchema_VersionConflict: unique symbol = Symbol("Database_PutSchema_VersionConflict");
export const S_Database_PutSchema_InvalidSchema: unique symbol = Symbol("Database_PutSchema_InvalidSchema");
export const S_Database_PutSchema_Unknown: unique symbol = Symbol("Database_PutSchema_Unknown");

export type ImbricateDatabasePutSchemaOutcomeSymbol =
    | typeof S_Database_PutSchema_VersionConflict
    | typeof S_Database_PutSchema_InvalidSchema
    | typeof S_Database_PutSchema_Unknown;

export const ImbricateDatabasePutSchemaOutcomeSymbolList: ImbricateDatabasePutSchemaOutcomeSymbol[] = [
    S_Database_PutSchema_VersionConflict,
    S_Database_PutSchema_InvalidSchema,
    S_Database_PutSchema_Unknown,
];

export const rebuildImbricateDatabasePutSchemaSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabasePutSchemaOutcomeSymbolList,
    S_Database_PutSchema_Unknown,
);

export type ImbricateDatabasePutSchemaOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | CommonOutcomeSymbol | ImbricateDatabasePutSchemaOutcomeSymbol;

// Create Document
export const S_Database_CreateDocument_IdentifierDuplicated: unique symbol = Symbol("Database_CreateDocument_IdentifierDuplicated");
export const S_Database_CreateDocument_InvalidProperties: unique symbol = Symbol("Database_CreateDocument_InvalidProperties");
export const S_Database_CreateDocument_Unknown: unique symbol = Symbol("Database_CreateDocument_Unknown");

export type ImbricateDatabaseCreateDocumentOutcomeSymbol =
    | typeof S_Database_CreateDocument_IdentifierDuplicated
    | typeof S_Database_CreateDocument_InvalidProperties
    | typeof S_Database_CreateDocument_Unknown;

export const ImbricateDatabaseCreateDocumentOutcomeSymbolList: ImbricateDatabaseCreateDocumentOutcomeSymbol[] = [
    S_Database_CreateDocument_IdentifierDuplicated,
    S_Database_CreateDocument_Unknown,
];

export const rebuildImbricateDatabaseCreateDocumentSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseCreateDocumentOutcomeSymbolList,
    S_Database_CreateDocument_Unknown,
);

export type ImbricateDatabaseCreateDocumentOutcome = {

    readonly document: IImbricateDocument;
} | CommonOutcomeSymbol | ImbricateDatabaseCreateDocumentOutcomeSymbol;

// Get Document
export const S_Database_GetDocument_NotFound: unique symbol = Symbol("Database_GetDocument_NotFound");
export const S_Database_GetDocument_Unknown: unique symbol = Symbol("Database_GetDocument_Unknown");

export type ImbricateDatabaseGetDocumentOutcomeSymbol =
    | typeof S_Database_GetDocument_NotFound
    | typeof S_Database_GetDocument_Unknown;

export const ImbricateDatabaseGetDocumentOutcomeSymbolList: ImbricateDatabaseGetDocumentOutcomeSymbol[] = [
    S_Database_GetDocument_NotFound,
    S_Database_GetDocument_Unknown,
];

export const rebuildImbricateDatabaseGetDocumentSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseGetDocumentOutcomeSymbolList,
    S_Database_GetDocument_Unknown,
);

export type ImbricateDatabaseGetDocumentOutcome = {

    readonly document: IImbricateDocument;
} | CommonOutcomeSymbol | ImbricateDatabaseGetDocumentOutcomeSymbol;

// Query Documents
export const S_Database_QueryDocuments_Stale: unique symbol = Symbol("Database_QueryDocuments_Stale");
export const S_Database_QueryDocuments_InvalidQuery: unique symbol = Symbol("Database_QueryDocuments_InvalidQuery");
export const S_Database_QueryDocuments_Unknown: unique symbol = Symbol("Database_QueryDocuments_Unknown");

export type ImbricateDatabaseQueryDocumentsOutcomeSymbol =
    | typeof S_Database_QueryDocuments_Stale
    | typeof S_Database_QueryDocuments_InvalidQuery
    | typeof S_Database_QueryDocuments_Unknown;

export const ImbricateDatabaseQueryDocumentsOutcomeSymbolList: ImbricateDatabaseQueryDocumentsOutcomeSymbol[] = [
    S_Database_QueryDocuments_Stale,
    S_Database_QueryDocuments_Unknown,
];

export const rebuildImbricateDatabaseQueryDocumentsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseQueryDocumentsOutcomeSymbolList,
    S_Database_QueryDocuments_Unknown,
);

export type ImbricateDatabaseQueryDocumentsOutcome = {

    readonly documents: IImbricateDocument[];
    readonly count: number;
} | CommonOutcomeSymbol | ImbricateDatabaseQueryDocumentsOutcomeSymbol;

// Count Documents
export const S_Database_CountDocuments_Stale: unique symbol = Symbol("Database_CountDocuments_Stale");
export const S_Database_CountDocuments_Unknown: unique symbol = Symbol("Database_CountDocuments_Unknown");

export type ImbricateDatabaseCountDocumentsOutcomeSymbol =
    | typeof S_Database_CountDocuments_Stale
    | typeof S_Database_CountDocuments_Unknown;

export const ImbricateDatabaseCountDocumentsOutcomeSymbolList: ImbricateDatabaseCountDocumentsOutcomeSymbol[] = [
    S_Database_CountDocuments_Stale,
    S_Database_CountDocuments_Unknown,
];

export const rebuildImbricateDatabaseCountDocumentsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseCountDocumentsOutcomeSymbolList,
    S_Database_CountDocuments_Unknown,
);

export type ImbricateDatabaseCountDocumentsOutcome = {

    readonly count: number;
} | CommonOutcomeSymbol | ImbricateDatabaseCountDocumentsOutcomeSymbol;

// Remove Document
export const S_Database_RemoveDocument_NotFound: unique symbol = Symbol("Database_RemoveDocument_NotFound");
export const S_Database_RemoveDocument_Unknown: unique symbol = Symbol("Database_RemoveDocument_Unknown");

export type ImbricateDatabaseRemoveDocumentOutcomeSymbol =
    | typeof S_Database_RemoveDocument_NotFound
    | typeof S_Database_RemoveDocument_Unknown;

export const ImbricateDatabaseRemoveDocumentOutcomeSymbolList: ImbricateDatabaseRemoveDocumentOutcomeSymbol[] = [
    S_Database_RemoveDocument_NotFound,
    S_Database_RemoveDocument_Unknown,
];

export const rebuildImbricateDatabaseRemoveDocumentSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseRemoveDocumentOutcomeSymbolList,
    S_Database_RemoveDocument_Unknown,
);

export type ImbricateDatabaseRemoveDocumentOutcome = {

    readonly success: boolean;
} | CommonOutcomeSymbol | ImbricateDatabaseRemoveDocumentOutcomeSymbol;

// Put Annotation
export const S_Database_PutAnnotation_InvalidNamespace: unique symbol = Symbol("Database_PutAnnotation_InvalidNamespace");
export const S_Database_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("Database_PutAnnotation_InvalidIdentifier");
export const S_Database_PutAnnotation_Unknown: unique symbol = Symbol("Database_PutAnnotation_Unknown");

export type ImbricateDatabasePutAnnotationOutcomeSymbol =
    | typeof S_Database_PutAnnotation_InvalidNamespace
    | typeof S_Database_PutAnnotation_InvalidIdentifier
    | typeof S_Database_PutAnnotation_Unknown;

export const ImbricateDatabasePutAnnotationOutcomeSymbolList: ImbricateDatabasePutAnnotationOutcomeSymbol[] = [
    S_Database_PutAnnotation_InvalidNamespace,
    S_Database_PutAnnotation_InvalidIdentifier,
    S_Database_PutAnnotation_Unknown,
];

export const rebuildImbricateDatabasePutAnnotationSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabasePutAnnotationOutcomeSymbolList,
    S_Database_PutAnnotation_Unknown,
);

export type ImbricateDatabasePutAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | CommonOutcomeSymbol | ImbricateDatabasePutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_Database_DeleteAnnotation_NotFound: unique symbol = Symbol("Database_DeleteAnnotation_NotFound");
export const S_Database_DeleteAnnotation_Unknown: unique symbol = Symbol("Database_DeleteAnnotation_Unknown");

export type ImbricateDatabaseDeleteAnnotationOutcomeSymbol =
    | typeof S_Database_DeleteAnnotation_NotFound
    | typeof S_Database_DeleteAnnotation_Unknown;

export const ImbricateDatabaseDeleteAnnotationOutcomeSymbolList: ImbricateDatabaseDeleteAnnotationOutcomeSymbol[] = [
    S_Database_DeleteAnnotation_NotFound,
    S_Database_DeleteAnnotation_Unknown,
];

export const rebuildImbricateDatabaseDeleteAnnotationSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseDeleteAnnotationOutcomeSymbolList,
    S_Database_DeleteAnnotation_Unknown,
);

export type ImbricateDatabaseDeleteAnnotationOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | CommonOutcomeSymbol | ImbricateDatabaseDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_Database_AddEditRecords_InvalidEditRecord: unique symbol = Symbol("Database_AddEditRecords_InvalidEditRecord");
export const S_Database_AddEditRecords_Unknown: unique symbol = Symbol("Database_AddEditRecords_Unknown");

export type ImbricateDatabaseAddEditRecordsOutcomeSymbol =
    | typeof S_Database_AddEditRecords_InvalidEditRecord
    | typeof S_Database_AddEditRecords_Unknown;

export const ImbricateDatabaseAddEditRecordsOutcomeSymbolList: ImbricateDatabaseAddEditRecordsOutcomeSymbol[] = [
    S_Database_AddEditRecords_InvalidEditRecord,
    S_Database_AddEditRecords_Unknown,
];

export const rebuildImbricateDatabaseAddEditRecordsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseAddEditRecordsOutcomeSymbolList,
    S_Database_AddEditRecords_Unknown,
);

export type ImbricateDatabaseAddEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | CommonOutcomeSymbol | ImbricateDatabaseAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_Database_GetEditRecords_NotFound: unique symbol = Symbol("Database_GetEditRecords_NotFound");
export const S_Database_GetEditRecords_Unknown: unique symbol = Symbol("Database_GetEditRecords_Unknown");

export type ImbricateDatabaseGetEditRecordsOutcomeSymbol =
    | typeof S_Database_GetEditRecords_NotFound
    | typeof S_Database_GetEditRecords_Unknown;

export const ImbricateDatabaseGetEditRecordsOutcomeSymbolList: ImbricateDatabaseGetEditRecordsOutcomeSymbol[] = [
    S_Database_GetEditRecords_NotFound,
    S_Database_GetEditRecords_Unknown,
];

export const rebuildImbricateDatabaseGetEditRecordsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseGetEditRecordsOutcomeSymbolList,
    S_Database_GetEditRecords_Unknown,
);

export type ImbricateDatabaseGetEditRecordsOutcome = {

    readonly editRecords: DatabaseEditRecord[];
} | CommonOutcomeSymbol | ImbricateDatabaseGetEditRecordsOutcomeSymbol;

