/**
 * @author WMXPY
 * @description Jest Config
 */

import type { Config } from "jest";

export default async (): Promise<Config> => {

    return {
        verbose: true,
        testEnvironment: "jsdom",
        collectCoverageFrom: [
            "src/**/*.ts",
            "src/**/*.tsx",
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
