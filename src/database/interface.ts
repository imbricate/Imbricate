/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { ImbricateDatabaseSchema } from "./schema";

export interface IImbricateDatabase {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    readonly databaseName: string;

    readonly schema: ImbricateDatabaseSchema;
}
