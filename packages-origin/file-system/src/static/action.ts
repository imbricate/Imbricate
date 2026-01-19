/**
 * @author WMXPY
 * @namespace Static
 * @description Action
 */

import { putBuffer, readBuffer } from "../util/io";
import { joinStaticFileRoute } from "../util/path-joiner";

export const putStatic = async (
    basePath: string,
    staticUniqueIdentifier: string,
    content: Buffer,
): Promise<void> => {

    const pathRoute: string[] = joinStaticFileRoute(
        staticUniqueIdentifier,
    );

    await putBuffer(basePath, pathRoute, content);
};

export const getStaticByUniqueIdentifier = async (
    basePath: string,
    staticUniqueIdentifier: string,
): Promise<Buffer | null> => {

    const pathRoute: string[] = joinStaticFileRoute(
        staticUniqueIdentifier,
    );

    try {

        const content: Buffer = await readBuffer(basePath, pathRoute);

        return content;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {

        return null;
    }
};
