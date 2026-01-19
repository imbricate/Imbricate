/**
 * @author WMXPY
 * @namespace Document
 * @description Document
 */

import { DocumentAnnotationValue, DocumentAnnotations, DocumentEditOperation, DocumentEditRecord, IImbricateDocument, IImbricateProperty, IMBRICATE_DOCUMENT_EDIT_TYPE, IMBRICATE_ORIGIN_ACTION_RESULT_STATUS, IMBRICATE_PROPERTY_TYPE, ImbricateAuthor, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateDatabaseSchema, ImbricateDocumentAddEditRecordsOutcome, ImbricateDocumentAuditOptions, ImbricateDocumentDeleteAnnotationOutcome, ImbricateDocumentFullFeatureWithActionBase, ImbricateDocumentGetEditRecordsOutcome, ImbricateDocumentGetPropertiesOutcome, ImbricateDocumentGetPropertyOutcome, ImbricateDocumentPutAnnotationOutcome, ImbricateDocumentPutPropertyOutcome, ImbricateOriginActionInput, ImbricateOriginActionOutcome, ImbricatePropertiesDrafter, ImbricatePropertyKey, ImbricatePropertyRecord, S_Action_ActionNotFound, S_Document_AddEditRecords_Unknown, S_Document_DeleteAnnotation_Unknown, S_Document_PutAnnotation_Unknown, S_Document_PutProperty_InvalidValue, S_Document_PutProperty_Unknown, validateImbricateProperties } from "@imbricate/core";
import { UUIDVersion1 } from "@sudoo/uuid";
import { draftImbricateProperties } from "../property/draft";
import { instanceRecordToPropertyRecord, propertyRecordToInstanceRecord } from "../property/parse";
import { getDocumentByUniqueIdentifier, putDocument } from "./action";
import { ImbricateFileSystemDocumentInstance, createImbricateFileSystemDocumentInstance } from "./definition";
import { GET_DOCUMENT_PATH_ORIGIN_ACTION_IDENTIFIER, documentExecuteGetDocumentPathOriginAction } from "./document-action/get-document-path";
import { getDocumentDocumentAction } from "./document-actions";

export class ImbricateFileSystemDocument extends ImbricateDocumentFullFeatureWithActionBase implements IImbricateDocument {

    public static async fromScratchAndSave(
        schema: ImbricateDatabaseSchema,
        basePath: string,
        databaseUniqueIdentifier: string,
        documentUniqueIdentifier: string,
        propertiesDrafter: ImbricatePropertiesDrafter,
        author?: ImbricateAuthor,
    ): Promise<ImbricateFileSystemDocument> {

        const operations: Array<DocumentEditOperation<IMBRICATE_DOCUMENT_EDIT_TYPE>> = [];

        const properties: ImbricatePropertyRecord = draftImbricateProperties(propertiesDrafter);

        for (const key of Object.keys(properties)) {

            const value: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> = properties[key as ImbricatePropertyKey];

            operations.push({
                action: IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_PROPERTY,
                value: {
                    key,
                    type: value.propertyType,
                    value: value.propertyValue,
                    variant: value.propertyVariant,
                },
            });
        }

        const initialEditRecords: DocumentEditRecord[] = [{
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: "-1",
            afterVersion: "0",
            author,
            operations,
        }];

        const instance: ImbricateFileSystemDocumentInstance = createImbricateFileSystemDocumentInstance(
            documentUniqueIdentifier,
            properties,
            initialEditRecords,
        );

        await putDocument(basePath, databaseUniqueIdentifier, instance);

        return new ImbricateFileSystemDocument(
            schema,
            basePath,
            databaseUniqueIdentifier,
            documentUniqueIdentifier,
            "0",
            properties,
            initialEditRecords,
            {},
        );
    }

    public static fromInstance(
        schema: ImbricateDatabaseSchema,
        basePath: string,
        databaseUniqueIdentifier: string,
        instance: ImbricateFileSystemDocumentInstance,
    ) {

        return new ImbricateFileSystemDocument(
            schema,
            basePath,
            databaseUniqueIdentifier,
            instance.uniqueIdentifier,
            instance.documentVersion,
            instanceRecordToPropertyRecord(instance.properties),
            instance.editRecords,
            instance.annotations,
        );
    }

    private readonly _schema: ImbricateDatabaseSchema;
    private readonly _basePath: string;

    private readonly _databaseUniqueIdentifier: string;
    private readonly _documentUniqueIdentifier: string;

    private _documentVersion: string;

    private _properties: ImbricatePropertyRecord;
    private _editRecords: DocumentEditRecord[];
    private _annotations: DocumentAnnotations;

    private constructor(
        schema: ImbricateDatabaseSchema,
        basePath: string,
        databaseUniqueIdentifier: string,
        documentUniqueIdentifier: string,
        documentVersion: string,
        properties: ImbricatePropertyRecord,
        editRecords: DocumentEditRecord[],
        annotations: DocumentAnnotations,
    ) {

        super();

        this._schema = schema;
        this._basePath = basePath;

        this._databaseUniqueIdentifier = databaseUniqueIdentifier;
        this._documentUniqueIdentifier = documentUniqueIdentifier;

        this._documentVersion = documentVersion;

        this._properties = properties;
        this._editRecords = editRecords;
        this._annotations = annotations;
    }

    public get uniqueIdentifier(): string {
        return this._documentUniqueIdentifier;
    }

    public get documentVersion(): string {
        return this._documentVersion;
    }

    public get properties(): ImbricatePropertyRecord {
        return this._properties;
    }

    public get annotations(): DocumentAnnotations {
        return this._annotations;
    }

    public getProperty(
        propertyKey: ImbricatePropertyKey,
    ): ImbricateDocumentGetPropertyOutcome {

        const property: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> = this._properties[propertyKey];

        return {
            property,
        };
    }

    public getProperties(): ImbricateDocumentGetPropertiesOutcome {

        return {
            properties: this._properties,
        };
    }

    public async mergeProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        const properties = draftImbricateProperties(propertiesDrafter);

        const mergedProperties: ImbricatePropertyRecord = {
            ...this._properties,
            ...properties,
        };

        const currentDocument = await getDocumentByUniqueIdentifier(
            this._basePath,
            this._databaseUniqueIdentifier,
            this._documentUniqueIdentifier,
        );

        if (!currentDocument) {
            return S_Document_PutProperty_Unknown;
        }

        const validationResult: string | null = validateImbricateProperties(
            mergedProperties,
            this._schema,
            true,
        );

        if (typeof validationResult === "string") {
            return S_Document_PutProperty_InvalidValue;
        }

        const operations: Array<DocumentEditOperation<IMBRICATE_DOCUMENT_EDIT_TYPE>> = [];

        for (const key of Object.keys(properties)) {

            const value: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> = properties[key as ImbricatePropertyKey];

            operations.push({
                action: IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_PROPERTY,
                value: {
                    key,
                    type: value.propertyType,
                    value: value.propertyValue,
                    variant: value.propertyVariant,
                },
            });
        }

        const editRecord: DocumentEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this._documentVersion,
            afterVersion: this._documentVersion + 1,
            author: auditOptions?.author,
            operations,
        };

        this._documentVersion += 1;
        this._properties = mergedProperties;

        const updatedDocument: ImbricateFileSystemDocumentInstance = {
            ...currentDocument,
            properties: propertyRecordToInstanceRecord(mergedProperties),
        };

        await putDocument(
            this._basePath,
            this._databaseUniqueIdentifier,
            updatedDocument,
        );

        return {
            editRecords: [editRecord],
        };
    }

    public async replaceProperties(
        propertiesDrafter: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutPropertyOutcome> {

        const properties: ImbricatePropertyRecord = draftImbricateProperties(propertiesDrafter);

        const currentDocument = await getDocumentByUniqueIdentifier(
            this._basePath,
            this._databaseUniqueIdentifier,
            this._documentUniqueIdentifier,
        );

        if (!currentDocument) {
            return S_Document_PutProperty_Unknown;
        }

        const validationResult: string | null = validateImbricateProperties(
            properties,
            this._schema,
            true,
        );

        if (typeof validationResult === "string") {
            return S_Document_PutProperty_InvalidValue;
        }

        const operations: Array<DocumentEditOperation<IMBRICATE_DOCUMENT_EDIT_TYPE>> = [];

        for (const key of Object.keys(properties)) {

            const value: IImbricateProperty<IMBRICATE_PROPERTY_TYPE> = properties[key as ImbricatePropertyKey];

            operations.push({
                action: IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_PROPERTY,
                value: {
                    key,
                    type: value.propertyType,
                    value: value.propertyValue,
                    variant: value.propertyVariant,
                },
            });
        }

        const editRecord: DocumentEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this._documentVersion,
            afterVersion: this._documentVersion + 1,
            author: auditOptions?.author,
            operations,
        };

        this._documentVersion += 1;
        this._properties = properties;

        const updatedDocument: ImbricateFileSystemDocumentInstance = {
            ...currentDocument,
            properties: propertyRecordToInstanceRecord(properties),
        };

        await putDocument(
            this._basePath,
            this._databaseUniqueIdentifier,
            updatedDocument,
        );

        return {
            editRecords: [editRecord],
        };
    }

    public async putAnnotation(
        namespace: string,
        identifier: string,
        value: DocumentAnnotationValue,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentPutAnnotationOutcome> {

        const currentDocument = await getDocumentByUniqueIdentifier(
            this._basePath,
            this._databaseUniqueIdentifier,
            this._documentUniqueIdentifier,
        );

        if (!currentDocument) {
            return S_Document_PutAnnotation_Unknown;
        }

        const annotationKey: string = `${namespace}/${identifier}`;

        const newAnnotations: Record<string, DocumentAnnotationValue> = {
            ...currentDocument.annotations,
            [annotationKey]: value,
        };

        const editRecord: DocumentEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this.documentVersion,
            afterVersion: this.documentVersion + 1,
            author: auditOptions?.author,
            operations: [
                {
                    action: IMBRICATE_DOCUMENT_EDIT_TYPE.PUT_ANNOTATION,
                    value: {
                        annotationIdentifier: identifier,
                        annotationNamespace: namespace,
                        data: value,
                    },
                },
            ],
        };

        const updatedDocument: ImbricateFileSystemDocumentInstance = {
            ...currentDocument,
            annotations: newAnnotations,
        };

        this._documentVersion += 1;
        this._annotations = newAnnotations;

        await putDocument(
            this._basePath,
            this._databaseUniqueIdentifier,
            updatedDocument,
        );

        return {
            editRecords: [editRecord],
        };
    }

    public async deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDocumentDeleteAnnotationOutcome> {

        const currentDocument = await getDocumentByUniqueIdentifier(
            this._basePath,
            this._databaseUniqueIdentifier,
            this._documentUniqueIdentifier,
        );

        if (!currentDocument) {
            return S_Document_DeleteAnnotation_Unknown;
        }

        const annotationKey: string = `${namespace}/${identifier}`;

        const newAnnotations: Record<string, DocumentAnnotationValue> = {
            ...currentDocument.annotations,
        };

        delete newAnnotations[annotationKey];

        const editRecord: DocumentEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this.documentVersion,
            afterVersion: this.documentVersion + 1,
            author: auditOptions?.author,
            operations: [
                {
                    action: IMBRICATE_DOCUMENT_EDIT_TYPE.DELETE_ANNOTATION,
                    value: {
                        annotationIdentifier: identifier,
                        annotationNamespace: namespace,
                    },
                },
            ],
        };

        const updatedDocument: ImbricateFileSystemDocumentInstance = {
            ...currentDocument,
            annotations: newAnnotations,
        };

        this._documentVersion += 1;
        this._annotations = newAnnotations;

        await putDocument(
            this._basePath,
            this._databaseUniqueIdentifier,
            updatedDocument,
        );

        return {
            editRecords: [editRecord],
        };
    }

    public async addEditRecords(
        records: DocumentEditRecord[],
    ): Promise<ImbricateDocumentAddEditRecordsOutcome> {

        const currentDocument = await getDocumentByUniqueIdentifier(
            this._basePath,
            this._databaseUniqueIdentifier,
            this._documentUniqueIdentifier,
        );

        if (!currentDocument) {
            return S_Document_AddEditRecords_Unknown;
        }

        const newEditRecords: DocumentEditRecord[] = this._editRecords.concat(records);

        const updatedDocument: ImbricateFileSystemDocumentInstance = {
            ...currentDocument,
            editRecords: newEditRecords,
        };

        this._editRecords = newEditRecords;

        await putDocument(
            this._basePath,
            this._databaseUniqueIdentifier,
            updatedDocument,
        );

        return {
            editRecords: newEditRecords,
        };
    }

    public async getEditRecords(
    ): Promise<ImbricateDocumentGetEditRecordsOutcome> {

        return {
            editRecords: this._editRecords,
        };
    }

    public async queryOriginActions(
        _query: ImbricateCommonQueryOriginActionsQuery,
    ): Promise<ImbricateCommonQueryOriginActionsOutcome> {

        const actions = getDocumentDocumentAction();

        return {
            actions,
            count: actions.length,
        };
    }

    public async executeOriginAction(
        input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        switch (input.actionIdentifier) {

            case GET_DOCUMENT_PATH_ORIGIN_ACTION_IDENTIFIER: {

                return {
                    response: IMBRICATE_ORIGIN_ACTION_RESULT_STATUS.SUCCESS,
                    outputs: [
                        documentExecuteGetDocumentPathOriginAction(
                            this._basePath,
                            this._databaseUniqueIdentifier,
                            this._documentUniqueIdentifier,
                            input.parameters,
                        ),
                    ],
                    references: [],
                };
            }
        }

        return S_Action_ActionNotFound;
    }
}
