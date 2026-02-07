/**
 * @package Quick Action
 * @namespace Database
 * @description Manager
 */

import { IImbricateDatabaseManager, ImbricateDatabaseManagerGetDatabaseOutcome, ImbricateDatabaseManagerQueryDatabasesOutcome, ImbricateDatabaseManagerReadonlyBase, ImbricateDocumentQuery } from "@imbricate/core";

export class ImbricateQuickActionDatabaseManager extends ImbricateDatabaseManagerReadonlyBase implements IImbricateDatabaseManager {

    public static create(
        basePath: string,
    ): ImbricateQuickActionDatabaseManager {

        return new ImbricateQuickActionDatabaseManager(
            basePath,
        );
    }

    private readonly _basePath: string;

    private constructor(
        basePath: string,
    ) {

        super();

        this._basePath = basePath;
    }

    public async queryDatabases(
        _query: ImbricateDocumentQuery,
    ): Promise<ImbricateDatabaseManagerQueryDatabasesOutcome> {

        throw new Error("Method not implemented.");
    }

    public async getDatabase(
        _uniqueIdentifier: string,
    ): Promise<ImbricateDatabaseManagerGetDatabaseOutcome> {

        throw new Error("Method not implemented.");
    }
}
