/**
 * @namespace Util
 * @description Rebuild Symbol
 */

import { CommonOutcomeSymbol, CommonOutcomeSymbolList } from "../common/outcome";

export const rebuildImbricateSymbol = <T extends symbol>(
    symbolList: T[],
    symbolDescription: string,
    defaultSymbol: T,
): T | CommonOutcomeSymbol => {

    const commonSymbol = CommonOutcomeSymbolList.find((symbol) => {
        return symbol.description === symbolDescription;
    });

    if (commonSymbol) {
        return commonSymbol;
    }

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

    return (symbolDescription: string): T | CommonOutcomeSymbol => {
        return rebuildImbricateSymbol(symbolList, symbolDescription, defaultSymbol);
    };
};
