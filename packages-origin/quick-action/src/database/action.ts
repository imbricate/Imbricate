/**
 * @author WMXPY
 * @namespace Database
 * @description Action
 */

import { listFileFromDirectory } from "../util/io";

export const getQuickActionFilesList = async (
    basePath: string,
): Promise<string[]> => {

    const files: string[] = await listFileFromDirectory(
        basePath,
        ["quick-action"],
    );

    return files;
};
