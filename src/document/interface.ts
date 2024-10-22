/**
 * @author WMXPY
 * @namespace Document
 * @description Interface
 */

import { DocumentProperties } from "./definition";

export interface IImbricateDocument {

    /**
     * Unique identifier of the database
     */
    readonly uniqueIdentifier: string;

    readonly properties: DocumentProperties;
}
