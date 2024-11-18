/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage Factory
 */

import { DocumentProperties } from "../property";
import { ImbricateDocumentPropertyTriageManager } from "./triage-manager";

export class ImbricateDocumentPropertyTriageFactory<Result> {

    public static create<Result>(): ImbricateDocumentPropertyTriageFactory<Result> {

        return new ImbricateDocumentPropertyTriageFactory<Result>();
    }

    private constructor() { }

    public create(
        properties: DocumentProperties,
    ): ImbricateDocumentPropertyTriageManager<Result> {

        return ImbricateDocumentPropertyTriageManager.create<Result>(properties);
    }
}
