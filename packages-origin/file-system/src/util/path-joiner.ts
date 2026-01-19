/**
 * @author WMXPY
 * @namespace FileSystem_Util
 * @description Path Joiner
 */

import { joinPath } from "@sudoo/io";

export const joinTextFileRoute = (
    textUniqueIdentifier: string,
): string[] => {

    const firstTwoHash: string = textUniqueIdentifier.substring(0, 2);
    const secondTwoHash: string = textUniqueIdentifier.substring(2, 4);

    return [
        "text",
        firstTwoHash,
        secondTwoHash,
        textUniqueIdentifier,
    ];
};

export const joinStaticFileRoute = (
    staticUniqueIdentifier: string,
): string[] => {

    const firstTwoHash: string = staticUniqueIdentifier.substring(0, 2);
    const secondTwoHash: string = staticUniqueIdentifier.substring(2, 4);

    return [
        "static",
        firstTwoHash,
        secondTwoHash,
        staticUniqueIdentifier,
    ];
};

export const joinDocumentFileRoute = (
    databaseUniqueIdentifier: string,
    documentUniqueIdentifier?: string,
): string[] => {

    if (typeof documentUniqueIdentifier === "undefined") {
        return [
            "database",
            databaseUniqueIdentifier,
            "document",
        ];
    }

    if (documentUniqueIdentifier.endsWith(".json")) {
        return [
            "database",
            databaseUniqueIdentifier,
            "document",
            documentUniqueIdentifier,
        ];
    }

    return [
        "database",
        databaseUniqueIdentifier,
        "document",
        `${documentUniqueIdentifier}.json`,
    ];
};

export const joinDatabaseMetaFileRoute = (
    uniqueIdentifier?: string,
): string[] => {

    if (typeof uniqueIdentifier === "undefined") {
        return ["database-meta"];
    }

    if (uniqueIdentifier.endsWith(".json")) {
        return ["database-meta", uniqueIdentifier];
    }

    return ["database-meta", `${uniqueIdentifier}.json`];
};

export const joinDatabaseBasePath = (
    basePath: string,
    uniqueIdentifier: string,
): string => {

    return joinPath(basePath, "database", uniqueIdentifier);
};

export const buildUrlWithScheme = (url: string): string => {

    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }

    if (url.startsWith("file://")) {
        return url;
    }

    return `file://${url}`;
};
