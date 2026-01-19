/**
 * @author WMXPY
 * @namespace Database
 * @description Action
 */

import { deleteFile, listFileFromDirectory, putFile, readFile } from "../util/io";
import { joinDatabaseMetaFileRoute } from "../util/path-joiner";
import { ImbricateFileSystemDatabaseMeta } from "./definition";

export const putDatabaseMeta = async (
    basePath: string,
    metadata: ImbricateFileSystemDatabaseMeta,
): Promise<void> => {

    const pathRoute: string[] = joinDatabaseMetaFileRoute(
        metadata.uniqueIdentifier,
    );

    await putFile(basePath, pathRoute, JSON.stringify(metadata, null, 2));
};

export const deleteDatabaseMeta = async (
    basePath: string,
    databaseUniqueIdentifier: string,
): Promise<void> => {

    const pathRoute: string[] = joinDatabaseMetaFileRoute(
        databaseUniqueIdentifier,
    );

    await deleteFile(basePath, pathRoute);
};

export const getDatabaseMeta = async (
    basePath: string,
    databaseUniqueIdentifier: string,
): Promise<ImbricateFileSystemDatabaseMeta | null> => {

    const pathRoute: string[] = joinDatabaseMetaFileRoute(
        databaseUniqueIdentifier,
    );

    try {

        const content: string = await readFile(basePath, pathRoute);
        const parsed: ImbricateFileSystemDatabaseMeta = JSON.parse(content);

        return parsed;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {

        return null;
    }
};

export const getDatabaseMetaList = async (
    basePath: string,
): Promise<ImbricateFileSystemDatabaseMeta[]> => {

    const pathRoute: string[] = joinDatabaseMetaFileRoute();

    const files: string[] = await listFileFromDirectory(basePath, pathRoute);

    const result: ImbricateFileSystemDatabaseMeta[] = [];
    for (const file of files) {

        const metaFileRoutes: string[] = joinDatabaseMetaFileRoute(file);

        const content: string = await readFile(basePath, metaFileRoutes);
        const parsed: ImbricateFileSystemDatabaseMeta = JSON.parse(content);

        result.push(parsed);
    }

    return result;
};
