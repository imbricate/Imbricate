/**
 * @author WMXPY
 * @description Definition
 */

import { ImbricateAuthor, ImbricateOriginPersistenceOrigin } from "@imbricate/core";

export type StackUpConfig = {

    readonly corsOriginList?: string[];

    readonly originPersistencies: ImbricateOriginPersistenceOrigin[];

    readonly authenticationSecret: string;
    readonly author: ImbricateAuthor;
};
