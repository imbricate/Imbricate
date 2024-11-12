/**
 * @author WMXPY
 * @namespace Document
 * @description Interface
 */

import { DocumentEditRecord } from "./definition";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue } from "./property";

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
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document, the best practice is to call addEditRecords to add the edit records.
     */
    putProperty(
        key: DocumentPropertyKey,
        value: DocumentPropertyValue,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Put and replace all properties of the document
     * 
     * @param properties properties of the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document, the best practice is to call addEditRecords to add the edit records.
     */
    putProperties(
        properties: DocumentProperties,
    ): PromiseLike<DocumentEditRecord[]>;

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

    /**
     * Get edit records of the document
     * 
     * @returns a promise of the edit records of the document
     */
    getEditRecords(): PromiseLike<DocumentEditRecord[]>;
}
