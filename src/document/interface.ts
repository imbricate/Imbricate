/**
 * @author WMXPY
 * @namespace Document
 * @description Interface
 */

import { DocumentEditRecord } from "./definition";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "./property";

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
     * @param noEditRecord do not add edit record, optional
     *  Default to false, if set to true, the edit record will not be added to the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document if `noEditRecord` is true,
     *  Call `addEditRecords` to add the edit records manually.
     */
    putProperty(
        key: DocumentPropertyKey,
        value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>,
        noEditRecord?: boolean,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Put and replace all properties of the document
     * 
     * @param properties properties of the document
     * @param noEditRecord do not add edit record, optional
     *  Default to false, if set to true, the edit record will not be added to the document
     * 
     * @returns a promise of the edit records of the document
     *  Note: the edit records will not be added to the document if `noEditRecord` is true,
     *  Call `addEditRecords` to add the edit records manually.
     */
    putProperties(
        properties: DocumentProperties,
        noEditRecord?: boolean,
    ): PromiseLike<DocumentEditRecord[]>;

    /**
     * Get properties from the document
     * 
     * @returns a promise of the properties of the document
     */
    getProperties(): PromiseLike<DocumentProperties>;

    /**
     * Add edit records to the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * @param records document edit records
     */
    addEditRecords?(
        records: DocumentEditRecord[],
    ): PromiseLike<void>;

    /**
     * Get edit records of the document, optional
     *  This method is optional, if not implemented, means the origin
     *  1. The origin does not support edit records
     *  2. The origin force to add edit records when put properties
     * 
     * @returns a promise of the edit records of the document
     */
    getEditRecords?(): PromiseLike<DocumentEditRecord[]>;
}
