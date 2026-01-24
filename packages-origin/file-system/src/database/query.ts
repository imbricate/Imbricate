/**
 * @author WMXPY
 * @namespace Database
 * @description Query
 */

import { IImbricateDocument, IMBRICATE_QUERY_COMPARE_CONDITION, IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET, ImbricateDatabaseSchema, ImbricateDocumentQuery } from "@imbricate/core";
import { getDocumentList } from "../document/action";
import { ImbricateFileSystemDocumentInstance } from "../document/definition";
import { ImbricateFileSystemDocument } from "../document/document";
import { sortDocuments } from "../document/sort-documents";

export type QueryDocumentsResult = {

    readonly documents: IImbricateDocument[];
    readonly count: number;
};

export const queryDocuments = async (
    basePath: string,
    databaseUniqueIdentifier: string,
    schema: ImbricateDatabaseSchema,
    query: ImbricateDocumentQuery,
): Promise<QueryDocumentsResult> => {

    const rawDocuments: ImbricateFileSystemDocumentInstance[] = await getDocumentList(
        basePath,
        databaseUniqueIdentifier,
    );

    let count: number = 0;
    let limitFilled: number = 0;
    const results: IImbricateDocument[] = [];

    const sortedDocuments: ImbricateFileSystemDocumentInstance[] = sortDocuments(
        rawDocuments,
        query.sorts,
    );

    let restSkips: number = query.skip ?? 0;
    documentsLoop: for (let i = 0; i < sortedDocuments.length; i++) {

        const documentInstance: ImbricateFileSystemDocumentInstance = sortedDocuments[i];
        const document = ImbricateFileSystemDocument.fromInstance(
            schema,
            basePath,
            databaseUniqueIdentifier,
            documentInstance,
        );

        if (Array.isArray(query.propertyFilters)) {

            for (const filter of query.propertyFilters) {

                const property = document.properties[filter.propertyIdentifier];
                if (!property) {
                    continue documentsLoop;
                }

                if (filter.target === IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET.PROPERTY_TYPE) {

                    if (filter.condition === IMBRICATE_QUERY_COMPARE_CONDITION.EQUAL) {

                        if (!property) {
                            continue documentsLoop;
                        }

                        if (property.propertyType !== filter.value) {
                            continue documentsLoop;
                        }
                    }
                }

                if (filter.target === IMBRICATE_QUERY_PROPERTY_CONDITION_TARGET.PROPERTY_VALUE) {

                    if (filter.condition === IMBRICATE_QUERY_COMPARE_CONDITION.EQUAL) {

                        if (!property) {
                            continue documentsLoop;
                        }

                        if (Array.isArray(property.propertyValue) && Array.isArray(filter.value)) {

                            if (property.propertyValue.length !== filter.value.length) {
                                continue documentsLoop;
                            }

                            for (const value of filter.value) {

                                if (!property.propertyValue.includes(value)) {
                                    continue documentsLoop;
                                }
                            }
                        } else if (property.propertyValue !== filter.value) {
                            continue documentsLoop;
                        }
                    }

                    if (filter.condition === IMBRICATE_QUERY_COMPARE_CONDITION.EXIST) {

                        if (filter.value && typeof property === "undefined") {
                            continue documentsLoop;
                        }

                        if (!filter.value && typeof property !== "undefined") {
                            continue documentsLoop;
                        }
                    }
                }
            }
        }

        count++;

        if (restSkips > 0) {
            restSkips--;
            continue documentsLoop;
        }

        if (typeof query.limit !== "number" || limitFilled < query.limit) {
            limitFilled++;
            results.push(document);
        }
    }

    return {
        documents: results,
        count,
    };
};
