/**
 * @author WMXPY
 * @namespace Document
 * @description Essential Readonly
 */

import { ImbricateDocumentFeatureNotSupportedError } from "../../error/document/feature-not-supported";
import { ImbricatePropertiesDrafter } from "../../property/map";
import { DocumentAnnotations, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { ImbricateDocumentPutPropertyOutcome } from "../outcome";
import { ImbricateDocumentEssentialBase } from "./essential";

export abstract class ImbricateDocumentEssentialReadonlyBase extends ImbricateDocumentEssentialBase implements IImbricateDocument {

    public readonly annotations: DocumentAnnotations = {};

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [];

    public mergeProperties(
        _propertiesDrafter: ImbricatePropertiesDrafter,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }

    public replaceProperties(
        _propertiesDrafter: ImbricatePropertiesDrafter,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        throw ImbricateDocumentFeatureNotSupportedError.withFeature(
            IMBRICATE_DOCUMENT_FEATURE.DOCUMENT_PUT_PROPERTY,
        );
    }
}
