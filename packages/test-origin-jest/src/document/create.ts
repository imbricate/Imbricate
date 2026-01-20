/**
 * @author WMXPY
 * @namespace Document
 * @description Create
 */

import { IImbricateOrigin, IMBRICATE_PROPERTY_TYPE } from "@imbricate/core";
import assert from "node:assert";
import { ImbricateOriginTestingTarget } from "../testing-target";
import { comparePropertiesOutcome } from "../util/compare-property";

export const startImbricateOriginDocumentCreateTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describe("Test Imbricate Document (Create) Functions", () => {

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

        it("should be able to create document", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const createdDocument = await database.createDocument((createProperty) => [
                createProperty(
                    identifier,
                    IMBRICATE_PROPERTY_TYPE.STRING,
                    "world",
                    null,
                ),
            ]);

            assert(typeof createdDocument !== "symbol");

            identifierMap.test = createdDocument.document.uniqueIdentifier;

            const documents = await database.queryDocuments({});

            assert(typeof documents !== "symbol");

            expect(documents.documents).toHaveLength(1);
        });

        it("should be able to get document by unique identifier", async (): Promise<void> => {

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
        });

        it("should be able to create document with variant property", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const databases = await databaseManager.queryDatabases({});

            assert(typeof databases !== "symbol");

            const database = databases.databases[0];

            const identifier = database.schema.properties[0].propertyIdentifier;
            assert(identifier !== null);

            const createdDocument = await database.createDocument((createProperty) => [
                createProperty(
                    identifier,
                    IMBRICATE_PROPERTY_TYPE.STRING,
                    "world",
                    "variant",
                ),
            ]);

            assert(typeof createdDocument !== "symbol");

            identifierMap.test = createdDocument.document.uniqueIdentifier;

            const documents = await database.queryDocuments({});

            assert(typeof documents !== "symbol");

            expect(documents.documents).toHaveLength(2);

            const document = documents.documents[1];

            expect(comparePropertiesOutcome(document.getProperties(), {
                [identifier]: {
                    type: IMBRICATE_PROPERTY_TYPE.STRING,
                    value: "world",
                    variant: "variant",
                },
            })).toBeTruthy();
        });
    });
};
