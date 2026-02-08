/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { IImbricateDatabase, IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseEssentialReadOnlyBase, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseSchema, ImbricateDocumentQuery } from "@imbricate/core";

export class ImbricateQuickActionDatabase extends ImbricateDatabaseEssentialReadOnlyBase implements IImbricateDatabase {

    public static create(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
    ): ImbricateQuickActionDatabase {

        return new ImbricateQuickActionDatabase(
            basePath,
            uniqueIdentifier,
            databaseName,
        );
    }

    private readonly _basePath: string;

    public readonly uniqueIdentifier: string;

    public readonly databaseName: string;

    private constructor(
        basePath: string,
        uniqueIdentifier: string,
        databaseName: string,
    ) {
        super();

        this._basePath = basePath;

        this.uniqueIdentifier = uniqueIdentifier;
        this.databaseName = databaseName;
    }

    public get databaseVersion(): string {

        return "Default";
    }

    public get schema(): ImbricateDatabaseSchema {

        return {
            properties: [
                {
                    propertyIdentifier: "action-name",
                    propertyName: "Action Name",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: null,
                    propertyOptions: {},
                    isPrimaryKey: true,
                },
            ],
        };
    }

    public async getDocument(
        _uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseGetDocumentOutcome> {

        throw new Error("Method not implemented.");
    }

    public async queryDocuments(
        _query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseQueryDocumentsOutcome> {

        throw new Error("Method not implemented.");
    }

    public async countDocuments(
        _query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseCountDocumentsOutcome> {

        throw new Error("Method not implemented.");
    }
}
