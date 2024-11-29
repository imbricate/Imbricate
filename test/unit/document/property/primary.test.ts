/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Primary
 * @override Unit Test
 */

import { DocumentProperties, IMBRICATE_PROPERTY_TYPE, ImbricateDatabaseSchema, findPrimaryProperty } from "../../../../src";

describe("Given [Document-Property-Primary] helper methods", (): void => {

    it("should be able to find primary property", (): void => {

        const schema: ImbricateDatabaseSchema = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyOptions: {},
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: DocumentProperties = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        };

        const result = findPrimaryProperty(schema, properties);

        expect(result).toStrictEqual({
            type: IMBRICATE_PROPERTY_TYPE.STRING,
            value: "test",
        });
    });

    it("should be able to find primary property - null", (): void => {

        const schema: ImbricateDatabaseSchema = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    propertyOptions: {},
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: DocumentProperties = {};

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
                    propertyOptions: {},
                    isPrimaryKey: false,
                },
            ],
        };

        const properties: DocumentProperties = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        };

        const result = findPrimaryProperty(schema, properties);

        expect(result).toBeNull();
    });
});
