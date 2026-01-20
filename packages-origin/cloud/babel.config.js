/**
 * @namespace Root
 * @description Babel Configuration
 */

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets:
                {
                    node: "current",
                },
            },
        ],
        "@babel/preset-typescript",
    ],
};
