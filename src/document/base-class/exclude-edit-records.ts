/**
 * @author WMXPY
 * @namespace Document
 * @description Exclude Edit Records
 */

import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { DocumentEditRecord } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentGetEditRecordsOutcome } from "../outcome";
import { ImbricateDocumentFullFeatureBase } from "./full-feature";

export abstract class ImbricateDocumentExcludeEditRecordsBase extends ImbricateDocumentFullFeatureBase implements IImbricateDocument {

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,
    ];

    public addEditRecords(
        _records: DocumentEditRecord[],
    ): Promise<ImbricateDocumentAddEditRecordsOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        );
    }

    public getEditRecords(): Promise<ImbricateDocumentGetEditRecordsOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
        );
    }
}
