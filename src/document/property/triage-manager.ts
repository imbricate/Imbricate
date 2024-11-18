/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Manager
 */

import { DocumentProperties, DocumentPropertyKey } from "../property";
import { ImbricateDocumentPropertyTriageBase } from "./triage-base";

export class ImbricateDocumentPropertyTriageManager<Result> extends ImbricateDocumentPropertyTriageBase<Result> {

    public static create<Result>(
        properties: DocumentProperties,
    ): ImbricateDocumentPropertyTriageManager<Result> {

        return new ImbricateDocumentPropertyTriageManager<Result>(properties);
    }

    private readonly _properties: DocumentProperties;

    private constructor(
        properties: DocumentProperties,
    ) {

        super();
        this._properties = properties;
    }

    /**
     * Collect the result as array
     * 
     * @returns collected result as array
     */
    public collectAsArray(): Result[] {

        const result: Map<DocumentPropertyKey, Result> = super._collect(this._properties);
        return Array.from(result.values());
    }

    /**
     * Collect the result as map
     * 
     * @returns collected result as map
     */
    public collectAsMap(): Map<DocumentPropertyKey, Result> {

        return super._collect(this._properties);
    }

    /**
     * Collect the result as object
     * 
     * @returns collected result as object
     */
    public collectAsObject(): Record<DocumentPropertyKey, Result> {

        const result: Map<DocumentPropertyKey, Result> = super._collect(this._properties);
        const keys: DocumentPropertyKey[] = Array.from(result.keys());

        const object: Record<DocumentPropertyKey, Result> = {} as Record<DocumentPropertyKey, Result>;
        for (const key of keys) {

            object[key] = result.get(key) as Result;
        }

        return object;
    }
}
