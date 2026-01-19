/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, IImbricateDocument, IMBRICATE_DATABASE_EDIT_TYPE, IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseAddEditRecordsOutcome, ImbricateDatabaseAuditOptions, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabaseDeleteAnnotationOutcome, ImbricateDatabaseFullFeatureBase, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseGetEditRecordsOutcome, ImbricateDatabasePutAnnotationOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseRemoveDocumentOutcome, ImbricateDocumentAuditOptions, ImbricateDocumentQuery, ImbricatePropertiesDrafter, ImbricatePropertyGenerator, ImbricatePropertyRecord, S_Database_CreateDocument_InvalidProperties, S_Database_DeleteAnnotation_Unknown, S_Database_GetDocument_NotFound, S_Database_PutAnnotation_Unknown, S_Database_PutSchema_Unknown, S_Database_QueryDocuments_InvalidQuery, S_Database_RemoveDocument_NotFound, validateImbricateDocumentQuery, validateImbricateProperties } from "@imbricate/core";
import { IImbricateDatabase } from "@imbricate/core/database/interface";
import { ImbricateDatabaseSchema } from "@imbricate/core/database/schema";
import { UUIDVersion1 } from "@sudoo/uuid";
import { deleteDocument, getDocumentByUniqueIdentifier } from "../document/action";
import { ImbricateFileSystemDocumentInstance } from "../document/definition";
import { ImbricateFileSystemDocument } from "../document/document";
import { draftImbricateProperties } from "../property/draft";
import { getDatabaseMeta, putDatabaseMeta } from "./action";
import { ImbricateFileSystemDatabaseMeta } from "./definition";
import { QueryDocumentsResult, queryDocuments } from "./query";

export class ImbricateFileSystemDatabase extends ImbricateDatabaseFullFeatureBase implements IImbricateDatabase {

    public static create(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
        databaseVersion: string,
        schema: ImbricateDatabaseSchema,
        annotations: DatabaseAnnotations,
    ): ImbricateFileSystemDatabase {

        return new ImbricateFileSystemDatabase(
            basePath,
            uniqueIdentifier,
            databaseName,
            databaseVersion,
            schema,
            annotations,
        );
    }

    private readonly _basePath: string;

    public readonly uniqueIdentifier: string;
    public readonly databaseName: string;

    public databaseVersion: string;

    public schema: ImbricateDatabaseSchema;
    public annotations: DatabaseAnnotations;

    private constructor(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
        databaseVersion: string,
        schema: ImbricateDatabaseSchema,
        annotations: DatabaseAnnotations,
    ) {

        super();

        this._basePath = basePath;

        this.uniqueIdentifier = uniqueIdentifier;
        this.databaseName = databaseName;

        this.databaseVersion = databaseVersion;

        this.schema = schema;
        this.annotations = annotations;
    }

    public async putSchema(
        schema: ImbricateDatabaseSchema,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabasePutSchemaOutcome> {

        const currentMeta = await getDatabaseMeta(this._basePath, this.uniqueIdentifier);

        if (!currentMeta) {
            return S_Database_PutSchema_Unknown;
        }

        const editRecord: DatabaseEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this.databaseVersion,
            afterVersion: this.databaseVersion + 1,
            author: auditOptions?.author,
            operations: [
                {
                    action: IMBRICATE_DATABASE_EDIT_TYPE.PUT_SCHEMA,
                    value: schema,
                },
            ],
        };

        const newMeta: ImbricateFileSystemDatabaseMeta = {
            ...currentMeta,
            schema,
        };

        this.databaseVersion = this.databaseVersion + 1;
        this.schema = schema;
        await putDatabaseMeta(this._basePath, newMeta);

        return {
            editRecords: [editRecord],
        };
    }

    public async putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabasePutAnnotationOutcome> {

        const currentMeta = await getDatabaseMeta(this._basePath, this.uniqueIdentifier);

        if (!currentMeta) {
            return S_Database_PutAnnotation_Unknown;
        }

        const annotationKey: string = `${namespace}/${identifier}`;

        const newAnnotations: DatabaseAnnotations = {
            ...currentMeta.annotations,
            [annotationKey]: value,
        };

        const editRecord: DatabaseEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this.databaseVersion,
            afterVersion: this.databaseVersion + 1,
            author: auditOptions?.author,
            operations: [
                {
                    action: IMBRICATE_DATABASE_EDIT_TYPE.PUT_ANNOTATION,
                    value: {
                        annotationIdentifier: identifier,
                        annotationNamespace: namespace,
                        data: value,
                    },
                },
            ],
        };

        const newMeta: ImbricateFileSystemDatabaseMeta = {
            ...currentMeta,
            annotations: newAnnotations,
        };

        this.databaseVersion = this.databaseVersion + 1;
        this.annotations = newAnnotations;
        await putDatabaseMeta(this._basePath, newMeta);

        return {
            editRecords: [editRecord],
        };
    }

    public async deleteAnnotation(
        namespace: string,
        identifier: string,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabaseDeleteAnnotationOutcome> {

        const currentMeta = await getDatabaseMeta(this._basePath, this.uniqueIdentifier);

        if (!currentMeta) {
            return S_Database_DeleteAnnotation_Unknown;
        }

        const annotationKey: string = `${namespace}/${identifier}`;

        const newAnnotations: DatabaseAnnotations = {
            ...currentMeta.annotations,
        };

        delete newAnnotations[annotationKey];

        const editRecord: DatabaseEditRecord = {
            uniqueIdentifier: UUIDVersion1.generateString(),
            editAt: new Date(),
            beforeVersion: this.databaseVersion,
            afterVersion: this.databaseVersion + 1,
            author: auditOptions?.author,
            operations: [
                {
                    action: IMBRICATE_DATABASE_EDIT_TYPE.DELETE_ANNOTATION,
                    value: {
                        annotationIdentifier: identifier,
                        annotationNamespace: namespace,
                    },
                },
            ],
        };

        const newMeta: ImbricateFileSystemDatabaseMeta = {
            ...currentMeta,
            annotations: newAnnotations,
        };

        this.databaseVersion = this.databaseVersion + 1;
        this.annotations = newAnnotations;
        await putDatabaseMeta(this._basePath, newMeta);

        return {
            editRecords: [editRecord],
        };
    }

    public async createDocument(
        propertiesDraft: ImbricatePropertiesDrafter,
        auditOptions?: ImbricateDatabaseAuditOptions,
    ): Promise<ImbricateDatabaseCreateDocumentOutcome> {

        const properties: ImbricatePropertyRecord = draftImbricateProperties(propertiesDraft);

        const validationResult: string | null = validateImbricateProperties(
            properties,
            this.schema,
            true,
        );

        if (typeof validationResult === "string") {
            return S_Database_CreateDocument_InvalidProperties;
        }

        const documentUniqueIdentifier: string = UUIDVersion1.generateString();

        const drafter: ImbricatePropertiesDrafter = (
            generator: ImbricatePropertyGenerator<IMBRICATE_PROPERTY_TYPE>,
        ) => {

            return Object.entries(properties).map(([key, value]) => {
                return generator(key, value.propertyType, value.propertyValue, value.propertyVariant);
            });
        };

        const document: IImbricateDocument = await ImbricateFileSystemDocument
            .fromScratchAndSave(
                this.schema,
                this._basePath,
                this.uniqueIdentifier,
                documentUniqueIdentifier,
                drafter,
                auditOptions?.author,
            );

        return {
            document,
        };
    }

    public async getDocument(
        uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseGetDocumentOutcome> {

        const documentInstance: ImbricateFileSystemDocumentInstance | null =
            await getDocumentByUniqueIdentifier(
                this._basePath,
                this.uniqueIdentifier,
                uniqueIdentifier,
            );

        if (!documentInstance) {
            return S_Database_GetDocument_NotFound;
        }

        const document: IImbricateDocument = ImbricateFileSystemDocument.fromInstance(
            this.schema,
            this._basePath,
            this.uniqueIdentifier,
            documentInstance,
        );

        return {
            document,
        };
    }

    public async countDocuments(
        query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseCountDocumentsOutcome> {

        const documents: QueryDocumentsResult = await queryDocuments(
            this._basePath,
            this.uniqueIdentifier,
            this.schema,
            query,
        );

        return {
            count: documents.count,
        };
    }

    public async queryDocuments(
        query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseQueryDocumentsOutcome> {

        const queryValidationResult: string | null = validateImbricateDocumentQuery(
            query,
        );

        if (typeof queryValidationResult === "string") {
            return S_Database_QueryDocuments_InvalidQuery;
        }

        const documents: QueryDocumentsResult = await queryDocuments(
            this._basePath,
            this.uniqueIdentifier,
            this.schema,
            query,
        );

        return {
            documents: documents.documents,
            count: documents.count,
        };
    }

    public async removeDocument(
        uniqueIdentifier: string,
        _auditOptions?: ImbricateDocumentAuditOptions,
    ): Promise<ImbricateDatabaseRemoveDocumentOutcome> {

        const document: ImbricateDatabaseGetDocumentOutcome = await this.getDocument(uniqueIdentifier);

        if (typeof document === "symbol") {
            return S_Database_RemoveDocument_NotFound;
        }

        await deleteDocument(
            this._basePath,
            this.uniqueIdentifier,
            uniqueIdentifier,
        );

        return {
            success: true,
        };
    }

    public async addEditRecords(
        _records: DatabaseEditRecord[],
    ): Promise<ImbricateDatabaseAddEditRecordsOutcome> {

        throw new Error("Method not implemented.");
    }

    public async getEditRecords(): Promise<ImbricateDatabaseGetEditRecordsOutcome> {

        throw new Error("Method not implemented.");
    }
}
