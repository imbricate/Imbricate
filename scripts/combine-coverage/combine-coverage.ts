/**
 * @author WMXPY
 * @description Combine Coverage
 */

import type { Stats } from "node:fs";
import { readdir, access } from "node:fs/promises";
import { join } from "node:path";

(async () => {

    const rootDirPath: string = join(__dirname, "../../");

    // Packages Path
    const packagesPath: string = join(rootDirPath, "packages");
    const packagesFolders: string[] = await readdir(packagesPath);

    for (const folder of packagesFolders) {
        const packagePath: string = join(packagesPath, folder);
        const coveragePath: string = join(packagePath, "coverage");

        await access(coveragePath);

        console.log(`Found coverage for ${folder}`);
    }
})();
