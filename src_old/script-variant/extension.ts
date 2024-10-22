/**
 * @author WMXPY
 * @namespace ScriptVariant
 * @description Extension
 */

import { IMBRICATE_SCRIPT_VARIANT_LANGUAGE } from "./definition";

const fixExtension = (
    extension: string,
    withDot: boolean,
): string => {

    if (withDot) {
        return `.${extension}`;
    }

    return extension;
};

export const getImbricateScriptVariantLanguageExtension = (
    language: IMBRICATE_SCRIPT_VARIANT_LANGUAGE,
    withDot: boolean = true,
): string => {

    switch (language) {

        case IMBRICATE_SCRIPT_VARIANT_LANGUAGE.JAVASCRIPT: return fixExtension("js", withDot);
        case IMBRICATE_SCRIPT_VARIANT_LANGUAGE.TYPESCRIPT: return fixExtension("ts", withDot);
    }

    return fixExtension("unknown", withDot);
};
