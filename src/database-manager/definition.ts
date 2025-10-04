/**
 * @namespace DatabaseManager
 * @description Definition
 */

import { IMBRICATE_QUERY_ATTRIBUTE, IMBRICATE_QUERY_COMPARE_CONDITION } from "../common/definition";

export type ImbricateDatabaseQueryAnnotationFilter = {

    readonly namespace: string;
    readonly identifier: string;

    readonly attribute: IMBRICATE_QUERY_ATTRIBUTE;
    readonly condition: IMBRICATE_QUERY_COMPARE_CONDITION;
    readonly value: any;
};

/**
 * Query of the database
 * 
 * @param limit limit of the query
 * @param skip skip of the query
 */
export type ImbricateDatabaseQuery = {

    readonly limit?: number;
    readonly skip?: number;

    readonly annotationFilters?: ImbricateDatabaseQueryAnnotationFilter[];
};
