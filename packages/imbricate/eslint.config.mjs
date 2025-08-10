/**
 * @author WMXPY
 * @description ESLint Config
 */

import eslintCommonConfig from "@imbricate-hummingbird/config/eslint.common.config";

export default [
    {
        files: [
            "**/*.ts",
        ],
    },
    ...eslintCommonConfig,
];
