/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage
 */

import { DocumentProperties } from "../property";
import { ImbricateDocumentPropertyTriageManager } from "./triage-manager";

export const triageImbricateDocumentProperties = <Result>(
    properties: DocumentProperties,
): ImbricateDocumentPropertyTriageManager<Result> => {

    return ImbricateDocumentPropertyTriageManager.create<Result>(properties);
};
