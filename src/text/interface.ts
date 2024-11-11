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
     */
    putContent(content: string): PromiseLike<void>;

    /**
     * Get the content of the text
     * 
     * @returns a promise of the content of the text
     */
    getContent(): PromiseLike<string>;

    /**
     * Add edit records to the document
     * 
     * @param records document edit records
     */
    addEditRecords(
        records: TextEditRecord[],
    ): PromiseLike<void>;
}
