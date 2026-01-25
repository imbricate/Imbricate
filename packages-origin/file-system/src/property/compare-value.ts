/**
 * @namespace Property
 * @description Compare Value
 */

import { IMBRICATE_PROPERTY_TYPE, ImbricatePropertyValueObjectReference } from "@imbricate/core";
import { ImbricateFileSystemDocumentInstanceProperty } from "../document/definition";

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

        case IMBRICATE_PROPERTY_TYPE.BOOLEAN: {

            const fixedLeftValue: boolean = leftValue.value as boolean;
            const fixedRightValue: boolean = rightValue.value as boolean;

            return fixedLeftValue === fixedRightValue
                ? 0
                : fixedLeftValue
                    ? 1
                    : -1;
        }
        case IMBRICATE_PROPERTY_TYPE.BINARY: {

            return 0;
        }
        case IMBRICATE_PROPERTY_TYPE.STRING: {

            const fixedLeftValue: string = leftValue.value as string;
            const fixedRightValue: string = rightValue.value as string;

            return String.prototype.localeCompare.call(
                fixedLeftValue,
                fixedRightValue,
            );
        }
        case IMBRICATE_PROPERTY_TYPE.NUMBER: {

            const fixedLeftValue: number = leftValue.value as number;
            const fixedRightValue: number = rightValue.value as number;

            return fixedLeftValue === fixedRightValue
                ? 0
                : fixedLeftValue
                    ? 1
                    : -1;
        }
        case IMBRICATE_PROPERTY_TYPE.MARKDOWN: {

            return 0;
        }
        case IMBRICATE_PROPERTY_TYPE.JSON: {

            return 0;
        }
        case IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT: {

            return 0;
        }
        case IMBRICATE_PROPERTY_TYPE.DATE: {

            const fixedLeftValue: string = leftValue.value as string;
            const fixedRightValue: string = rightValue.value as string;

            const parsedLeftValue: Date = new Date(fixedLeftValue);
            const parsedRightValue: Date = new Date(fixedRightValue);

            return parsedLeftValue.getTime() === parsedRightValue.getTime()
                ? 0
                : parsedLeftValue.getTime()
                    ? 1
                    : -1;
        }
        case IMBRICATE_PROPERTY_TYPE.LABEL: {

            const fixedLeftValue: string[] = leftValue.value as string[];
            const fixedRightValue: string[] = rightValue.value as string[];

            return fixedLeftValue.length === fixedRightValue.length
                ? 0
                : fixedLeftValue.length
                    ? 1
                    : -1;
        }
        case IMBRICATE_PROPERTY_TYPE.REFERENCE: {

            const fixedLeftValue: ImbricatePropertyValueObjectReference[] =
                leftValue.value as ImbricatePropertyValueObjectReference[];
            const fixedRightValue: ImbricatePropertyValueObjectReference[] =
                rightValue.value as ImbricatePropertyValueObjectReference[];

            return fixedLeftValue.length === fixedRightValue.length
                ? 0
                : fixedLeftValue.length
                    ? 1
                    : -1;
        }
    }
};
