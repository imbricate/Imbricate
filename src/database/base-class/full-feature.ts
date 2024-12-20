/**
 * @author WMXPY
 * @namespace Database_BaseClass
 * @description Full Feature
 */

import { IImbricateDocument } from "../../document/interface";
import { DocumentProperties } from "../../document/property";
import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseAuditOptions, ImbricateDocumentQuery } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseSchema } from "../schema";

export abstract class ImbricateDatabaseFullFeatureBase implements IImbricateDatabase {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly databaseName: string;

    public abstract readonly schema: ImbricateDatabaseSchema;
    public abstract readonly annotations: DatabaseAnnotations;

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,

        IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_UPDATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_ANNOTATION,
        IMBRICATE_DATABASE_FEATURE.DATABASE_REMOVE_ANNOTATION,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_EDIT_RECORD,
        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_EDIT_RECORD,
    ];

    public abstract putSchema(
        schema: ImbricateDatabaseSchema,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;

    public abstract createDocument(
        properties: DocumentProperties,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<IImbricateDocument>;

    public abstract getDocument(uniqueIdentifier: string): PromiseLike<IImbricateDocument | null>;
    public abstract queryDocuments(query: ImbricateDocumentQuery): PromiseLike<IImbricateDocument[]>;
    public abstract countDocuments(query: ImbricateDocumentQuery): PromiseLike<number>;

    public abstract removeDocument(uniqueIdentifier: string, auditOptions?: ImbricateDatabaseAuditOptions): PromiseLike<void>;

    public abstract putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;
    public abstract deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]>;

    public abstract addEditRecords(records: DatabaseEditRecord[]): PromiseLike<void>;
    public abstract getEditRecords(): PromiseLike<DatabaseEditRecord[]>;
}
