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

        const result: boolean = validateImbricateProperties({
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        }, testSchema as any);

        expect(result).toBeTruthy();
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

        const result: boolean = validateImbricateProperties("test" as any, testSchema as any);

        expect(result).toBeFalsy();
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

        const result: boolean = validateImbricateProperties({
            notExist: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        }, testSchema as any);

        expect(result).toBeFalsy();
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

        const result: boolean = validateImbricateProperties({
            test: {
                type: "INVALID" as any,
                value: "test",
            },
        }, testSchema as any);

        expect(result).toBeFalsy();
    });
});
