/**
 * @author WMXPY
 * @namespace Document
 * @description Interface
 */

import { DocumentEditRecord, DocumentProperties, DocumentPropertyKey, DocumentPropertyValue } from "./definition";

export interface IImbricateDocument {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    /**
     * Update a property from the document
     * 
     * @param key key of the property
     * @param value value of the property
     */
    putProperty(
        key: DocumentPropertyKey,
        value: DocumentPropertyValue,
    ): PromiseLike<void>;

    /**
     * Get properties from the document
     * 
     * @returns a promise of the properties of the document
     */
    getProperties(): PromiseLike<DocumentProperties>;

    /**
     * Add edit records to the document
     * 
     * @param records document edit records
     */
    addEditRecords(
        records: DocumentEditRecord[],
    ): PromiseLike<void>;
}
