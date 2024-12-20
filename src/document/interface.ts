/**
 * @author WMXPY
 * @namespace Document
 * @description Interface
 */

import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "./definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "./feature";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "./property";

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
     * Properties of the document
     */
    readonly properties: DocumentProperties;

    /**
     * Annotations of the database
     */
    readonly annotations: DocumentAnnotations;

    /**
     * Supported features of the document
     */
    readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[];

    /**
     * Update a property from the document
     * 
     * RequireFeature: DOCUMENT_PUT_PROPERTY
     * 
     * @param key key of the property
     * @param value value of the property
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document if `noEditRecord` is true,
     *  Call `addEditRecords` to add the edit records manually.
     */
    putProperty(
        key: DocumentPropertyKey,
        value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Put and replace all properties of the document, optional
     * 
     * RequireFeature: DOCUMENT_PUT_PROPERTIES
     * 
     * @param properties properties of the document
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document if `noEditRecord` is true,
     *  Call `addEditRecords` to add the edit records manually.
     */
    putProperties(
        properties: DocumentProperties,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<DocumentEditRecord[]>;

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
     * @returns a promise of the edit records of the document
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true in audit options
     */
    putAnnotation(
        namespace: string,
        identifier: string,
        value: DocumentAnnotationValue,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Delete annotation from the document
     * 
     * RequireFeature: DOCUMENT_REMOVE_ANNOTATION
     * 
     * @param namespace namespace of the annotation
     * @param identifier identifier of the annotation
     * @param auditOptions audit options of the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: if the origin supports Document Edit Record, the edit record will be added by default
     *  If you do not want to add the edit record, set `noEditRecord` to true in audit options
     */
    deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Add edit records to the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DOCUMENT_PUT_EDIT_RECORD
     * 
     * @param records document edit records
     */
    addEditRecords(
        records: DocumentEditRecord[],
    ): PromiseLike<void>;

    /**
     * Get edit records of the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * RequireFeature: DOCUMENT_GET_EDIT_RECORD
     * 
     * @returns a promise of the edit records of the document
     */
    getEditRecords(): PromiseLike<DocumentEditRecord[]>;
}
