/**
 * @author WMXPY
 * @namespace Author
 * @description Definition
 */

export type ImbricateAuthorAttributes = Record<string, string>;

export type ImbricateAuthor = {

    readonly avatar?: string;
    readonly displayName?: string;

    readonly identifier: string;

    readonly attributes: ImbricateAuthorAttributes;
};
