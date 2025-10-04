/**
 * @namespace Database
 * @description Schema
 * @override Unit Test
 */

import { validateImbricateSchema } from "../../../src/database/schema";
import { IMBRICATE_PROPERTY_TYPE } from "../../../src/property/type";

describe("Given [Database Schema] methods", (): void => {

    test("should be able to validate schema", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateSchema(testSchema);

        expect(result).toBeNull();
    });

    test("should be able to invalidate schema - properties not array", (): void => {

        const testSchema: any = {
            properties: "test",
        };

        const result: string | null = validateImbricateSchema(testSchema);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate schema - invalid property", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                },
            ],
        };

        const result: string | null = validateImbricateSchema(testSchema);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate schema - invalid property type", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: "INVALID",
                },
            ],
        };

        const result: string | null = validateImbricateSchema(testSchema);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate schema - duplicate property name", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateSchema(testSchema);

        expect(typeof result).toStrictEqual("string");
    });
});
