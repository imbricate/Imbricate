/**
 * @author WMXPY
 * @description Jest Config
 */

import type { Config } from "jest";

export default async (): Promise<Config> => {

    return {
        verbose: true,
        collectCoverageFrom: [
            "src/**/*.ts",
        ],
        coverageReporters: [
            "json",
            "text-summary",
        ],
        moduleDirectories: [
            "node_modules",
            "<rootDir>/src",
        ],
    };
};
