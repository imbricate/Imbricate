/**
 * @namespace Property
 * @description Validate
 * @override Unit Test
 */

import { IMBRICATE_PROPERTY_TYPE, validateImbricateProperties } from "../../../src";
import { MockProperty } from "../../mock/property";

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
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
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
            notExist: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
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
            test: MockProperty.create(
                "INVALID" as any,
                "test",
            ),
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
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                123 as any,
            ),
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
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                123 as any,
            ),
        }, testSchema as any);

        expect(typeof result).toStrictEqual("string");
    });
});
