/**
 * @author WMXPY
 * @namespace Document_Property
 * @description Default Value
 */

import { DocumentPropertyValueObject, IMBRICATE_PROPERTY_TYPE } from "../property";

// IMBRICATE_PROPERTY_TYPE SWITCH
export const getImbricateDefaultValueOfProperty = (type: IMBRICATE_PROPERTY_TYPE): DocumentPropertyValueObject<IMBRICATE_PROPERTY_TYPE> => {

    switch (type) {

        case IMBRICATE_PROPERTY_TYPE.BOOLEAN: return false;
        case IMBRICATE_PROPERTY_TYPE.STRING: return "";
        case IMBRICATE_PROPERTY_TYPE.NUMBER: return 0;
        case IMBRICATE_PROPERTY_TYPE.MARKDOWN: return "";
        case IMBRICATE_PROPERTY_TYPE.JSON: return "";
        case IMBRICATE_PROPERTY_TYPE.IMBRISCRIPT: return "";
        case IMBRICATE_PROPERTY_TYPE.DATE: return new Date().toISOString();
        case IMBRICATE_PROPERTY_TYPE.LABEL: return [];
        case IMBRICATE_PROPERTY_TYPE.REFERENCE: return [];
    }

    return null as any;
};
