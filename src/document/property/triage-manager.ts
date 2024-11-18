/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Manager
 */

import { DocumentProperties, DocumentPropertyKey, IMBRICATE_PROPERTY_TYPE } from "../property";
import { DocumentPropertyTriageFunction } from "./definition";

export class ImbricateDocumentPropertyTriageManager<Result> {

    public static create<Result>(
        properties: DocumentProperties,
    ): ImbricateDocumentPropertyTriageManager<Result> {

        return new ImbricateDocumentPropertyTriageManager<Result>(properties);
    }

    private readonly _properties: DocumentProperties;

    private readonly _triageFunctionsByKey: Map<string, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;
    private readonly _triageFunctionsByType: Map<IMBRICATE_PROPERTY_TYPE, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;

    private constructor(
        properties: DocumentProperties,
    ) {

        this._properties = properties;

        this._triageFunctionsByKey = new Map();
        this._triageFunctionsByType = new Map();
    }

    /**
     * Set triage function for property key,
     *  This action will override document value based triage functions
     * 
     * @param propertyKey property key
     * @param triageFunction triage function
     * @returns triage manager
     */
    public forPropertyKey<T extends IMBRICATE_PROPERTY_TYPE>(
        propertyKey: DocumentPropertyKey,
        triageFunction: DocumentPropertyTriageFunction<T, Result>,
    ): this {

        this._triageFunctionsByKey.set(propertyKey, triageFunction);
        return this;
    }

    public forString(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.STRING, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.STRING, triageFunction);
        return this;
    }

    public forMarkdown(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.MARKDOWN, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.MARKDOWN, triageFunction);
        return this;
    }

    /**
     * Collect the result as array
     * 
     * @returns collected result as array
     */
    public collectAsArray(): Result[] {

        const result: Map<DocumentPropertyKey, Result> = this._collect();
        return Array.from(result.values());
    }

    /**
     * Collect the result as map
     * 
     * @returns collected result as map
     */
    public collectAsMap(): Map<DocumentPropertyKey, Result> {

        return this._collect();
    }

    /**
     * Collect the result as object
     * 
     * @returns collected result as object
     */
    public collectAsObject(): Record<DocumentPropertyKey, Result> {

        const result: Map<DocumentPropertyKey, Result> = this._collect();
        const keys: DocumentPropertyKey[] = Array.from(result.keys());

        const object: Record<DocumentPropertyKey, Result> = {} as Record<DocumentPropertyKey, Result>;
        for (const key of keys) {

            object[key] = result.get(key) as Result;
        }

        return object;
    }

    private _collect(): Map<DocumentPropertyKey, Result> {

        const keys: DocumentPropertyKey[] = Object.keys(this._properties);
        const result: Map<DocumentPropertyKey, Result> = new Map();
        for (const key of keys) {

            const property = this._properties[key];
            const triageFunction = this._triageFunctionsByKey.get(key);

            if (typeof triageFunction === "function") {

                const value: Result = triageFunction(key, property);
                result.set(key, value);
                continue;
            }

            const typeFunction = this._triageFunctionsByType.get(property.type);
            if (typeof typeFunction === "function") {

                const value: Result = typeFunction(key, property);
                result.set(key, value);
                continue;
            }
        }

        return result;
    }
}
