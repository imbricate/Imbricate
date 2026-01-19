/**
 * @namespace Document_Property
 * @description Triage Manager
 */

import { ImbricatePropertyKey } from "../../property/definition";
import { ImbricatePropertyRecord } from "../../property/map";
import { ImbricateDocumentPropertyTriageBase } from "./triage-base";

export class ImbricateDocumentPropertyTriageManager<Result> extends ImbricateDocumentPropertyTriageBase<Result> {

    public static create<Result>(
        properties: ImbricatePropertyRecord,
    ): ImbricateDocumentPropertyTriageManager<Result> {

        return new ImbricateDocumentPropertyTriageManager<Result>(properties);
    }

    private readonly _properties: ImbricatePropertyRecord;

    private constructor(
        properties: ImbricatePropertyRecord,
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

        const result: Map<ImbricatePropertyKey, Result> = super._collect(this._properties);
        return Array.from(result.values());
    }

    /**
     * Collect the result as map
     * 
     * @returns collected result as map
     */
    public collectAsMap(): Map<ImbricatePropertyKey, Result> {

        return super._collect(this._properties);
    }

    /**
     * Collect the result as object
     * 
     * @returns collected result as object
     */
    public collectAsObject(): Record<ImbricatePropertyKey, Result> {

        const result: Map<ImbricatePropertyKey, Result> = super._collect(this._properties);
        const keys: ImbricatePropertyKey[] = Array.from(result.keys());

        const object: Record<ImbricatePropertyKey, Result> = {} as Record<ImbricatePropertyKey, Result>;
        for (const key of keys) {

            object[key] = result.get(key) as Result;
        }

        return object;
    }
}
