/**
 * @author WMXPY
 * @namespace Text
 * @description Action
 */

import { putFile, readFile } from "../util/io";
import { joinTextFileRoute } from "../util/path-joiner";

export const putText = async (
    basePath: string,
    textUniqueIdentifier: string,
    content: string,
): Promise<void> => {

    const pathRoute: string[] = joinTextFileRoute(
        textUniqueIdentifier,
    );

    await putFile(basePath, pathRoute, content);
};

export const getTextByUniqueIdentifier = async (
    basePath: string,
    textUniqueIdentifier: string,
): Promise<string | null> => {

    const pathRoute: string[] = joinTextFileRoute(
        textUniqueIdentifier,
    );

    try {

        const content: string = await readFile(basePath, pathRoute);

        return content;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {

        return null;
    }
};
