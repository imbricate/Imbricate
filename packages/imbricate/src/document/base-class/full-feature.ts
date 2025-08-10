/**
 * @author WMXPY
 * @namespace Document
 * @description Full Feature
 */

import { ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome } from "../../common/action";
import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { DocumentAnnotations } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentFullFeatureWithActionBase } from "./full-feature-with-action";

export abstract class ImbricateDocumentFullFeatureBase extends ImbricateDocumentFullFeatureWithActionBase implements IImbricateDocument {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly documentVersion: string;

    public abstract readonly annotations: DocumentAnnotations;

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_ANNOTATION,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_DELETE_ANNOTATION,

        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_EDIT_RECORD,
        IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_EDIT_RECORD,
    ];

    public queryOriginActions(
        _query: ImbricateCommonQueryOriginActionsQuery,
    ): PromiseLike<ImbricateCommonQueryOriginActionsOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_GET_ORIGIN_ACTIONS,
        );
    }

    public executeOriginAction(
        _input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_EXECUTE_ORIGIN_ACTION,
        );
    }
}
