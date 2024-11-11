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
     * @param properties properties of the document
     * @param uniqueIdentifier unique identifier of the document, optional
     *  if not provided, a unique identifier will be generated
     * 
     * @returns a promise of the created document
     */
    createDocument(
        properties: DocumentProperties,
        uniqueIdentifier?: string,
    ): PromiseLike<IImbricateDocument>;

    /**
     * Get one document from the database
     * 
     * @returns a promise of the documents in the database, null if not found
     */
    getDocument(
        uniqueIdentifier: string,
    ): PromiseLike<IImbricateDocument | null>;
}
