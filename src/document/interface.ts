/**
 * @namespace Document
 * @description Interface
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../common/action";
import { ImbricatePropertyKey } from "../property/definition";
import { ImbricatePropertiesDrafter } from "../property/map";
import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "./definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "./feature";
import { ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentDeleteAnnotationOutcome, ImbricateDocumentGetEditRecordsOutcome, ImbricateDocumentGetPropertiesOutcome, ImbricateDocumentGetPropertyOutcome, ImbricateDocumentPutAnnotationOutcome, ImbricateDocumentPutPropertyOutcome } from "./outcome";

export interface IImbricateDocument {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    /**
     * Version of the document draft
     */
    readonly documentVersion: string;

    /**
     * Annotations of the database
     */
    readonly annotations: DocumentAnnotations;

    /**
     * Supported features of the document
     */
    readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[];

    /**
     * Get properties of the document
     */
    getProperties(): ImbricateDocumentGetPropertiesOutcome;

    /**
     * Get a property of the document
     * 
     * @param propertyKey the key of the property
     * 
     * @returns the property of the document
     */
    getProperty(
        propertyKey: ImbricatePropertyKey,
    ): ImbricateDocumentGetPropertyOutcome;

    /**
     * Merge a property to the document
     * 
     * RequireFeature: DOCUMENT_PUT_PROPERTY
     * 
     * @param properties properties of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the put property
     *  Symbol: S_Document_PutProperty_InvalidKey - if the key is invalid
     */
    mergeProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<ImbricateDocumentPutPropertyOutcome>;

    /**
     * Replace all properties of the document
     * 
     * RequireFeature: DOCUMENT_PUT_PROPERTIES
     * 
     * @param propertiesDrafter properties drafter of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the put properties
     *  Symbol: S_Document_PutProperty_InvalidKey - if the key is invalid
     */
    replaceProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<ImbricateDocumentPutPropertyOutcome>;

    /**
     * Put annotation to the document, optional
     * 
     * RequireFeature: DOCUMENT_PUT_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param value value of the annotation
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the put annotation
     *  Symbol: S_Document_PutAnnotation_InvalidNamespace - if the namespace is invalid
     *  Symbol: S_Document_PutAnnotation_InvalidIdentifier - if the identifier is invalid
     */
    putAnnotation(
        namespace: string,
        identifier: string,
        value: DocumentAnnotationValue,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<ImbricateDocumentPutAnnotationOutcome>;

    /**
     * Delete annotation from the document
     * 
     * RequireFeature: DOCUMENT_DELETE_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the outcome of the delete annotation
     *  Symbol: S_Document_DeleteAnnotation_NotFound - if the annotation is not found
     */
    deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<ImbricateDocumentDeleteAnnotationOutcome>;

    /**
     * Add edit records to the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DOCUMENT_PUT_EDIT_RECORD
     * 
     * @param records document edit records
     * 
     * @returns a promise of the outcome of the add edit records
     *  Symbol: S_Document_AddEditRecords_InvalidRecord - if the record is invalid
     */
    addEditRecords(
        records: DocumentEditRecord[],
    ): PromiseLike<ImbricateDocumentAddEditRecordsOutcome>;

    /**
     * Get edit records of the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DOCUMENT_GET_EDIT_RECORD
     * 
     * @returns a promise of the outcome of the get edit records
     *  Symbol: S_Document_GetEditRecords_NotFound - if the edit records are not found
     */
    getEditRecords(): PromiseLike<ImbricateDocumentGetEditRecordsOutcome>;

    /**
     * Query the document actions
     * 
     * @param query the query of the document actions
     * 
     * @returns the document actions
     *  Symbol: S_Common_QueryOriginActions_Stale - if the document actions are stale
     *  Symbol: S_Common_QueryOriginActions_Unknown - if the document actions are unknown
     */
    queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome>;

    /**
     * Execute the document action
     * 
     * @param input the input of the action
     * 
     * @returns the result of the action
     */
    executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome>;
}
