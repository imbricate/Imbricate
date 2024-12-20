/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature Readonly
 */

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

        throw new Error("Not implemented");
    }

    public putProperties(
        _properties: DocumentProperties,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }

    public putAnnotation(
        _namespace: string,
        _identifier: string,
        _value: DocumentAnnotationValue,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }

    public deleteAnnotation(
        _namespace: string,
        _identifier: string,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }

    public addEditRecords(
        _records: DocumentEditRecord[],
    ): Promise<void> {

        throw new Error("Not implemented");
    }
}
