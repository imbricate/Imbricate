/**
 * @namespace Property
 * @description Compare Value
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricateFileSystemDocumentInstanceProperty } from "../document/definition";

/**
 * 
 * @param leftValue The left value
 * @param rightValue The right value
 * 
 * @returns The comparison result
 *  if leftValue is less than rightValue, return a negative number
 *  if leftValue is equal to rightValue, return 0
 *  if leftValue is greater than rightValue, return a positive number
 */
export const comparePropertyValue = (
    leftValue: ImbricateFileSystemDocumentInstanceProperty,
    rightValue: ImbricateFileSystemDocumentInstanceProperty,
): number => {

    if (leftValue.type !== rightValue.type) {
        return 0;
    }

    const targetType: IMBRICATE_PROPERTY_TYPE = leftValue.type;

    // IMBRICATE_PROPERTY_TYPE SWITCH
    switch (targetType) {

    }
};
