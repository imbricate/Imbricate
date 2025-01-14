/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentDeleteAnnotationOutcome, ImbricateDocumentGetEditRecordsOutcome, ImbricateDocumentPutAnnotationOutcome, ImbricateDocumentPutPropertyOutcome } from "../outcome";
import { DocumentProperties } from "../property";
import { ImbricateDocumentFullFeatureWithActionBase } from "./full-feature-with-action";

export abstract class ImbricateDocumentFullFeatureBase extends ImbricateDocumentFullFeatureWithActionBase implements IImbricateDocument {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly documentVersion: string;

    public abstract readonly properties: DocumentProperties;
    public abstract readonly annotations: DocumentAnnotations;

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
    ];

    public abstract mergeProperties(
        properties: DocumentProperties,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome>;

    public abstract replaceProperties(
        properties: DocumentProperties,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome>;

    public abstract putAnnotation(
        namespace: string,
        identifier: string,
        value: DocumentAnnotationValue,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutAnnotationOutcome>;

    public abstract deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentDeleteAnnotationOutcome>;

    public abstract addEditRecords(
        records: DocumentEditRecord[],
    ): Promise<ImbricateDocumentAddEditRecordsOutcome>;

    public abstract getEditRecords(): Promise<ImbricateDocumentGetEditRecordsOutcome>;

    public queryOriginActions(
        _query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_ORIGIN_ACTIONS,
        );
    }

    public executeOriginAction(
        _input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_EXECUTE_ORIGIN_ACTION,
        );
    }
}
