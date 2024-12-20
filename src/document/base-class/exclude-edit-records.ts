/**
 * @author WMXPY
 * @namespace Document
 * @description Exclude Edit Records
 */

import { DocumentEditRecord } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentFullFeatureBase } from "./full-feature";

export abstract class ImbricateDocumentExcludeEditRecordsBase extends ImbricateDocumentFullFeatureBase implements IImbricateDocument {

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_REMOVE_ANNOTATION,
    ];

    public addEditRecords(
        _records: DocumentEditRecord[],
    ): Promise<void> {

        throw new Error("Not implemented");
    }

    public getEditRecords(): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }
}
