/**
 * @namespace Author
 * @description Definition
 */

export type ImbricateAuthor = {

    readonly category: string;
    readonly identifier: string;

    readonly isAutomation: boolean;

    readonly onBehalfOf?: ImbricateAuthor;
};
