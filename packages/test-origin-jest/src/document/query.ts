/**
 * @author WMXPY
 * @namespace Document
 * @description Query
 */

import { IImbricateOrigin, IMBRICATE_PROPERTY_TYPE } from "@imbricate/core";
import { ImbricateOriginTestingTarget } from "../testing-target";
import assert from "node:assert";

export const startImbricateOriginDocumentQueryTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describe("Test Imbricate Document (Query) Functions", () => {

        const identifierMap: Record<string, string> = {};

        beforeAll(async () => {

            await testingTarget.resetOrigin();
        });

        beforeAll(async () => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const database = await databaseManager.createDatabase("test-database", {
                properties: [{
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: null,
                    propertyOptions: {},
                }],
            });

            assert(typeof database !== "symbol");

            const firstDocument = await database.database.createDocument((createProperty) => [
                createProperty(
                    database.database.schema.properties[0].propertyIdentifier,
                    IMBRICATE_PROPERTY_TYPE.STRING,
                    "first",
                    null,
                ),
            ]);

            const secondDocument = await database.database.createDocument((createProperty) => [
                createProperty(
                    database.database.schema.properties[0].propertyIdentifier,
                    IMBRICATE_PROPERTY_TYPE.STRING,
                    "second",
                    null,
                ),
            ]);

            assert(typeof firstDocument !== "symbol");
            assert(typeof secondDocument !== "symbol");

            identifierMap.database = database.database.uniqueIdentifier;
            identifierMap.first = firstDocument.document.uniqueIdentifier;
            identifierMap.second = secondDocument.document.uniqueIdentifier;
        });

        it("should be able to query all documents", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const database = await databaseManager.getDatabase(identifierMap.database);

            assert(typeof database !== "symbol");

            const documents = await database.database.queryDocuments({});

            assert(typeof documents !== "symbol");

            expect(documents.documents).toHaveLength(2);
        });

        it("should be able to query documents limit and skip", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const databaseManager = origin.getDatabaseManager();

            const database = await databaseManager.getDatabase(identifierMap.database);

            assert(typeof database !== "symbol");

            const limitDocuments = await database.database.queryDocuments({
                limit: 1,
            });

            const skipDocuments = await database.database.queryDocuments({
                skip: 1,
            });

            assert(typeof limitDocuments !== "symbol");
            assert(typeof skipDocuments !== "symbol");

            expect(limitDocuments.documents).toHaveLength(1);
            expect(skipDocuments.documents).toHaveLength(1);

            expect(limitDocuments.documents[0].uniqueIdentifier).not.toEqual(skipDocuments.documents[0].uniqueIdentifier);
        });
    });
};
