/**
 * @author WMXPY
 * @namespace Text
 * @description Create
 */

import { IImbricateOrigin, ImbricateTextGetContentOutcome } from "@imbricate/core";
import assert from "node:assert";
import { ImbricateOriginTestingTarget } from "../testing-target";

export const startImbricateOriginTextCreateTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describe("Test Imbricate Text (Create) Functions", () => {

        beforeAll(async () => {

            await testingTarget.resetOrigin();
        });

        it("should be able to create text", async (): Promise<void> => {

            const origin: IImbricateOrigin = testingTarget.ensureOrigin();
            const textManager = origin.getTextManager();

            const createdText = await textManager.createText(
                "test-text",
            );

            assert(typeof createdText !== "symbol");

            const text = await textManager.getText(
                createdText.text.uniqueIdentifier,
            );

            assert(typeof text !== "symbol");

            const content: ImbricateTextGetContentOutcome = await text.text.getContent();

            assert(typeof content !== "symbol");

            expect(content.content).toEqual("test-text");
        });
    });
};
