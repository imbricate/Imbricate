/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { DatabaseAnnotationValue, DatabaseAnnotations, DatabaseEditRecord, DocumentAnnotations, IImbricateDatabase, IImbricateDocument, IMBRICATE_DATABASE_FEATURE, IMBRICATE_DOCUMENT_FEATURE, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateDatabaseAddEditRecordsOutcome, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabaseDeleteAnnotationOutcome, ImbricateDatabaseFullFeatureWithActionBase, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseGetEditRecordsOutcome, ImbricateDatabasePutAnnotationOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseRemoveDocumentOutcome, ImbricateDatabaseSchema, ImbricateDocumentQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome, ImbricatePropertiesDrafter, ImbricatePropertyRecord, rebuildImbricateCommonQueryOriginActionsSymbol, rebuildImbricateDatabaseCountDocumentsSymbol, rebuildImbricateDatabaseCreateDocumentSymbol, rebuildImbricateDatabaseDeleteAnnotationSymbol, rebuildImbricateDatabaseGetDocumentSymbol, rebuildImbricateDatabaseGetEditRecordsSymbol, rebuildImbricateDatabasePutAnnotationSymbol, rebuildImbricateDatabasePutSchemaSymbol, rebuildImbricateDatabaseQueryDocumentsSymbol, rebuildImbricateDatabaseRemoveDocumentSymbol, rebuildImbricateOriginActionOutcomeSymbol } from "@imbricate/core";
import { ImbricateStackAPIAuthentication } from "../definition";
import { ImbricateStackAPIDocument } from "../document/document";
import { draftImbricateProperties } from "../property/draft";
import { instanceRecordToPropertyRecord, propertyRecordToInstanceRecord } from "../property/parse";
import { ImbricateStackAPIProperty } from "../property/property";
import { axiosClient } from "../util/client";
import { getAxiosErrorSymbol } from "../util/error";
import { buildHeader } from "../util/header";
import { joinUrl } from "../util/path-joiner";

export class ImbricateStackAPIDatabase extends ImbricateDatabaseFullFeatureWithActionBase implements IImbricateDatabase {

    public static create(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
        uniqueIdentifier: string,
        databaseName: string,
        databaseVersion: string,
        supportedFeatures: IMBRICATE_DATABASE_FEATURE[],
        schema: ImbricateDatabaseSchema,
        annotations: DatabaseAnnotations,
    ): ImbricateStackAPIDatabase {

        return new ImbricateStackAPIDatabase(
            basePath,
            authentication,
            uniqueIdentifier,
            databaseName,
            databaseVersion,
            supportedFeatures,
            schema,
            annotations,
        );
    }

    private readonly _basePath: string;
    private readonly _authentication: ImbricateStackAPIAuthentication;

    public readonly uniqueIdentifier: string;
    public readonly databaseName: string;
    public readonly databaseVersion: string;

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[];

    public schema: ImbricateDatabaseSchema;
    public annotations: DatabaseAnnotations;

    private constructor(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
        uniqueIdentifier: string,
        databaseName: string,
        databaseVersion: string,
        supportedFeatures: IMBRICATE_DATABASE_FEATURE[],
        schema: ImbricateDatabaseSchema,
        annotations: DatabaseAnnotations,
    ) {

        super();

        this._basePath = basePath;
        this._authentication = authentication;

        this.uniqueIdentifier = uniqueIdentifier;
        this.databaseName = databaseName;
        this.databaseVersion = databaseVersion;

        this.supportedFeatures = supportedFeatures;

        this.schema = schema;
        this.annotations = annotations;
    }

    public async putSchema(
        schema: ImbricateDatabaseSchema,
    ): Promise<ImbricateDatabasePutSchemaOutcome> {

        try {

            const response = await axiosClient.put(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "schema",
            ), {
                schema,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                editRecords: response.data.editRecords,
            };
        } catch (error) {

            return rebuildImbricateDatabasePutSchemaSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async createDocument(
        propertiesDraft: ImbricatePropertiesDrafter,
    ): Promise<ImbricateDatabaseCreateDocumentOutcome> {

        const properties = draftImbricateProperties(propertiesDraft);

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "create-document",
            ), {
                properties: propertyRecordToInstanceRecord(properties),
            }, {
                headers: buildHeader(this._authentication),
            });

            const documentUniqueIdentifier: string = response.data.documentUniqueIdentifier;
            const supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = response.data.supportedFeatures;

            return {
                document: ImbricateStackAPIDocument.create(
                    this._basePath,
                    this._authentication,
                    this.uniqueIdentifier,
                    documentUniqueIdentifier,
                    response.data.documentVersion,
                    supportedFeatures,
                    properties,
                    {},
                ),
            };
        } catch (error) {

            return rebuildImbricateDatabaseCreateDocumentSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async getDocument(
        uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseGetDocumentOutcome> {

        try {

            const response = await axiosClient.get(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "document",
                uniqueIdentifier,
            ), {
                headers: buildHeader(this._authentication),
            });

            const supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = response.data.supportedFeatures;
            const properties: ImbricatePropertyRecord = instanceRecordToPropertyRecord(response.data.properties);
            const annotations: DocumentAnnotations = response.data.annotations;

            const document = ImbricateStackAPIDocument.create(
                this._basePath,
                this._authentication,
                this.uniqueIdentifier,
                uniqueIdentifier,
                response.data.documentVersion,
                supportedFeatures,
                properties,
                annotations,
            );

            return {
                document,
            };
        } catch (error) {

            return rebuildImbricateDatabaseGetDocumentSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async countDocuments(
        query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseCountDocumentsOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "count-documents",
            ), {
                query,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                count: response.data.count,
            };
        } catch (error) {

            return rebuildImbricateDatabaseCountDocumentsSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async queryDocuments(
        query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseQueryDocumentsOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "query-documents",
            ), {
                query,
            }, {
                headers: buildHeader(this._authentication),
            });

            const documents = response.data.documents;

            const result: IImbricateDocument[] = documents.map((document: any) => {

                const supportedFeatures: IMBRICATE_DOCUMENT_FEATURE[] = document.supportedFeatures;

                const propertiesRecord: ImbricatePropertyRecord = Object.keys(
                    document.properties,
                ).reduce((
                    current: ImbricatePropertyRecord,
                    key: string,
                ) => {
                    return {
                        ...current,
                        [key]: ImbricateStackAPIProperty.create(
                            key,
                            document.properties[key].type,
                            document.properties[key].value,
                            document.properties[key].variant,
                        ),
                    };
                }, {});

                return ImbricateStackAPIDocument.create(
                    this._basePath,
                    this._authentication,
                    this.uniqueIdentifier,
                    document.documentUniqueIdentifier,
                    document.documentVersion,
                    supportedFeatures,
                    propertiesRecord,
                    document.annotations,
                );
            });

            return {
                documents: result,
                count: response.data.count,
            };
        } catch (error) {

            return rebuildImbricateDatabaseQueryDocumentsSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async removeDocument(
        uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseRemoveDocumentOutcome> {

        try {

            await axiosClient.delete(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "document",
                uniqueIdentifier,
            ), {
                headers: buildHeader(this._authentication),
            });

            return {
                success: true,
            };
        } catch (error) {

            return rebuildImbricateDatabaseRemoveDocumentSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async addEditRecords(
        _editRecords: DatabaseEditRecord[],
    ): Promise<ImbricateDatabaseAddEditRecordsOutcome> {

        throw new Error("Method not implemented.");
    }

    public async getEditRecords(): Promise<ImbricateDatabaseGetEditRecordsOutcome> {

        try {

            const response = await axiosClient.get(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "edit-records",
            ), {
                headers: buildHeader(this._authentication),
            });

            return {
                editRecords: response.data.editRecords,
            };
        } catch (error) {

            return rebuildImbricateDatabaseGetEditRecordsSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async putAnnotation(
        namespace: string,
        identifier: string,
        value: DatabaseAnnotationValue,
    ): Promise<ImbricateDatabasePutAnnotationOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "put-annotation",
            ), {
                namespace,
                identifier,
                value,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                editRecords: response.data.editRecords,
            };
        } catch (error) {

            return rebuildImbricateDatabasePutAnnotationSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async deleteAnnotation(
        namespace: string,
        identifier: string,
    ): Promise<ImbricateDatabaseDeleteAnnotationOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "delete-annotation",
            ), {
                namespace,
                identifier,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                editRecords: response.data.editRecords,
            };
        } catch (error) {

            return rebuildImbricateDatabaseDeleteAnnotationSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): Promise<ImbricateCommonQueryOriginActionsOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "query-origin-actions",
            ), {
                query,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                actions: response.data.actions,
                count: response.data.count,
            };
        } catch (error) {

            return rebuildImbricateCommonQueryOriginActionsSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async executeOriginAction(
        input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "database",
                this.uniqueIdentifier,
                "execute-origin-action",
            ), {
                actionIdentifier: input.actionIdentifier,
                parameters: input.parameters,
            }, {
                headers: buildHeader(this._authentication),
            });

            return {
                response: response.data.response,
                outputs: response.data.outputs,
                references: response.data.references,
            };
        } catch (error) {

            return rebuildImbricateOriginActionOutcomeSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }
}
