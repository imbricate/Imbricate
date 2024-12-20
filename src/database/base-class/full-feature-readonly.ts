/**
 * @author WMXPY
 * @namespace Database_BaseClass
 * @description Full Feature Readonly
 */

import { DocumentProperties } from "../../document/property";
import { ImbricateDatabaseFeatureNotSupportedError } from "../../error/database/feature-not-supported";
import { DatabaseAnnotationValue, DatabaseEditRecord, ImbricateDatabaseAuditOptions } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseAddEditRecordsOutcome, ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabaseDeleteAnnotationOutcome, ImbricateDatabasePutAnnotationOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseRemoveDocumentOutcome } from "../outcome";
import { ImbricateDatabaseSchema } from "../schema";
import { ImbricateDatabaseFullFeatureBase } from "./full-feature";

export abstract class ImbricateDatabaseFullFeatureReadOnlyBase extends ImbricateDatabaseFullFeatureBase implements IImbricateDatabase {

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_EDIT_RECORD,
    ];

    public putSchema(
        _schema: ImbricateDatabaseSchema,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutSchemaOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,
        );
    }

    public createDocument(
        _properties: DocumentProperties,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseCreateDocumentOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        );
    }

    public removeDocument(
        _uniqueIdentifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseRemoveDocumentOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,
        );
    }

    public putAnnotation(
        _namespace: string,
        _identifier: string,
        _value: DatabaseAnnotationValue,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutAnnotationOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_ANNOTATION,
        );
    }

    public deleteAnnotation(
        _namespace: string,
        _identifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseDeleteAnnotationOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_ANNOTATION,
        );
    }

    public addEditRecords(
        _records: DatabaseEditRecord[],
    ): PromiseLike<ImbricateDatabaseAddEditRecordsOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_EDIT_RECORD,
        );
    }
}
