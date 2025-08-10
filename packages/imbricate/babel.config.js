/**
 * @author WMXPY
 * @description Babel Config
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
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
};
