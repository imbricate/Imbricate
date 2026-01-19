/**
 * @namespace Document_Property
 * @description Triage
 */

import { ImbricatePropertyRecord } from "../../property/map";
import { ImbricateDocumentPropertyTriageManager } from "./triage-manager";

export const triageImbricateDocumentProperties = <Result>(
    properties: ImbricatePropertyRecord,
): ImbricateDocumentPropertyTriageManager<Result> => {

    return ImbricateDocumentPropertyTriageManager.create<Result>(properties);
};
