/**
 * @author WMXPY
 * @namespace Util
 * @description Digest
 */

export const digestString = (input: string): string => {

    return btoa(input);
};
