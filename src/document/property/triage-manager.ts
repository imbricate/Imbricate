/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Manager
 */

import { DocumentPropertyKey, IMBRICATE_PROPERTY_TYPE } from "../property";
import { DocumentPropertyTriageFunction } from "./definition";

export class ImbricateDocumentPropertyTriageManager<Result> {

    private readonly _triageFunctionsByKey: Map<string, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;
    private readonly _triageFunctionsByType: Map<IMBRICATE_PROPERTY_TYPE, DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE, Result>>;

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

        this._triageFunctionsByType[IMBRICATE_PROPERTY_TYPE.STRING] = triageFunction;
        return this;
    }

    public forMarkdown(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.MARKDOWN, Result>,
    ): this {

        this._triageFunctionsByType[IMBRICATE_PROPERTY_TYPE.MARKDOWN] = triageFunction;
        return this;
    }
}
