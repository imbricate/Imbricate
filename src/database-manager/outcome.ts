/**
 * @author WMXPY
 * @namespace DatabaseManager
 * @description Outcome
 */

import { IImbricateDatabase } from "../database/interface";

// Manager List Databases
export const S_DatabaseManager_ListDatabases_Stale: unique symbol = Symbol("DatabaseManager_ListDatabases_Stale");
export const S_DatabaseManager_ListDatabases_Unknown: unique symbol = Symbol("DatabaseManager_ListDatabases_Unknown");

export type ImbricateDatabaseManagerListDatabasesOutcomeSymbol =
    | typeof S_DatabaseManager_ListDatabases_Stale
    | typeof S_DatabaseManager_ListDatabases_Unknown;

export type ImbricateDatabaseManagerListDatabasesOutcome = {

    readonly databases: IImbricateDatabase[];
} | ImbricateDatabaseManagerListDatabasesOutcomeSymbol;

// Manager Get Database
export const S_DatabaseManager_GetDatabase_NotFound: unique symbol = Symbol("DatabaseManager_GetDatabase_NotFound");
export const S_DatabaseManager_GetDatabase_Unknown: unique symbol = Symbol("DatabaseManager_GetDatabase_Unknown");

export type ImbricateDatabaseManagerGetDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_GetDatabase_NotFound
    | typeof S_DatabaseManager_GetDatabase_Unknown;

export type ImbricateDatabaseManagerGetDatabaseOutcome = {

    readonly database: IImbricateDatabase;
} | ImbricateDatabaseManagerGetDatabaseOutcomeSymbol;

// Manager Create Database
export const S_DatabaseManager_CreateDatabase_IdentifierDuplicated: unique symbol = Symbol("DatabaseManager_CreateDatabase_IdentifierDuplicated");
export const S_DatabaseManager_CreateDatabase_Unknown: unique symbol = Symbol("DatabaseManager_CreateDatabase_Unknown");

export type ImbricateDatabaseManagerCreateDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_CreateDatabase_IdentifierDuplicated
    | typeof S_DatabaseManager_CreateDatabase_Unknown;

export type ImbricateDatabaseManagerCreateDatabaseOutcome = {

    readonly database: IImbricateDatabase;
} | ImbricateDatabaseManagerCreateDatabaseOutcomeSymbol;

// Manager Remove Database
export const S_DatabaseManager_RemoveDatabase_NotFound: unique symbol = Symbol("DatabaseManager_RemoveDatabase_NotFound");
export const S_DatabaseManager_RemoveDatabase_Unknown: unique symbol = Symbol("DatabaseManager_RemoveDatabase_Unknown");

export type ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbol =
    | typeof S_DatabaseManager_RemoveDatabase_NotFound
    | typeof S_DatabaseManager_RemoveDatabase_Unknown;

export type ImbricateDatabaseManagerRemoveDatabaseOutcome = {

    readonly success: boolean;
} | ImbricateDatabaseManagerRemoveDatabaseOutcomeSymbol;
