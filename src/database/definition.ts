/**
 * @author WMXPY
 * @namespace Database
 * @description Definition
 */

/**
 * Query of the document
 * 
 * @param limit limit of the query
 * @param skip skip of the query
 */
export type ImbricateDocumentQuery = {

    readonly limit?: number;
    readonly skip?: number;
};
