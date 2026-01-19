/**
 * @author WMXPY
 * @namespace FileSystem_Util
 * @description IO
 */

import { attemptMarkDir, directoryFiles, readBufferFile, readTextFile, removeFile, writeBufferFile, writeTextFile } from "@sudoo/io";
import * as Path from "path";

export const listFileFromDirectory = async (
    basePath: string,
    pathRoute: string[],
): Promise<string[]> => {

    await attemptMarkDir(basePath);
    for (let i = 0; i < pathRoute.length; i++) {

        const currentPath: string = Path.join(basePath, ...pathRoute.slice(0, i + 1));

        await attemptMarkDir(currentPath);
    }

    const directory: string = Path.join(basePath, ...pathRoute);
    const files: string[] = await directoryFiles(
        directory,
    );

    return files;
};

export const putFile = async (
    basePath: string,
    pathRoute: string[],
    content: string,
): Promise<void> => {

    await attemptMarkDir(basePath);
    for (let i = 0; i < pathRoute.length - 1; i++) {

        const currentPath: string = Path.join(basePath, ...pathRoute.slice(0, i + 1));

        await attemptMarkDir(currentPath);
    }

    await writeTextFile(
        Path.join(basePath, ...pathRoute),
        content,
    );
};

export const putBuffer = async (
    basePath: string,
    pathRoute: string[],
    content: Buffer,
): Promise<void> => {

    await attemptMarkDir(basePath);
    for (let i = 0; i < pathRoute.length - 1; i++) {

        const currentPath: string = Path.join(basePath, ...pathRoute.slice(0, i + 1));

        await attemptMarkDir(currentPath);
    }

    await writeBufferFile(
        Path.join(basePath, ...pathRoute),
        content,
    );
};

export const readFile = async (
    basePath: string,
    pathRoute: string[],
): Promise<string> => {

    const content: string = await readTextFile(
        Path.join(basePath, ...pathRoute),
    );
    return content;
};

export const readBuffer = async (
    basePath: string,
    pathRoute: string[],
): Promise<Buffer> => {

    const content: Buffer = await readBufferFile(
        Path.join(basePath, ...pathRoute),
    );
    return content;
};

export const deleteFile = async (
    basePath: string,
    pathRoute: string[],
): Promise<void> => {

    await attemptMarkDir(basePath);
    await removeFile(
        Path.join(basePath, ...pathRoute),
    );
};
