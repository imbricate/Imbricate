/**
 * @author WMXPY
 * @description ESLint Config
 */

import eslintCommonConfig from "@imbricate/eslint-config/eslint.common.config";

export default [
    {
        files: [
            "**/*.ts",
        ],
    },
    ...eslintCommonConfig,
];
