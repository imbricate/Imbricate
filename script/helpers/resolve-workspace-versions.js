/**
 * @description Scan workspace directories and build a map of package name → version
 * from each workspace member's package.json.
 */

const fs = require("fs");
const path = require("path");

/**
 * @param {string} rootDir - Absolute path to the monorepo root
 * @param {string[]} workspaceDirs - Relative directory names to scan (e.g., ["packages", "packages-origin"])
 * @returns {Record<string, string>} Map of package name → version
 */
function resolveWorkspaceVersions(rootDir, workspaceDirs) {

    const versions = {};

    for (const dir of workspaceDirs) {

        const absoluteDir = path.join(rootDir, dir);
        if (!fs.existsSync(absoluteDir)) {
            continue;
        }

        const entries = fs.readdirSync(absoluteDir, { withFileTypes: true });

        for (const entry of entries) {

            if (!entry.isDirectory()) {
                continue;
            }

            const packageJsonPath = path.join(absoluteDir, entry.name, "package.json");
            if (!fs.existsSync(packageJsonPath)) {
                continue;
            }

            try {

                const content = fs.readFileSync(packageJsonPath, "utf-8");
                const packageJson = JSON.parse(content);

                if (packageJson.name && packageJson.version) {
                    versions[packageJson.name] = packageJson.version;
                }
            } catch (_error) {
                // Skip packages with invalid package.json
            }
        }
    }

    return versions;
}

module.exports = { resolveWorkspaceVersions };
