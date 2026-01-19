/**
 * @namespace Database
 * @description Validate
 * @override Unit Test
 */

import { validateImbricateDocumentQuery } from "../../../src";

describe("Given [Database-Validate] helper methods", (): void => {

    it("should be able to validate imbricate document query", (): void => {

        const query: any = {
            limit: 10,
            skip: 10,
            propertyFilters: [
                {
                    propertyIdentifier: "test",
                    target: "PROPERTY_TYPE",
                    attribute: "VALUE",
                    condition: "EQUAL",
                    value: "test",
                },
            ],
            annotationFilters: [
                {
                    namespace: "test",
                    identifier: "test",
                    attribute: "VALUE",
                    condition: "EQUAL",
                    value: "test",
                },
            ],
        };

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(result).toBeNull();
    });

    it("should be able to validate imbricate document query - invalid query", (): void => {

        const query: any = "test";

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(typeof result).toStrictEqual("string");
    });

    it("should be able to validate imbricate document query - invalid limit", (): void => {

        const query: any = {
            limit: "test",
        };

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(typeof result).toStrictEqual("string");
    });

    it("should be able to validate imbricate document query - invalid skip", (): void => {

        const query: any = {
            skip: "test",
        };

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(typeof result).toStrictEqual("string");
    });

    it("should be able to validate imbricate document query - invalid property filters", (): void => {

        const query: any = {
            propertyFilters: "test",
        };

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(typeof result).toStrictEqual("string");
    });

    it("should be able to validate imbricate document query - invalid annotation filters", (): void => {

        const query: any = {
            annotationFilters: "test",
        };

        const result: string | null = validateImbricateDocumentQuery(query as any);

        expect(typeof result).toStrictEqual("string");
    });
});
