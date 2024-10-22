/**
 * @author WMXPY
 * @namespace Loader
 * @description Origin Loader
 * @override Unit Test
 */

import { IMBRICATE_ORIGIN_LOAD_TYPE, loadImbricateOriginsFromPersistance } from "../../../src";

describe("Given [Origin Loader] methods", (): void => {

    test("should be able to initialize npm package", async (): Promise<void> => {

        jest.mock("mock-origin", () => {

            return {
                a: 1,
            };
        }, {
            virtual: true,
        });

        const origins = await loadImbricateOriginsFromPersistance({
            origins: [
                {
                    originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE.NPM_PACKAGE,
                    originLoadValue: "mock-origin",

                    originName: "Mock",
                    originPayloads: {},
                },
            ],
        });

        console.log(origins);

        expect("").toEqual("");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
