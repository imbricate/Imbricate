/**
 * @author WMXPY
 * @namespace Text
 * @description Interface
 */

import { TextEditRecord } from "./definition";

export interface IImbricateText {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    /**
     * Update the content of the text
     * 
     * @param content new content of the text
     * 
     * @returns a promise of the edit records of the text
     *  Note: the edit records will not be added to the text, the best practice is to call addEditRecords to add the edit records.
     */
    putContent(content: string): PromiseLike<TextEditRecord[]>;

    /**
     * Get the content of the text
     * 
     * @returns a promise of the content of the text
     */
    getContent(): PromiseLike<string>;

    /**
     * Add edit records to the text
     * 
     * @param records text edit records
     */
    addEditRecords(
        records: TextEditRecord[],
    ): PromiseLike<void>;

    /**
     * Get edit records of the text
     * 
     * @returns a promise of the edit records of the text
     */
    getEditRecords(): PromiseLike<TextEditRecord[]>;
}
