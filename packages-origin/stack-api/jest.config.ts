/**
 * @namespace Root
 * @description Jest Configuration
 */

import type { Config } from "jest";

export default async (): Promise<Config> => {

    return {
        verbose: true,
        collectCoverageFrom: [
            "src/**/*.ts",
        ],
        setupFilesAfterEnv: [
            "<rootDir>/test/setup.ts",
        ],
        coverageReporters: [
            "json",
            "text-summary",
        ],
    };
};
