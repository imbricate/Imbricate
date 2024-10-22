/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { DocumentProperties } from "../document/definition";
import { IImbricateDocument } from "../document/interface";
import { ImbricateDatabaseSchema } from "./schema";

export interface IImbricateDatabase {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    readonly databaseName: string;

    readonly schema: ImbricateDatabaseSchema;

    /**
     * Create a new document in the database
     * 
     * @returns a promise of the created document
     */
    createDocument(
        properties: DocumentProperties,
    ): PromiseLike<IImbricateDocument>;
}
