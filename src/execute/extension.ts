/**
 * @author WMXPY
 * @namespace Execute
 * @description Extension
 */

import { IMBRICATE_EXECUTABLE_VARIANT } from "./definition";

const fixExtension = (
    extension: string,
    withDot: boolean,
): string => {

    if (withDot) {
        return `.${extension}`;
    }

    return extension;
};

export const getImbricateExecutableExtension = (
    variant: IMBRICATE_EXECUTABLE_VARIANT,
    withDot: boolean = true,
): string => {

    switch (variant) {

        case IMBRICATE_EXECUTABLE_VARIANT.JAVASCRIPT_NODE: return fixExtension("js", withDot);
        case IMBRICATE_EXECUTABLE_VARIANT.TYPESCRIPT_NODE: return fixExtension("ts", withDot);
    }

    return fixExtension("unknown", withDot);
};
