/**
 * @author WMXPY
 * @namespace Document
 * @description Sort Documents
 */

import { IMBRICATE_QUERY_SORT_TYPE, ImbricateDocumentQuerySort } from "@imbricate/core";
import { ImbricateFileSystemDocumentInstance, ImbricateFileSystemDocumentInstanceProperty } from "./definition";

/**
 * 
 * @param leftDocument The left document to compare
 * @param rightDocument The right document to compare
 * @param sorts The sorts to apply
 * 
 * @returns The comparison result
 *  if leftDocument is less than rightDocument, return a negative number
 *  if leftDocument is greater than rightDocument, return a positive number
 *  if leftDocument is equal to rightDocument, return 0
 */
const sortSingleDocument = (
    leftDocument: ImbricateFileSystemDocumentInstance,
    rightDocument: ImbricateFileSystemDocumentInstance,
    sorts: ImbricateDocumentQuerySort[],
): number => {

    sortLoop: for (const sort of sorts) {

        // IMBRICATE_QUERY_SORT_TYPE SWITCH
        switch (sort.type) {

            case IMBRICATE_QUERY_SORT_TYPE.PROPERTY: {

                const leftTargetProperty:
                    ImbricateFileSystemDocumentInstanceProperty | undefined =
                    leftDocument.properties[sort.propertyIdentifier];

                const rightTargetProperty:
                    ImbricateFileSystemDocumentInstanceProperty | undefined =
                    rightDocument.properties[sort.propertyIdentifier];

                if (typeof leftTargetProperty === "undefined"
                    && typeof rightTargetProperty !== "undefined") {
                    return -1;
                }
                if (typeof leftTargetProperty !== "undefined"
                    && typeof rightTargetProperty === "undefined") {
                    return 1;
                }

                if (typeof leftTargetProperty === "undefined"
                    && typeof rightTargetProperty === "undefined") {
                    continue sortLoop;
                }


            }
        }
    }

    return 0;
};

export const sortDocuments = (
    documents: ImbricateFileSystemDocumentInstance[],
    sorts?: ImbricateDocumentQuerySort[],
): ImbricateFileSystemDocumentInstance[] => {

    if (!Array.isArray(sorts) || sorts.length === 0) {
        return documents;
    }

    const sortedDocuments: ImbricateFileSystemDocumentInstance[] = documents
        .sort((a, b) => {
            return sortSingleDocument(a, b, sorts);
        });

    return sortedDocuments;
};
