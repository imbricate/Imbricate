/**
 * @author WMXPY
 * @namespace Database
 * @description Definition
 */

import { DatabaseAnnotations, DatabaseEditRecord, ImbricateDatabaseSchema } from "@imbricate/core";

export type ImbricateFileSystemDatabaseMeta = {

    readonly uniqueIdentifier: string;
    readonly databaseName: string;
    readonly databaseVersion: string;

    readonly schema: ImbricateDatabaseSchema;
    readonly editRecords: DatabaseEditRecord[];
    readonly annotations: DatabaseAnnotations;
};
