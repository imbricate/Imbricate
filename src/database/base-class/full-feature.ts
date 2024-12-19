/**
 * @author WMXPY
 * @namespace Database_BaseClass
 * @description Full Feature
 */

import { DatabaseAnnotations } from "../definition";
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

        IMBRICATE_DATABASE_FEATURE.DATABASE_QUERY_DOCUMENT,

        IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_EDIT_RECORD,
        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_EDIT_RECORD,
    ];


}
