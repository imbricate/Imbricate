/**
 * @author WMXPY
 * @namespace Database
 * @description Essential
 */

import { ImbricateDatabaseFeatureNotSupportedError } from "../../error/database/feature-not-supported";
import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseAuditOptions } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseFullFeatureBase } from "./full-feature";

export abstract class ImbricateDatabaseEssentialBase extends ImbricateDatabaseFullFeatureBase implements IImbricateDatabase {

    public readonly annotations: DatabaseAnnotations = {};

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,

        IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,
    ];

    public putAnnotation(
        _namespace: string,
        _identifier: string,
        _value: DatabaseAnnotationValue,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_ANNOTATION,
        );
    }

    public deleteAnnotation(
        _namespace: string,
        _identifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_ANNOTATION,
        );
    }

    public addEditRecords(
        _records: DatabaseEditRecord[],
    ): PromiseLike<void> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_EDIT_RECORD,
        );
    }

    public getEditRecords(): PromiseLike<DatabaseEditRecord[]> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_GET_EDIT_RECORD,
        );
    }
}
