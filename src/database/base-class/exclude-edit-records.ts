/**
 * @author WMXPY
 * @namespace Database
 * @description Exclude Edit Records
 */

import { DatabaseEditRecord } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseFullFeatureBase } from "./full-feature";

export abstract class ImbricateDatabaseExcludeEditRecordsBase extends ImbricateDatabaseFullFeatureBase implements IImbricateDatabase {

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,

        IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_UPDATE_DOCUMENT,
        IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_ANNOTATION,
        IMBRICATE_DATABASE_FEATURE.DATABASE_REMOVE_ANNOTATION,
    ];

    public addEditRecords(
        _records: DatabaseEditRecord[],
    ): PromiseLike<void> {

        throw new Error("Not implemented");
    }

    public getEditRecords(): PromiseLike<DatabaseEditRecord[]> {

        throw new Error("Not implemented");
    }
}
