/**
 * @author WMXPY
 * @description Definition
 */

import { ImbricateAuthor, ImbricateOriginPersistenceOrigin } from "@imbricate/core";

export type StackUpOriginPersistenceOrigin = {

    readonly originIdentifierOverride?: string;
} & ImbricateOriginPersistenceOrigin;

export type StackUpConfig = {

    readonly corsOriginList?: string[];

    readonly originPersistencies: StackUpOriginPersistenceOrigin[];

    readonly authenticationSecret: string;
    readonly author: ImbricateAuthor;
};
