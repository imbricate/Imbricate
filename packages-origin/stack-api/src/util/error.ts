/**
 * @author WMXPY
 * @namespace Util
 * @description Error
 */

export function getAxiosErrorSymbol(error: any): string {

    if (!error.response) {
        return "";
    }

    if (!error.response.data) {
        return "";
    }

    return error.response.data;
}
