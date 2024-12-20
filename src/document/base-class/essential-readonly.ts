/**
 * @author WMXPY
 * @namespace Document
 * @description Essential Readonly
 */

import { DocumentAnnotations, DocumentEditRecord, ImbricateDocumentAuditOptions } from "../definition";
import { IMBRICATE_DOCUMENT_FEATURE } from "../feature";
import { IImbricateDocument } from "../interface";
import { DocumentProperties, DocumentPropertyKey, DocumentPropertyValue, IMBRICATE_PROPERTY_TYPE } from "../property";
import { ImbricateDocumentEssentialBase } from "./essential";

export abstract class ImbricateDocumentEssentialReadonlyBase extends ImbricateDocumentEssentialBase implements IImbricateDocument {

    public readonly annotations: DocumentAnnotations = {};

    public readonly supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = [];

    public putProperty(
        _key: DocumentPropertyKey,
        _value: DocumentPropertyValue<IMBRICATE_PROPERTY_TYPE>,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }

    public putProperties(
        _properties: DocumentProperties,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<DocumentEditRecord[]> {

        throw new Error("Not implemented");
    }
}
