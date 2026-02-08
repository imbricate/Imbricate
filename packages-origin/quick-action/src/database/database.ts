/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { IImbricateDatabase, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseEssentialReadOnlyBase, ImbricateDatabaseGetDatabaseOutcome, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseQueryDatabasesOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseReadonlyBase, ImbricateDatabaseSchema, ImbricateDocumentQuery } from "@imbricate/core";

export class ImbricateQuickActionDatabase extends ImbricateDatabaseEssentialReadOnlyBase implements IImbricateDatabase {

    public static create(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
        schema: ImbricateDatabaseSchema,
    ): ImbricateQuickActionDatabase {

        return new ImbricateQuickActionDatabase(
            basePath,
            uniqueIdentifier,
            databaseName,
            schema,
        );
    }

    private readonly _basePath: string;

    public readonly uniqueIdentifier: string;
    public readonly databaseName: string;
    public schema: ImbricateDatabaseSchema;

    private constructor(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
        schema: ImbricateDatabaseSchema,
    ) {
        super();

        this._basePath = basePath;

        this.uniqueIdentifier = uniqueIdentifier;
        this.databaseName = databaseName;
        this.schema = schema;
    }

    public get databaseVersion(): string {

        return "Default";
    }

    public getDocument(uniqueIdentifier: string): PromiseLike<ImbricateDatabaseGetDocumentOutcome> {
        throw new Error("Method not implemented.");
    }

    public queryDocuments(query: ImbricateDocumentQuery): PromiseLike<ImbricateDatabaseQueryDocumentsOutcome> {
        throw new Error("Method not implemented.");
    }

    public countDocuments(query: ImbricateDocumentQuery): PromiseLike<ImbricateDatabaseCountDocumentsOutcome> {
        throw new Error("Method not implemented.");
    }
}
