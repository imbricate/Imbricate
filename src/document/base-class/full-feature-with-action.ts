/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { ImbricatePropertyKey } from "../../property/definition";
import { ImbricatePropertiesDrafter } from "../../property/map";
import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentDeleteAnnotationOutcome, ImbricateDocumentGetEditRecordsOutcome, ImbricateDocumentGetPropertiesOutcome, ImbricateDocumentGetPropertyOutcome, ImbricateDocumentPutAnnotationOutcome, ImbricateDocumentPutPropertyOutcome } from "../outcome";

export abstract class ImbricateDocumentFullFeatureWithActionBase implements IImbricateDocument {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly documentVersion: string;

    public abstract readonly annotations: DocumentAnnotations;

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_ORIGIN_ACTIONS,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_EXECUTE_ORIGIN_ACTION,
    ];

    public abstract getProperties(): ImbricateDocumentGetPropertiesOutcome;

    public abstract getProperty(
        key: ImbricatePropertyKey,
    ): ImbricateDocumentGetPropertyOutcome;

    public abstract mergeProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome>;

    public abstract replaceProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
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

    public abstract queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome>;
    public abstract executeOriginAction(
        input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome>;
}
