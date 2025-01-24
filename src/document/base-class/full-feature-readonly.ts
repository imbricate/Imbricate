/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature Readonly
 */

import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { ImbricatePropertyRecord } from "../../property/map";
import { DocumentAnnotationValue, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentDeleteAnnotationOutcome, ImbricateDocumentPutAnnotationOutcome, ImbricateDocumentPutPropertyOutcome } from "../outcome";
import { ImbricateDocumentFullFeatureBase } from "./full-feature";

export abstract class ImbricateDocumentFullFeatureReadonlyBase extends ImbricateDocumentFullFeatureBase implements IImbricateDocument {

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
    ];

    public mergeProperties(
        _properties: ImbricatePropertyRecord,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }

    public replaceProperties(
        _properties: ImbricatePropertyRecord,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }

    public putAnnotation(
        _namespace: string,
        _identifier: string,
        _value: DocumentAnnotationValue,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutAnnotationOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        );
    }

    public deleteAnnotation(
        _namespace: string,
        _identifier: string,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentDeleteAnnotationOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,
        );
    }

    public addEditRecords(
        _records: DocumentEditRecord[],
    ): Promise<ImbricateDocumentAddEditRecordsOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        );
    }
}
