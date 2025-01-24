/**
 * @author WMXPY
 * @namespace Document
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { IImbricateProperty } from "../property/interface";
import { ImbricatePropertyRecord } from "../property/map";
import { IMBRICATE_PROPERTY_TYPE } from "../property/type";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";
import { DocumentEditRecord } from "./definition";

// Get Properties
export const S_Document_GetProperties_Unknown: unique symbol = Symbol("Document_GetProperties_Unknown");

export type ImbricateDocumentGetPropertiesOutcomeSymbol =
    | typeof S_Document_GetProperties_Unknown;

export const ImbricateDocumentGetPropertiesOutcomeSymbolList: ImbricateDocumentGetPropertiesOutcomeSymbol[] = [
    S_Document_GetProperties_Unknown,
];

export const rebuildImbricateDocumentGetPropertiesSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentGetPropertiesOutcomeSymbolList,
    S_Document_GetProperties_Unknown,
);

export type ImbricateDocumentGetPropertiesOutcome = {

    readonly properties: ImbricatePropertyRecord;
} | CommonOutcomeSymbol | ImbricateDocumentGetPropertiesOutcomeSymbol;

// Get Property
export const S_Document_GetProperty_NotFound: unique symbol = Symbol("Document_GetProperty_NotFound");
export const S_Document_GetProperty_Unknown: unique symbol = Symbol("Document_GetProperty_Unknown");

export type ImbricateDocumentGetPropertyOutcomeSymbol =
    | typeof S_Document_GetProperty_NotFound
    | typeof S_Document_GetProperty_Unknown;

export const ImbricateDocumentGetPropertyOutcomeSymbolList: ImbricateDocumentGetPropertyOutcomeSymbol[] = [
    S_Document_GetProperty_NotFound,
    S_Document_GetProperty_Unknown,
];

export const rebuildImbricateDocumentGetPropertySymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentGetPropertyOutcomeSymbolList,
    S_Document_GetProperty_Unknown,
);

export type ImbricateDocumentGetPropertyOutcome = {

    readonly property: IImbricateProperty<IMBRICATE_PROPERTY_TYPE>;
} | CommonOutcomeSymbol | ImbricateDocumentGetPropertyOutcomeSymbol;

// Put Property
export const S_Document_PutProperty_InvalidKey: unique symbol = Symbol("Document_PutProperty_InvalidKey");
export const S_Document_PutProperty_InvalidValue: unique symbol = Symbol("Document_PutProperty_InvalidValue");
export const S_Document_PutProperty_Unknown: unique symbol = Symbol("Document_PutProperty_Unknown");

export type ImbricateDocumentPutPropertyOutcomeSymbol =
    | typeof S_Document_PutProperty_InvalidKey
    | typeof S_Document_PutProperty_InvalidValue
    | typeof S_Document_PutProperty_Unknown;

export const ImbricateDocumentPutPropertyOutcomeSymbolList: ImbricateDocumentPutPropertyOutcomeSymbol[] = [
    S_Document_PutProperty_InvalidKey,
    S_Document_PutProperty_InvalidValue,
    S_Document_PutProperty_Unknown,
];

export const rebuildImbricateDocumentPutPropertySymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentPutPropertyOutcomeSymbolList,
    S_Document_PutProperty_Unknown,
);

export type ImbricateDocumentPutPropertyOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | CommonOutcomeSymbol | ImbricateDocumentPutPropertyOutcomeSymbol;

// Put Annotation
export const S_Document_PutAnnotation_InvalidNamespace: unique symbol = Symbol("Document_PutAnnotation_InvalidNamespace");
export const S_Document_PutAnnotation_InvalidIdentifier: unique symbol = Symbol("Document_PutAnnotation_InvalidIdentifier");
export const S_Document_PutAnnotation_Unknown: unique symbol = Symbol("Document_PutAnnotation_Unknown");

export type ImbricateDocumentPutAnnotationOutcomeSymbol =
    | typeof S_Document_PutAnnotation_InvalidNamespace
    | typeof S_Document_PutAnnotation_InvalidIdentifier
    | typeof S_Document_PutAnnotation_Unknown;

export const ImbricateDocumentPutAnnotationOutcomeSymbolList: ImbricateDocumentPutAnnotationOutcomeSymbol[] = [
    S_Document_PutAnnotation_InvalidNamespace,
    S_Document_PutAnnotation_InvalidIdentifier,
    S_Document_PutAnnotation_Unknown,
];

export const rebuildImbricateDocumentPutAnnotationSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentPutAnnotationOutcomeSymbolList,
    S_Document_PutAnnotation_Unknown,
);

export type ImbricateDocumentPutAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | CommonOutcomeSymbol | ImbricateDocumentPutAnnotationOutcomeSymbol;

// Delete Annotation
export const S_Document_DeleteAnnotation_NotFound: unique symbol = Symbol("Document_DeleteAnnotation_NotFound");
export const S_Document_DeleteAnnotation_Unknown: unique symbol = Symbol("Document_DeleteAnnotation_Unknown");

export type ImbricateDocumentDeleteAnnotationOutcomeSymbol =
    | typeof S_Document_DeleteAnnotation_NotFound
    | typeof S_Document_DeleteAnnotation_Unknown;

export const ImbricateDocumentDeleteAnnotationOutcomeSymbolList: ImbricateDocumentDeleteAnnotationOutcomeSymbol[] = [
    S_Document_DeleteAnnotation_NotFound,
    S_Document_DeleteAnnotation_Unknown,
];

export const rebuildImbricateDocumentDeleteAnnotationSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentDeleteAnnotationOutcomeSymbolList,
    S_Document_DeleteAnnotation_Unknown,
);

export type ImbricateDocumentDeleteAnnotationOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | CommonOutcomeSymbol | ImbricateDocumentDeleteAnnotationOutcomeSymbol;

// Add Edit Records
export const S_Document_AddEditRecords_InvalidRecord: unique symbol = Symbol("Document_AddEditRecords_InvalidRecord");
export const S_Document_AddEditRecords_Unknown: unique symbol = Symbol("Document_AddEditRecords_Unknown");

export type ImbricateDocumentAddEditRecordsOutcomeSymbol =
    | typeof S_Document_AddEditRecords_InvalidRecord
    | typeof S_Document_AddEditRecords_Unknown;

export const ImbricateDocumentAddEditRecordsOutcomeSymbolList: ImbricateDocumentAddEditRecordsOutcomeSymbol[] = [
    S_Document_AddEditRecords_InvalidRecord,
    S_Document_AddEditRecords_Unknown,
];

export const rebuildImbricateDocumentAddEditRecordsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentAddEditRecordsOutcomeSymbolList,
    S_Document_AddEditRecords_Unknown,
);

export type ImbricateDocumentAddEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | CommonOutcomeSymbol | ImbricateDocumentAddEditRecordsOutcomeSymbol;

// Get Edit Records
export const S_Document_GetEditRecords_NotFound: unique symbol = Symbol("Document_GetEditRecords_NotFound");
export const S_Document_GetEditRecords_Unknown: unique symbol = Symbol("Document_GetEditRecords_Unknown");

export type ImbricateDocumentGetEditRecordsOutcomeSymbol =
    | typeof S_Document_GetEditRecords_NotFound
    | typeof S_Document_GetEditRecords_Unknown;

export const ImbricateDocumentGetEditRecordsOutcomeSymbolList: ImbricateDocumentGetEditRecordsOutcomeSymbol[] = [
    S_Document_GetEditRecords_NotFound,
    S_Document_GetEditRecords_Unknown,
];

export const rebuildImbricateDocumentGetEditRecordsSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDocumentGetEditRecordsOutcomeSymbolList,
    S_Document_GetEditRecords_Unknown,
);

export type ImbricateDocumentGetEditRecordsOutcome = {

    readonly editRecords: DocumentEditRecord[];
} | CommonOutcomeSymbol | ImbricateDocumentGetEditRecordsOutcomeSymbol;

