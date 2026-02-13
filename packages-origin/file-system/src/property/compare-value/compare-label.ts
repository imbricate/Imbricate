/**
 * @namespace Property
 * @description Compare Label
 */

import { ImbricateFileSystemDocumentInstanceProperty } from "../../document/definition";

/**
 * Target is an array of strings
 *  Each string represents a label identifier, in uuid
 * 
 * @param leftValue The left value
 * @param rightValue The right value
 * 
 * @returns The comparison result
 *  1. If count of labels are different, more label property is greater
 *  2. If count of labels are same, compare each label identifier
 */
export const comparePropertyLabelValue = (
    leftValue: ImbricateFileSystemDocumentInstanceProperty,
    rightValue: ImbricateFileSystemDocumentInstanceProperty,
): number => {

    const fixedLeftValue: string[] = leftValue.value as string[];
    const fixedRightValue: string[] = rightValue.value as string[];

    const leftLabelCount: number = fixedLeftValue.length;
    const rightLabelCount: number = fixedRightValue.length;

    if (leftLabelCount !== rightLabelCount) {
        return leftLabelCount - rightLabelCount;
    }

    for (const leftLabel of fixedLeftValue) {

        const rightLabel: string | undefined = fixedRightValue.find((
            rightLabel: string,
        ) => {
            return rightLabel === leftLabel;
        });

        if (typeof rightLabel === "undefined") {
            return -1;
        }
    }

    return 0;
};
