/**
 * @author WMXPY
 * @namespace Database_BaseClass
 * @description Full Feature With Action
 */

import { ImbricateOriginAction, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { DocumentProperties } from "../../document/property";
import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseAuditOptions, ImbricateDocumentQuery } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseAddEditRecordsOutcome, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabaseDeleteAnnotationOutcome, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseGetEditRecordsOutcome, ImbricateDatabasePutAnnotationOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseRemoveDocumentOutcome } from "../outcome";
import { ImbricateDatabaseSchema } from "../schema";

export abstract class ImbricateDatabaseFullFeatureWithActionBase implements IImbricateDatabase {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly databaseName: string;
    public abstract readonly databaseVersion: string;

    public abstract readonly schema: ImbricateDatabaseSchema;
    public abstract readonly annotations: DatabaseAnnotations;

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,

        IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_ANNOTATION,
        IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_ANNOTATION,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_EDIT_RECORD,
        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_EDIT_RECORD,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_ORIGIN_ACTIONS,
        IMBRICATE_DATABASE_FEATURE.DATABASE_EXECUTE_ORIGIN_ACTION,
    ];

    public abstract putSchema(
        schema: ImbricateDatabaseSchema,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutSchemaOutcome>;

    public abstract createDocument(
        properties: DocumentProperties,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseCreateDocumentOutcome>;

    public abstract getDocument(
        uniqueIdentifier: string,
    ): PromiseLike<ImbricateDatabaseGetDocumentOutcome>;

    public abstract queryDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<ImbricateDatabaseQueryDocumentsOutcome>;

    public abstract countDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<ImbricateDatabaseCountDocumentsOutcome>;

    public abstract removeDocument(
        uniqueIdentifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseRemoveDocumentOutcome>;

    public abstract putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutAnnotationOutcome>;

    public abstract deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseDeleteAnnotationOutcome>;

    public abstract addEditRecords(
        records: DatabaseEditRecord[],
    ): PromiseLike<ImbricateDatabaseAddEditRecordsOutcome>;

    public abstract getEditRecords(): PromiseLike<ImbricateDatabaseGetEditRecordsOutcome>;

    public abstract getOriginActions(): ImbricateOriginAction[];
    public abstract executeOriginAction(
        input: ImbricateOriginActionInput,
    ): PromiseLike<ImbricateOriginActionOutcome>;
}
