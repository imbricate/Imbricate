/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Base
 */

import { ImbricatePropertyKey } from "../../property/definition";
import { ImbricatePropertyRecord } from "../../property/map";
import { IMBRICATE_PROPERTY_TYPE } from "../../property/type";
import { DocumentPropertyTriageFunction } from "./definition";

// IMBRICATE_PROPERTY_TYPE SWITCH
export class ImbricateDocumentPropertyTriageBase<Result> {

    private readonly _triageFunctionsByKey: Map<string, DocumentPropertyTriageFunction<any, Result>>;
    private readonly _triageFunctionsByType: Map<IMBRICATE_PROPERTY_TYPE, DocumentPropertyTriageFunction<any, Result>>;

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
        propertyKey: ImbricatePropertyKey,
        triageFunction: DocumentPropertyTriageFunction<T, Result>,
    ): this {

        this._triageFunctionsByKey.set(propertyKey, triageFunction);
        return this;
    }

    public forBoolean(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.BOOLEAN, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.BOOLEAN, triageFunction);
        return this;
    }

    public forString(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.STRING, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.STRING, triageFunction);
        return this;
    }

    public forNumber(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.NUMBER, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.NUMBER, triageFunction);
        return this;
    }

    public forMarkdown(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.MARKDOWN, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.MARKDOWN, triageFunction);
        return this;
    }

    public forJson(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.JSON, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.JSON, triageFunction);
        return this;
    }

    public forImbriscript(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT, triageFunction);
        return this;
    }

    public forDate(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.DATE, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.DATE, triageFunction);
        return this;
    }

    public forLabel(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.LABEL, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.LABEL, triageFunction);
        return this;
    }

    public forReference(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.REFERENCE, Result>,
    ): this {

        this._triageFunctionsByType.set(IMBRICATE_PROPERTY_TYPE.REFERENCE, triageFunction);
        return this;
    }

    protected _collect(properties: ImbricatePropertyRecord): Map<ImbricatePropertyKey, Result> {

        const keys: ImbricatePropertyKey[] = Object.keys(properties);
        const result: Map<ImbricatePropertyKey, Result> = new Map();
        for (const key of keys) {

            const property = properties[key];
            const triageFunction = this._triageFunctionsByKey.get(key);

            if (typeof triageFunction === "function") {

                const value: Result = triageFunction(key, property);
                result.set(key, value);
                continue;
            }

            const typeFunction = this._triageFunctionsByType.get(property.propertyType);
            if (typeof typeFunction === "function") {

                const value: Result = typeFunction(key, property);
                result.set(key, value);
                continue;
            }
        }

        return result;
    }
}
