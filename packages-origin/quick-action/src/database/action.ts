/**
 * @author WMXPY
 * @namespace Database
 * @description Action
 */

import { listFileFromDirectory } from "../util/io";

export const getQuickActionFoldersList = async (
    basePath: string,
): Promise<string[]> => {

    const folders: string[] = await listFileFromDirectory(
        basePath,
        ["quick-action"],
    );

    return folders;
};
