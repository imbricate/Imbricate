/**
 * @namespace Property
 * @description Compare Value
 */

export const comparePropertyValue = (
    leftValue: any,
    rightValue: any,
): number => {

    if (leftValue < rightValue) {
        return -1;
    }
    if (leftValue > rightValue) {
        return 1;
    }
    return 0;
};
