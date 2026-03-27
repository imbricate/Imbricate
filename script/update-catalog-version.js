/**
 * @description Resolve `catalog:` and `workspace:*` dependency specifiers
 * in app/package.json files to concrete versions before publishing.
 *
 * Usage: node script/update-catalog-version.js
 *
 * This script:
 * 1. Reads `pnpm-workspace.yaml` to parse the catalog version map
 * 2. Scans workspace directories to build a workspace version map
 * 3. Finds all `app/package.json` under configured directories
 * 4. Resolves `catalog:` and `workspace:*` to concrete versions
 * 5. Writes updated files back
 */

const fs = require("fs");
const path = require("path");

const { parseCatalog } = require("./helpers/parse-catalog");
const { resolveWorkspaceVersions } = require("./helpers/resolve-workspace-versions");
const { resolveDependencies } = require("./helpers/resolve-dependencies");

const ROOT_DIR = path.resolve(__dirname, "..");
const WORKSPACE_YAML = path.join(ROOT_DIR, "pnpm-workspace.yaml");

const WORKSPACE_DIRS = ["packages", "packages-origin"];

const DEPENDENCY_FIELDS = [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
];

function main() {

    // Parse catalog from pnpm-workspace.yaml
    if (!fs.existsSync(WORKSPACE_YAML)) {
        console.error(`Error: ${WORKSPACE_YAML} not found`);
        process.exit(1);
    }

    const yamlContent = fs.readFileSync(WORKSPACE_YAML, "utf-8");
    const catalog = parseCatalog(yamlContent);
    console.log(`Loaded ${Object.keys(catalog).length} catalog entries from pnpm-workspace.yaml`);

    // Build workspace version map
    const workspaceVersions = resolveWorkspaceVersions(ROOT_DIR, WORKSPACE_DIRS);
    console.log(`Found ${Object.keys(workspaceVersions).length} workspace packages`);

    // Find and process all app/package.json files
    let totalResolved = 0;

    for (const dir of WORKSPACE_DIRS) {

        const absoluteDir = path.join(ROOT_DIR, dir);
        if (!fs.existsSync(absoluteDir)) {
            continue;
        }

        const packages = fs.readdirSync(absoluteDir, { withFileTypes: true })
            .filter((entry) => entry.isDirectory())
            .map((entry) => entry.name);

        for (const pkgName of packages) {

            const appPackageJsonPath = path.join(absoluteDir, pkgName, "app", "package.json");
            if (!fs.existsSync(appPackageJsonPath)) {
                continue;
            }

            const relativePath = `${dir}/${pkgName}/app/package.json`;
            console.log(`\nProcessing: ${relativePath}`);

            const content = fs.readFileSync(appPackageJsonPath, "utf-8");
            const packageJson = JSON.parse(content);

            let resolved = 0;

            for (const field of DEPENDENCY_FIELDS) {
                resolved += resolveDependencies(
                    packageJson[field],
                    catalog,
                    workspaceVersions,
                    field,
                );
            }

            if (resolved > 0) {
                fs.writeFileSync(
                    appPackageJsonPath,
                    JSON.stringify(packageJson, null, 2) + "\n",
                    "utf-8",
                );
                console.log(`  Updated ${resolved} reference(s)`);
                totalResolved += resolved;
            } else {
                console.log("  No catalog: or workspace:* references found");
            }
        }
    }

    console.log(`\nDone. Resolved ${totalResolved} reference(s) total.`);
}

main();
