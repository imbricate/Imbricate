/**
 * @author WMXPY
 * @namespace Document
 * @description Sort Documents
 */

import { ImbricateDocumentQuerySort } from "@imbricate/core";
import { ImbricateFileSystemDocumentInstance } from "./definition";

export const sortDocuments = (
    documents: ImbricateFileSystemDocumentInstance[],
    sorts?: ImbricateDocumentQuerySort[],
): ImbricateFileSystemDocumentInstance[] => {

    if (!sorts || sorts.length === 0) {
        return documents;
    }

    return documents;
};
