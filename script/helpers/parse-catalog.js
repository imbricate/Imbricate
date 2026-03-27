/**
 * @description Parse the catalog section from pnpm-workspace.yaml content.
 * @param {string} yamlContent - Raw content of pnpm-workspace.yaml
 * @returns {Record<string, string>} Map of package name → version string
 */
function parseCatalog(yamlContent) {

    const catalog = {};
    const lines = yamlContent.split("\n");

    let inCatalog = false;

    for (const line of lines) {

        if (/^catalog:\s*$/.test(line)) {
            inCatalog = true;
            continue;
        }

        if (inCatalog && line.length > 0 && !line.startsWith(" ") && !line.startsWith("\t")) {
            inCatalog = false;
            continue;
        }

        if (inCatalog) {

            const trimmed = line.trim();
            if (trimmed.length === 0) {
                continue;
            }

            const match = trimmed.match(/^['"]?([^'"]+?)['"]?\s*:\s*['"]?(.+?)['"]?\s*$/);
            if (match) {
                catalog[match[1]] = match[2];
            }
        }
    }

    return catalog;
}

module.exports = { parseCatalog };
