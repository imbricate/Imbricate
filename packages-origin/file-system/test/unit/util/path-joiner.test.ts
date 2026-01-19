/**
 * @author WMXPY
 * @namespace Util
 * @description Path Joiner
 * @override Unit Test
 */

import { joinDatabaseMetaFileRoute } from "../../../src/util/path-joiner";

describe("Given [Path Joiner] Helper Methods", (): void => {

    test("should be able to join collection meta file path", (): void => {

        const joined: string[] = joinDatabaseMetaFileRoute();

        expect(joined).toEqual(
            ["database-meta"],
        );
    });
});
