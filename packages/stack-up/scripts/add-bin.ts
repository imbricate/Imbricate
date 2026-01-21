/**
 * @author WMXPY
 * @namespace Script
 * @description Add Bin
 */

import { readTextFile, writeTextFile } from "@sudoo/io";

const createBinScript = (fileName: string): string => {

    return [
        "#!/usr/bin/env node",
        "",
        `const execute = require('./${fileName}.js').execute;`,
        "execute(process.argv);", "",
    ].join("\n");
};

(async () => {

    const binScript = createBinScript("cli");
    await writeTextFile("./app/stack-up-bin", binScript);

    const packagePath: string = "./app/package.json";
    const packageFile: string = await readTextFile(packagePath);

    const packageObject: any = JSON.parse(packageFile);

    const updatedPackageObject: any = {
        ...packageObject,
        bin: {
            "stack-up": "stack-up-bin",
        },
    };

    console.log("[Build] Added bin to package.json");

    await writeTextFile(packagePath, JSON.stringify(updatedPackageObject, null, 2));
})();
