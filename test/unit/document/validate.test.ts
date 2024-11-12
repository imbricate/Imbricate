/**
 * @author WMXPY
 * @namespace Document
 * @description Validate
 * @override Unit Test
 */

import { IMBRICATE_PROPERTY_TYPE, validateImbricateProperties } from "../../../src";

describe("Given [Document Validate] methods", (): void => {

    test("should be able to validate property", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateProperties({
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        }, testSchema as any);

        expect(result).toBeNull();
    });

    test("should be able to invalidate property - not object", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateProperties("test" as any, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate property - invalid property", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateProperties({
            notExist: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        }, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate property - invalid property type", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateProperties({
            test: {
                type: "INVALID" as any,
                value: "test",
            },
        }, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate property - invalid property value", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                },
            ],
        };

        const result: string | null = validateImbricateProperties({
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: 123 as any,
            },
        }, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });

    test("should be able to invalidate property - invalid property value type", (): void => {

        const testSchema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.MARKDOWN,
                },
            ],
        };

        const result: string | null = validateImbricateProperties({
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: 123 as any,
            },
        }, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });
});
