/**
 * @author WMXPY
 * @namespace Database
 * @description Create
 */

import { IImbricateOrigin, IMBRICATE_PROPERTY_TYPE } from "@imbricate/core";
import { ImbricateOriginTestingTarget } from "../testing-target";
import assert from "assert";

export const startImbricateOriginDatabaseCreateTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describe("Test Imbricate Database (Create) Functions", () => {

        beforeAll(async () => {

            await testingTarget.resetOrigin();
        });

        it("should be able to create database", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            await databaseManager.createDatabase("test-database", {
                properties: [{
                    propertyName: "test-property",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: null,
                    propertyOptions: {},
                }],
            });

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            expect(databases.databases).toHaveLength(1);
        });

        it("should be able to create database with variant", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            await databaseManager.createDatabase("test-database-variant", {
                properties: [{
                    propertyName: "test-property",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: "test-variant",
                    propertyOptions: {},
                }],
            });

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            expect(databases.databases).toHaveLength(2);
        });

        it("should be able get database by variant", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const variantDatabase = databases.databases.find((database) => database.databaseName === "test-database-variant");

            assert(typeof variantDatabase !== "symbol");

            expect(variantDatabase!.schema.properties[0].propertyVariant).toBe("test-variant");
        });
    });
};
