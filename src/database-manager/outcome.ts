/**
 * @namespace DatabaseManager
 * @description Outcome
 */

import { CommonOutcomeSymbol } from "../common/outcome";
import { IImbricateDatabase } from "../database/interface";
import { createRebuildImbricateSymbolFunction } from "../util/rebuild-symbol";

// Manager Query Databases
export const S_DatabaseManager_QueryDatabases_Stale: unique symbol = Symbol("DatabaseManager_QueryDatabases_Stale");
export const S_DatabaseManager_QueryDatabases_Unknown: unique symbol = Symbol("DatabaseManager_QueryDatabases_Unknown");

export type ImbricateDatabaseManagerQueryDatabasesOutcomeSymbol =
    | typeof S_DatabaseManager_QueryDatabases_Stale
    | typeof S_DatabaseManager_QueryDatabases_Unknown;

export const ImbricateDatabaseManagerQueryDatabasesOutcomeSymbolList: ImbricateDatabaseManagerQueryDatabasesOutcomeSymbol[] = [
    S_DatabaseManager_QueryDatabases_Stale,
    S_DatabaseManager_QueryDatabases_Unknown,
];

export const rebuildImbricateDatabaseManagerQueryDatabasesSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseManagerQueryDatabasesOutcomeSymbolList,
    S_DatabaseManager_QueryDatabases_Unknown,
);

export type ImbricateDatabaseManagerQueryDatabasesOutcome = {

    readonly databases: IImbricateDatabase[];
    readonly count: number;
} | CommonOutcomeSymbol | ImbricateDatabaseManagerQueryDatabasesOutcomeSymbol;

// Manager Get Database
export const S_DatabaseManager_GetDatabase_NotFound: unique symbol = Symbol("DatabaseManager_GetDatabase_NotFound");
export const S_DatabaseManager_GetDatabase_Unknown: unique symbol = Symbol("DatabaseManager_GetDatabase_Unknown");

export type ImbricateDatabaseManagerGetDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_GetDatabase_NotFound
    | typeof S_DatabaseManager_GetDatabase_Unknown;

export const ImbricateDatabaseManagerGetDatabaseOutcomeSymbolList: ImbricateDatabaseManagerGetDatabaseOutcomeSymbol[] = [
    S_DatabaseManager_GetDatabase_NotFound,
    S_DatabaseManager_GetDatabase_Unknown,
];

export const rebuildImbricateDatabaseManagerGetDatabaseSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseManagerGetDatabaseOutcomeSymbolList,
    S_DatabaseManager_GetDatabase_Unknown,
);

export type ImbricateDatabaseManagerGetDatabaseOutcome = {

    readonly database: IImbricateDatabase;
} | CommonOutcomeSymbol | ImbricateDatabaseManagerGetDatabaseOutcomeSymbol;

// Manager Create Database
export const S_DatabaseManager_CreateDatabase_IdentifierDuplicated: unique symbol = Symbol("DatabaseManager_CreateDatabase_IdentifierDuplicated");
export const S_DatabaseManager_CreateDatabase_DatabaseNameDuplicated: unique symbol = Symbol("DatabaseManager_CreateDatabase_DatabaseNameDuplicated");
export const S_DatabaseManager_CreateDatabase_InvalidSchema: unique symbol = Symbol("DatabaseManager_CreateDatabase_InvalidSchema");
export const S_DatabaseManager_CreateDatabase_Unknown: unique symbol = Symbol("DatabaseManager_CreateDatabase_Unknown");

export type ImbricateDatabaseManagerCreateDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_CreateDatabase_IdentifierDuplicated
    | typeof S_DatabaseManager_CreateDatabase_DatabaseNameDuplicated
    | typeof S_DatabaseManager_CreateDatabase_InvalidSchema
    | typeof S_DatabaseManager_CreateDatabase_Unknown;

export const ImbricateDatabaseManagerCreateDatabaseOutcomeSymbolList: ImbricateDatabaseManagerCreateDatabaseOutcomeSymbol[] = [
    S_DatabaseManager_CreateDatabase_IdentifierDuplicated,
    S_DatabaseManager_CreateDatabase_Unknown,
];

export const rebuildImbricateDatabaseManagerCreateDatabaseSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseManagerCreateDatabaseOutcomeSymbolList,
    S_DatabaseManager_CreateDatabase_Unknown,
);

export type ImbricateDatabaseManagerCreateDatabaseOutcome = {

    readonly database: IImbricateDatabase;
} | CommonOutcomeSymbol | ImbricateDatabaseManagerCreateDatabaseOutcomeSymbol;

// Manager Remove Database
export const S_DatabaseManager_RemoveDatabase_NotFound: unique symbol = Symbol("DatabaseManager_RemoveDatabase_NotFound");
export const S_DatabaseManager_RemoveDatabase_Unknown: unique symbol = Symbol("DatabaseManager_RemoveDatabase_Unknown");

export type ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_RemoveDatabase_NotFound
    | typeof S_DatabaseManager_RemoveDatabase_Unknown;

export const ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbolList: ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbol[] = [
    S_DatabaseManager_RemoveDatabase_NotFound,
    S_DatabaseManager_RemoveDatabase_Unknown,
];

export const rebuildImbricateDatabaseManagerRemoveDatabaseSymbol = createRebuildImbricateSymbolFunction(
    ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbolList,
    S_DatabaseManager_RemoveDatabase_Unknown,
);

export type ImbricateDatabaseManagerRemoveDatabaseOutcome = {

    readonly success: boolean;
} | CommonOutcomeSymbol | ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbol;
