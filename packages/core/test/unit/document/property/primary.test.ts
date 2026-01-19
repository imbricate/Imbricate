/**
 * @namespace Document_Property
 * @description Primary
 * @override Unit Test
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseSchema, ImbricatePropertyRecord, findPrimaryProperty } from "../../../../src";
import { MockProperty } from "../../../mock/property";

describe("Given [Document-Property-Primary] helper methods", (): void => {

    it("should be able to find primary property", (): void => {

        const schema: ImbricateDatabaseSchema = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: "TEST_VARIANT",
                    propertyOptions: {},
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: ImbricatePropertyRecord = {
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
        };

        const result = findPrimaryProperty(schema, properties);

        expect(result).toStrictEqual(MockProperty.create(
            IMBRICATE_PROPERTY_TYPE.STRING,
            "test",
        ));
    });

    it("should be able to find primary property - null", (): void => {

        const schema: ImbricateDatabaseSchema = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: "TEST_VARIANT",
                    propertyOptions: {},
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: ImbricatePropertyRecord = {};

        const result = findPrimaryProperty(schema, properties);

        expect(result).toBeNull();
    });

    it("should be able to find primary property - not primary", (): void => {

        const schema: ImbricateDatabaseSchema = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyVariant: "TEST_VARIANT",
                    propertyOptions: {},
                    isPrimaryKey: false,
                },
            ],
        };

        const properties: ImbricatePropertyRecord = {
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
        };

        const result = findPrimaryProperty(schema, properties);

        expect(result).toBeNull();
    });
});
