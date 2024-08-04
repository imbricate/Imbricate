/**
 * @author WMXPY
 * @namespace PageVariant
 * @description Extension
 */

import { IMBRICATE_PAGE_VARIANT_LANGUAGE } from "./definition";

const fixExtension = (
    extension: string,
    withDot: boolean,
): string => {

    if (withDot) {
        return `.${extension}`;
    }

    return extension;
};

export const getImbricatePageVariantLanguageExtension = (
    language: IMBRICATE_PAGE_VARIANT_LANGUAGE,
    withDot: boolean = true,
): string => {

    switch (language) {

        case IMBRICATE_PAGE_VARIANT_LANGUAGE.TEXT: return fixExtension("txt", withDot);
        case IMBRICATE_PAGE_VARIANT_LANGUAGE.MARKDOWN: return fixExtension("md", withDot);
        case IMBRICATE_PAGE_VARIANT_LANGUAGE.LATEX: return fixExtension("tex", withDot);
    }

    return fixExtension("unknown", withDot);
};
