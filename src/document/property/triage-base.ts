/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Base
 */

import { DocumentProperties, DocumentPropertyKey, IMBRICATE_PROPERTY_TYPE } from "../property";
import { DocumentPropertyTriageFunction } from "./definition";

export class ImbricateDocumentPropertyTriageBase<Result> {

    private readonly _triageFunctionsByKey: Map<string, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;
    private readonly _triageFunctionsByType: Map<IMBRICATE_PROPERTY_TYPE, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;

    protected constructor() {

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

    protected _collect(properties: DocumentProperties): Map<DocumentPropertyKey, Result> {

        const keys: DocumentPropertyKey[] = Object.keys(properties);
        const result: Map<DocumentPropertyKey, Result> = new Map();
        for (const key of keys) {

            const property = properties[key];
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
