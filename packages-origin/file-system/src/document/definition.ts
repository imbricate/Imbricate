/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

import { DocumentAnnotations, DocumentEditRecord, IMBRICATE_PROPERTY_TYPE, ImbricatePropertyKey, ImbricatePropertyRecord, ImbricatePropertyValueObject, ImbricatePropertyVariant } from "@imbricate/core";
import { propertyRecordToInstanceRecord } from "../property/parse";

export type ImbricateFileSystemDocumentInstanceProperty = {

    readonly type: IMBRICATE_PROPERTY_TYPE;

    readonly value: ImbricatePropertyValueObject<IMBRICATE_PROPERTY_TYPE>;
    readonly variant: ImbricatePropertyVariant;
};

export type ImbricateFileSystemDocumentInstancePropertyRecord = Record<ImbricatePropertyKey, ImbricateFileSystemDocumentInstanceProperty>;

export type ImbricateFileSystemDocumentInstance = {

    readonly uniqueIdentifier: string;
    readonly documentVersion: string;

    readonly properties: ImbricateFileSystemDocumentInstancePropertyRecord;
    readonly editRecords: DocumentEditRecord[];
    readonly annotations: DocumentAnnotations;
};

export const createImbricateFileSystemDocumentInstance = (
    uniqueIdentifier: string,
    properties: ImbricatePropertyRecord,
    initialEditRecords: DocumentEditRecord[],
): ImbricateFileSystemDocumentInstance => {

    return {

        uniqueIdentifier,
        documentVersion: "0",
        properties: propertyRecordToInstanceRecord(properties),
        editRecords: initialEditRecords,
        annotations: {},
    };
};

