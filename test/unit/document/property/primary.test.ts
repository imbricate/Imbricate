/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Primary
 * @override Unit Test
 */

import { IMBRICATE_PROPERTY_TYPE, findPrimaryProperty } from "../../../../src";

describe("Given [Document-Property-Primary] helper methods", (): void => {

    it("should be able to find primary property", (): void => {

        const schema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: any = {
            test: {
                type: IMBRICATE_PROPERTY_TYPE.STRING,
                value: "test",
            },
        };

        const result: any = findPrimaryProperty(schema, properties);

        expect(result).toStrictEqual({
            type: IMBRICATE_PROPERTY_TYPE.STRING,
            value: "test",
        });
    });

    it("should be able to find primary property - null", (): void => {

        const schema: any = {
            properties: [
                {
                    propertyIdentifier: "test",
                    propertyName: "test",
                    propertyType: IMBRICATE_PROPERTY_TYPE.STRING,
                    isPrimaryKey: true,
                },
            ],
        };

        const properties: any = {};

        const result: any = findPrimaryProperty(schema, properties);

        expect(result).toBeNull();
    });
});
