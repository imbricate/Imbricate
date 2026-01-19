/**
 * @author WMXPY
 * @namespace Document
 * @description Action
 */

import { deleteFile, listFileFromDirectory, putFile, readFile } from "../util/io";
import { joinDocumentFileRoute } from "../util/path-joiner";
import { ImbricateFileSystemDocumentInstance } from "./definition";

export const putDocument = async (
    basePath: string,
    databaseUniqueIdentifier: string,
    document: ImbricateFileSystemDocumentInstance,
): Promise<void> => {

    const pathRoute: string[] = joinDocumentFileRoute(
        databaseUniqueIdentifier,
        document.uniqueIdentifier,
    );

    await putFile(basePath, pathRoute, JSON.stringify(document, null, 2));
};

export const getDocumentByUniqueIdentifier = async (
    basePath: string,
    databaseUniqueIdentifier: string,
    documentUniqueIdentifier: string,
): Promise<ImbricateFileSystemDocumentInstance | null> => {

    const pathRoute: string[] = joinDocumentFileRoute(
        databaseUniqueIdentifier,
        documentUniqueIdentifier,
    );

    try {

        const content: string = await readFile(basePath, pathRoute);
        const parsed: ImbricateFileSystemDocumentInstance = JSON.parse(content);

        return parsed;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {

        return null;
    }
};

export const getDocumentList = async (
    basePath: string,
    databaseUniqueIdentifier: string,
): Promise<ImbricateFileSystemDocumentInstance[]> => {

    const pathRoute: string[] = joinDocumentFileRoute(
        databaseUniqueIdentifier,
    );

    const files: string[] = await listFileFromDirectory(basePath, pathRoute);

    const result: ImbricateFileSystemDocumentInstance[] = [];

    for (let i: number = 0; i < files.length; i++) {

        const file: string = files[i];

        const fileRoute: string[] = joinDocumentFileRoute(
            databaseUniqueIdentifier,
            file,
        );

        const content: string = await readFile(basePath, fileRoute);
        const parsed: ImbricateFileSystemDocumentInstance = JSON.parse(content);

        result.push(parsed);
    }

    return result;
};

export const deleteDocument = async (
    basePath: string,
    databaseUniqueIdentifier: string,
    documentUniqueIdentifier: string,
): Promise<void> => {

    const pathRoute: string[] = joinDocumentFileRoute(
        databaseUniqueIdentifier,
        documentUniqueIdentifier,
    );

    await deleteFile(basePath, pathRoute);
};
