/**
 * @author WMXPY
 * @namespace OriginTest
 * @description Describe Test
 */

import { ImbricateOriginTestingTarget } from "./testing-target";

export const describeImbricateOriginTest = (
    name: string,
    testingTarget: ImbricateOriginTestingTarget,
    content: () => void,
): void => {

    describe(name, () => {

        beforeAll(async () => {
            await testingTarget.construct();
        });

        afterAll(async () => {
            await testingTarget.dispose();
        });

        content();
    });
};
