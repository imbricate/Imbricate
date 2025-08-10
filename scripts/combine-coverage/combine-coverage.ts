/**
 * @author WMXPY
 * @description Combine Coverage
 */

import { access, readdir } from "node:fs/promises";
import { join } from "node:path";

(async () => {

    const rootDirPath: string = join(__dirname, "../../");

    // Packages Path
    const packagesPath: string = join(rootDirPath, "packages");
    const packagesFolders: string[] = await readdir(packagesPath);

    for (const folder of packagesFolders) {
        const packagePath: string = join(packagesPath, folder);
        const coveragePath: string = join(packagePath, "coverage");

        try {
            await access(coveragePath);
        } catch (error) {
            continue;
        }

        console.log(`Found coverage for ${folder}`);
    }
})();
