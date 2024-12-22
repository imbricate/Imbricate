/**
 * @author WMXPY
 * @namespace Util
 * @description Rebuild Symbol
 */

export const rebuildImbricateSymbol = <T extends symbol>(
    symbolList: T[],
    symbolDescription: string,
    defaultSymbol: T,
): T => {

    const symbol = symbolList.find((symbol) => {
        return symbol.description === symbolDescription;
    });

    if (!symbol) {
        return defaultSymbol;
    }

    return symbol;
};

export const createRebuildImbricateSymbolFunction = <T extends symbol>(
    symbolList: T[],
    defaultSymbol: T,
) => {

    return (symbolDescription: string): T => {
        return rebuildImbricateSymbol(symbolList, symbolDescription, defaultSymbol);
    };
};
