/**
 * @description Resolve catalog: and workspace:* references in a dependencies object.
 */

/**
 * @param {Record<string, string> | undefined} deps - Dependencies object from package.json
 * @param {Record<string, string>} catalog - Catalog version map
 * @param {Record<string, string>} workspaceVersions - Workspace package version map
 * @param {string} fieldName - Name of the field being processed (for logging)
 * @returns {number} Count of resolved references
 */
function resolveDependencies(deps, catalog, workspaceVersions, fieldName) {

    let resolved = 0;

    if (!deps) {
        return resolved;
    }

    for (const [dep, version] of Object.entries(deps)) {

        if (version === "catalog:") {

            if (catalog[dep] === undefined) {
                console.error(`  ⚠ ${fieldName}: "${dep}" uses catalog: but no version found in catalog`);
                continue;
            }

            deps[dep] = catalog[dep];
            console.log(`  ✓ ${fieldName}: "${dep}" catalog: → "${catalog[dep]}"`);
            resolved++;
        } else if (version === "workspace:*") {

            if (workspaceVersions[dep] === undefined) {
                console.error(`  ⚠ ${fieldName}: "${dep}" uses workspace:* but not found in workspace`);
                continue;
            }

            deps[dep] = `^${workspaceVersions[dep]}`;
            console.log(`  ✓ ${fieldName}: "${dep}" workspace:* → "^${workspaceVersions[dep]}"`);
            resolved++;
        }
    }

    return resolved;
}

module.exports = { resolveDependencies };
