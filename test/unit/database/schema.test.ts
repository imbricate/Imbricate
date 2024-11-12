/**
 * @author WMXPY
 * @namespace Database
 * @description Schema
 * @override Unit Test
 */

import { validateImbricateSchema } from "../../../src/database/schema";

describe("Given [Database Schema] methods", (): void => {

    test("should be able to validate schema", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: "STRING",
                },
            ],
        };

        const result: boolean = validateImbricateSchema(testSchema);

        expect(result).toBeTruthy();
    });

    test("should be able to invalidate schema - properties not array", (): void => {

        const testSchema: any = {
            properties: "test",
        };

        const result: boolean = validateImbricateSchema(testSchema);

        expect(result).toBeFalsy();
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

        const result: boolean = validateImbricateSchema(testSchema);

        expect(result).toBeFalsy();
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

        const result: boolean = validateImbricateSchema(testSchema);

        expect(result).toBeFalsy();
    });

    test("should be able to invalidate schema - duplicate property name", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: "STRING",
                },
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: "STRING",
                },
            ],
        };

        const result: boolean = validateImbricateSchema(testSchema);

        expect(result).toBeFalsy();
    });
});
