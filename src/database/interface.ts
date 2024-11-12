/**
 * @author WMXPY
 * @namespace Database
 * @description Interface
 */

import { IImbricateDocument } from "../document/interface";
import { DocumentProperties } from "../document/property";
import { ImbricateDocumentQuery } from "./definition";
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

    /**
     * Query documents from the database
     * 
     * @param query query of the documents
     * 
     * @returns a promise of the documents in the database
     */
    queryDocuments(
        query: ImbricateDocumentQuery,
    ): PromiseLike<IImbricateDocument[]>;
}
