/**
 * @author WMXPY
 * @namespace Text
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";

export enum IMBRICATE_TEXT_EDIT_TYPE {

    PUT = "PUT",
}

export type TextEditOperation = {

    readonly action: IMBRICATE_TEXT_EDIT_TYPE;
    readonly value: string;
};

export type TextEditRecord = {

    readonly uniqueIdentifier: string;
    readonly editAt: Date;
    readonly author: ImbricateAuthor;

    readonly operations: TextEditOperation[];
};
