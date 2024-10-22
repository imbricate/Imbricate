/**
 * @author WMXPY
 * @namespace Document
 * @description Definition
 */

import { IMBRICATE_DATABASE_PROPERTY_TYPE } from "../database/schema";

export type DocumentProperties = Record<string, DocumentPropertyValue>;

export type DocumentPropertyValue = {

    readonly type: IMBRICATE_DATABASE_PROPERTY_TYPE;
    readonly value: any;
};
