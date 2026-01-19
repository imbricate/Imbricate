/**
 * @author WMXPY
 * @namespace Origin
 * @description Search
 */

import { IImbricateDatabaseManager, IImbricateTextManager, IMBRICATE_PROPERTY_TYPE, IMBRICATE_SEARCH_TARGET_TYPE, ImbricateDatabaseManagerQueryDatabasesOutcome, ImbricateDatabaseQueryDocumentsOutcome, ImbricateDocumentGetPropertiesOutcome, ImbricateOriginSearchOutcome, ImbricateSearchItem, ImbricateTextGetContentOutcome, ImbricateTextManagerGetTextOutcome, S_Origin_Search_Unknown, findPrimaryProperty } from "@imbricate/core";

export const performSearch = async (
    keyword: string,
    originUniqueIdentifier: string,
    databaseManager: IImbricateDatabaseManager,
    textManager: IImbricateTextManager,
): Promise<ImbricateOriginSearchOutcome> => {

    const keywordRegex: RegExp = new RegExp(keyword, "i");

    const databases: ImbricateDatabaseManagerQueryDatabasesOutcome = await databaseManager.queryDatabases({});

    if (typeof databases === "symbol") {
        return S_Origin_Search_Unknown;
    }

    const items: ImbricateSearchItem[] = [];

    for (const database of databases.databases) {

        const documents: ImbricateDatabaseQueryDocumentsOutcome = await database.queryDocuments({});

        if (typeof documents === "symbol") {
            continue;
        }

        for (const document of documents.documents) {

            const properties: ImbricateDocumentGetPropertiesOutcome = document.getProperties();

            if (typeof properties === "symbol") {
                continue;
            }

            const propertyKeys: string[] = Object.keys(properties.properties);
            properties: for (const propertyKey of propertyKeys) {

                const property = properties.properties[propertyKey];

                if (property.propertyType === IMBRICATE_PROPERTY_TYPE.MARKDOWN) {

                    if (typeof property.propertyValue === "string") {

                        const text: ImbricateTextManagerGetTextOutcome = await textManager.getText(property.propertyValue);

                        if (typeof text === "symbol") {
                            continue properties;
                        }

                        const textContent: ImbricateTextGetContentOutcome = await text.text.getContent();

                        if (typeof textContent === "symbol") {
                            continue properties;
                        }

                        const lines = textContent.content.split("\n");

                        for (let i = 0; i < lines.length; i++) {

                            const line = lines[i];

                            if (keywordRegex.test(line)) {

                                const properties: ImbricateDocumentGetPropertiesOutcome = document.getProperties();

                                if (typeof properties === "symbol") {
                                    continue properties;
                                }

                                const documentPrimaryKey = findPrimaryProperty(
                                    database.schema,
                                    properties.properties,
                                );

                                items.push({
                                    target: {
                                        type: IMBRICATE_SEARCH_TARGET_TYPE.MARKDOWN,
                                        target: {
                                            originUniqueIdentifier,
                                            databaseUniqueIdentifier: database.uniqueIdentifier,
                                            documentUniqueIdentifier: document.uniqueIdentifier,
                                            propertyUniqueIdentifier: propertyKey,
                                            lineNumber: i + 1,
                                        },
                                    },
                                    primary: documentPrimaryKey ? String(documentPrimaryKey.propertyValue) : line,
                                    sourceDatabaseName: database.databaseName,
                                    sourceDocumentPrimaryKey: documentPrimaryKey ? String(documentPrimaryKey.propertyValue) : undefined,
                                    secondaryPrevious: lines[i - 1] ? [lines[i - 1]] : [],
                                    secondary: line,
                                    secondaryNext: lines[i + 1] ? [lines[i + 1]] : [],
                                });

                                continue properties;
                            }
                        }
                    }

                    continue properties;
                }

                if (property.propertyType === IMBRICATE_PROPERTY_TYPE.STRING) {

                    if (typeof property.propertyValue === "string") {

                        if (keywordRegex.test(property.propertyValue)) {

                            items.push({
                                target: {
                                    type: IMBRICATE_SEARCH_TARGET_TYPE.DOCUMENT,
                                    target: {
                                        originUniqueIdentifier,
                                        databaseUniqueIdentifier: database.uniqueIdentifier,
                                        documentUniqueIdentifier: document.uniqueIdentifier,
                                    },
                                },
                                primary: property.propertyValue,
                                secondary: property.propertyValue,
                            });
                        }
                    }

                    continue properties;
                }
            }
        }
    }

    return {
        items,
    };
};
