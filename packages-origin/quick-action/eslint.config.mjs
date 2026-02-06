/**
 * @package Quick Action
 * @namespace Root
 * @description ESLint Configuration
 */

import eslintCommonConfig from "@imbricate-internal/eslint-config/eslint.common.config";

export default [
    {
        files: [
            "**/*.{ts,tsx}",
        ],
    },
    ...eslintCommonConfig,
];
