/**
 * @author WMXPY
 * @namespace Document
 * @description Update
 */

import { IImbricateOrigin, IMBRICATE_PROPERTY_TYPE } from "@imbricate/core";
import assert from "node:assert";
import { ImbricateOriginTestingTarget } from "../testing-target";
import { comparePropertiesOutcome } from "../util/compare-property";

export const startImbricateOriginDocumentUpdateTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describe("Test Imbricate Document (Update) Functions", () => {

        const identifierMap: Record<string, string> = {};

        beforeAll(async () => {

            await testingTarget.resetOrigin();
        });

        beforeAll(async () => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            await databaseManager.createDatabase("test-database", {
                properties: [{
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: null,
                    propertyOptions: {},
                }],
            });
        });

        it("should be able to create document with initial properties", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            expect(databases.databases).toHaveLength(1);

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const createdDocument = await database.createDocument((createProperty) => {

                return [
                    createProperty(
                        identifier,
                        IMBRICATE_PROPERTY_TYPE.STRING,
                        "world",
                        null,
                    ),
                ];
            });

            assert(typeof createdDocument !== "symbol");

            identifierMap.test = createdDocument.document.uniqueIdentifier;

            const documents = await database.queryDocuments({});

            assert(typeof documents !== "symbol");

            expect(documents.documents).toHaveLength(1);
        });

        it("should be able to update document with put property", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const document = await database.getDocument(identifierMap.test);

            assert(typeof document !== "symbol");

            expect(comparePropertiesOutcome(document.document.getProperties(), {
                [identifier]: {
                    type: IMBRICATE_PROPERTY_TYPE.STRING,
                    value: "world",
                    variant: null,
                },
            })).toBeTruthy();

            await document.document.mergeProperties((createProperty) => {
                return [
                    createProperty(
                        identifier,
                        IMBRICATE_PROPERTY_TYPE.STRING,
                        "new-world",
                        null,
                    ),
                ];
            });

            expect(comparePropertiesOutcome(document.document.getProperties(), {
                [identifier]: {
                    type: IMBRICATE_PROPERTY_TYPE.STRING,
                    value: "new-world",
                    variant: null,
                },
            })).toBeTruthy();
        });

        it("should be able to update document with put properties", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const document = await database.getDocument(identifierMap.test);

            assert(typeof document !== "symbol");

            expect(comparePropertiesOutcome(document.document.getProperties(), {
                [identifier]: {
                    type: IMBRICATE_PROPERTY_TYPE.STRING,
                    value: "new-world",
                    variant: null,
                },
            })).toBeTruthy();

            await document.document.replaceProperties((createProperty) => {
                return [
                    createProperty(
                        identifier,
                        IMBRICATE_PROPERTY_TYPE.STRING,
                        "world",
                        null,
                    ),
                ];
            });

            expect(comparePropertiesOutcome(document.document.getProperties(), {
                [identifier]: {
                    type: IMBRICATE_PROPERTY_TYPE.STRING,
                    value: "world",
                    variant: null,
                },
            })).toBeTruthy();
        });

        it("should be able to get edit records without update edit record", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const document = await database.getDocument(identifierMap.test);

            assert(typeof document !== "symbol");

            if (typeof document.document.getEditRecords !== "function") {
                return;
            }

            const records = await document.document.getEditRecords();

            assert(typeof records !== "symbol");

            expect(records.editRecords).toHaveLength(1);
        });

        it("should be able to get edit records after update edit record", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const document = await database.getDocument(identifierMap.test);

            assert(typeof document !== "symbol");

            const editRecords = await document.document.replaceProperties((createProperty) => {
                return [
                    createProperty(
                        identifier,
                        IMBRICATE_PROPERTY_TYPE.STRING,
                        "with-edit-records",
                        null,
                    ),
                ];
            });

            assert(typeof editRecords !== "symbol");

            await document.document.addEditRecords(editRecords.editRecords);

            if (typeof document.document.getEditRecords !== "function") {
                return;
            }

            const records = await document.document.getEditRecords();

            assert(typeof records !== "symbol");

            expect(records.editRecords).toHaveLength(2);
        });
    });
};
