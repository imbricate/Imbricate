/**
 * @author WMXPY
 * @namespace OriginTest
 * @description Origin Test
 */

import { startImbricateOriginDatabaseCreateTest } from "./database/create";
import { describeImbricateOriginTest } from "./describe-test";
import { startImbricateOriginDocumentCreateTest } from "./document/create";
import { startImbricateOriginDocumentQueryTest } from "./document/query";
import { startImbricateOriginDocumentUpdateTest } from "./document/update";
import { ImbricateOriginTestingTarget } from "./testing-target";
import { startImbricateOriginTextCreateTest } from "./text/create";

export const startImbricateOriginTest = (
    testingTarget: ImbricateOriginTestingTarget,
): void => {

    describeImbricateOriginTest(
        "End-to-End Test for Imbricate Origin with Imbricate Origin Testing in Jest",
        testingTarget,
        () => {

            startImbricateOriginDatabaseCreateTest(testingTarget);

            startImbricateOriginDocumentCreateTest(testingTarget);
            startImbricateOriginDocumentQueryTest(testingTarget);
            startImbricateOriginDocumentUpdateTest(testingTarget);

            startImbricateOriginTextCreateTest(testingTarget);
        },
    );
};
