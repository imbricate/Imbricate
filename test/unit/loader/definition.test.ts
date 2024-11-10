/**
 * @author WMXPY
 * @namespace Loader
 * @description Definition
 * @override Unit Test
 */

import { IMBRICATE_ORIGIN_LOAD_TYPE, loadImbricateOriginsFromPersistance } from "../../../src";
import { ImbricateOriginLoader } from "../../../src/loader/definition";

describe("Given [Origin Loader] methods", (): void => {

    test("should be able to initialize npm package", async (): Promise<void> => {

        let mockPayload: any;

        jest.mock("mock-origin", () => {

            const loader: ImbricateOriginLoader = (payload: any) => {

                mockPayload = payload;
                return {
                    name: "Mock",
                } as any;
            };

            return loader;
        }, {
            virtual: true,
        });

        const origins = await loadImbricateOriginsFromPersistance({
            origins: [
                {
                    originLoadType: IMBRICATE_ORIGIN_LOAD_TYPE.NPM_PACKAGE,
                    originLoadValue: "mock-origin",

                    originName: "Mock",
                    originPayloads: {
                        hello: "world",
                    },
                },
            ],
        });

        expect(origins).toHaveLength(1);
        expect(mockPayload).toEqual({
            hello: "world",
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
