/**
 * @author WMXPY
 * @namespace Database
 * @description Database
 */

import { IImbricateDatabase, ImbricateDatabaseGetDatabaseOutcome, ImbricateDatabaseQueryDatabasesOutcome, ImbricateDatabaseReadonlyBase, ImbricateDocumentQuery } from "@imbricate/core";

export class ImbricateQuickActionDatabase extends ImbricateDatabaseReadonlyBase implements IImbricateDatabase {

    public async getDatabase(databaseUniqueIdentifier: string): Promise<ImbricateDatabaseGetDatabaseOutcome> {
        throw new Error("Method not implemented.");
    }

    public async queryDatabases(query: ImbricateDocumentQuery): Promise<ImbricateDatabaseQueryDatabasesOutcome> {
        throw new Error("Method not implemented.");
    }
}