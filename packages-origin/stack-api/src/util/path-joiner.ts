/**
 * @author WMXPY
 * @namespace Util
 * @description Path Joiner
 */

export const joinUrl = (basePath: string, ...paths: string[]): string => {

    const trimmedBasePath: string = basePath.endsWith("/")
        ? basePath.slice(0, basePath.length - 1)
        : basePath;

    const trimmedPaths: string[] = paths.map((path: string) => path.startsWith("/")
        ? path.slice(1)
        : path);

    return `${trimmedBasePath}/${trimmedPaths.join("/")}`;
};
