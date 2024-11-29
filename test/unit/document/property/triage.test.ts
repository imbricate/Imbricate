/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage
 * @override Unit Test
 */

import { DocumentProperties, IMBRICATE_PROPERTY_TYPE, triageImbricateDocumentProperties } from "../../../../src";

describe("Given [Document-Property-Triage] helper methods", (): void => {

    it("should be able to triage single property", (): void => {

        const properties: DocumentProperties = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        };

        const result = triageImbricateDocumentProperties(properties)
            .forString(() => "string")
            .collectAsArray();

        expect(result).toStrictEqual(["string"]);
    });

    it("should be able to triage single property - not match", (): void => {

        const properties: DocumentProperties = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        };

        const result = triageImbricateDocumentProperties(properties)
            .forNumber(() => "number")
            .collectAsArray();

        expect(result).toStrictEqual([]);
    });

    it("should be able to triage multiple property", (): void => {

        const properties: DocumentProperties = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
            number: {
                type: IMBRICATE_PROPERTY_TYPE.NUMBER,
                value: 1,
            },
        };

        const result = triageImbricateDocumentProperties(properties)
            .forString(() => "string")
            .forNumber(() => "number")
            .collectAsArray();

        expect(result).toStrictEqual(["string", "number"]);
    });
});
