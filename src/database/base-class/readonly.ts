/**
 * @author WMXPY
 * @namespace Database_BaseClass
 * @description Readonly
 */

import { DatabaseAnnotations } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseSchema } from "../schema";

export abstract class ImbricateDatabaseReadOnly implements IImbricateDatabase {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly databaseName: string;
    public abstract readonly databaseVersion: number;

    public abstract readonly schema: ImbricateDatabaseSchema;
    public abstract readonly annotations: DatabaseAnnotations;

    public abstract readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

    public constructor(
        uniqueIdentifier: string,
        databaseName: string,
        databaseVersion: number,
        schema: ImbricateDatabaseSchema,
        annotations: DatabaseAnnotations,
        supportedFeatures: IMBRICATE_DATABASE_FEATURE[],
    ) {
    }
}
