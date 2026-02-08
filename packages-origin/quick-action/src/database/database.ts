/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { IImbricateDatabase, IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseCountDocumentsOutcome, ImbricateDatabaseEssentialReadOnlyBase, ImbricateDatabaseGetDocumentOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDatabaseSchema, ImbricateDocumentQuery } from "@imbricate/core";

export class ImbricateQuickActionDatabase extends ImbricateDatabaseEssentialReadOnlyBase implements IImbricateDatabase {

    public static create(
        basePath: string,
        databaseName: string,
    ): ImbricateQuickActionDatabase {

        return new ImbricateQuickActionDatabase(
            basePath,
            databaseName,
        );
    }

    private readonly _basePath: string;

    public readonly databaseName: string;

    private constructor(
        basePath: string,
        databaseName: string,
    ) {
        super();

        this._basePath = basePath;

        this.databaseName = databaseName;
    }

    public get uniqueIdentifier(): string {

        return this.databaseName;
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
