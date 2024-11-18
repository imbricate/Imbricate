/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Manager
 */

import { IMBRICATE_PROPERTY_TYPE } from "../property";
import { DocumentPropertyTriageFunction } from "./definition";

export class ImbricateDocumentPropertyTriageManager<Result> {

    private readonly _triageFunctions: Record<IMBRICATE_PROPERTY_TYPE, DocumentPropertyTriageFunction<any, Result>>;

    public forString(
        triageFunction: DocumentPropertyTriageFunction<IMBRICATE_PROPERTY_TYPE.STRING, Result>,
    ): this {

        this._triageFunctions[IMBRICATE_PROPERTY_TYPE.STRING] = triageFunction;
        return this;
    }
}
