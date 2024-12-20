/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature Readonly
 */

import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { DocumentAnnotationValue, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";
import { ImbricateDocumentFullFeatureBase } from "./full-feature";

export abstract class ImbricateDocumentFullFeatureReadonlyBase extends ImbricateDocumentFullFeatureBase implements IImbricateDocument {

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
    ];

    public putProperty(
        _key: DocumentPropertyKey,
        _value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }

    public putProperties(
        _properties: DocumentProperties,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }

    public putAnnotation(
        _namespace: string,
        _identifier: string,
        _value: DocumentAnnotationValue,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        );
    }

    public deleteAnnotation(
        _namespace: string,
        _identifier: string,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,
        );
    }

    public addEditRecords(
        _records: DocumentEditRecord[],
    ): Promise<void> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        );
    }
}
