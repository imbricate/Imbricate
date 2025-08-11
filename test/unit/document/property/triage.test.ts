/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Triage
 * @override Unit Test
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyRecord, triageImbricateDocumentProperties } from "../../../../src";
import { MockProperty } from "../../../mock/property";

describe("Given [Document-Property-Triage] helper methods", (): void => {

    it("should be able to triage single property", (): void => {

        const properties: ImbricatePropertyRecord = {
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
        };

        const result = triageImbricateDocumentProperties(properties)
            .forString(() => "string")
            .collectAsArray();

        expect(result).toStrictEqual(["string"]);
    });

    it("should be able to triage single property - not match", (): void => {

        const properties: ImbricatePropertyRecord = {
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
        };

        const result = triageImbricateDocumentProperties(properties)
            .forNumber(() => "number")
            .collectAsArray();

        expect(result).toStrictEqual([]);
    });

    it("should be able to triage multiple property", (): void => {

        const properties: ImbricatePropertyRecord = {
            test: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.STRING,
                "test",
            ),
            number: MockProperty.create(
                IMBRICATE_PROPERTY_TYPE.NUMBER,
                1,
            ),
        };

        const result = triageImbricateDocumentProperties(properties)
            .forString(() => "string")
            .forNumber(() => "number")
            .collectAsArray();

        expect(result).toStrictEqual(["string", "number"]);
    });
});
