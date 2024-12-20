/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature
 */

import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";

export abstract class ImbricateDocumentFullFeatureBase implements IImbricateDocument {

    public abstract readonly uniqueIdentifier: string;

    public abstract readonly documentVersion: string;
    public abstract readonly properties: DocumentProperties;
    public abstract readonly annotations: DocumentAnnotations;

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_REMOVE_ANNOTATION,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
    ];

    public abstract putProperty(
        key: DocumentPropertyKey,
        value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]>;

    public abstract putProperties(
        properties: DocumentProperties,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]>;

    public abstract putAnnotation(
        namespace: string,
        identifier: string,
        value: DocumentAnnotationValue,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]>;

    public abstract deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]>;

    public abstract addEditRecords(records: DocumentEditRecord[]): Promise<void>;
    public abstract getEditRecords(): Promise<DocumentEditRecord[]>;
}
