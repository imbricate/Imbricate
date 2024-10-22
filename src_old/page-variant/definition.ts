/**
 * @author WMXPY
 * @namespace PageVariant
 * @description Definition
 */

export enum IMBRICATE_PAGE_VARIANT_LANGUAGE {

    TEXT = "text",
    MARKDOWN = "markdown",
    LATEX = "latex",
}

export const IMBRICATE_PAGE_VARIANT_LANGUAGE_LIST: IMBRICATE_PAGE_VARIANT_LANGUAGE[] = [

    IMBRICATE_PAGE_VARIANT_LANGUAGE.TEXT,
    IMBRICATE_PAGE_VARIANT_LANGUAGE.MARKDOWN,
    IMBRICATE_PAGE_VARIANT_LANGUAGE.LATEX,
];

export const isValidImbricatePageVariantLanguage = (
    language: unknown,
): language is IMBRICATE_PAGE_VARIANT_LANGUAGE => {

    return IMBRICATE_PAGE_VARIANT_LANGUAGE_LIST.includes(language as any);
};

export type ImbricatePageVariant = {

    readonly language: IMBRICATE_PAGE_VARIANT_LANGUAGE;
};

export const isImbricatePageVariant = (
    variant: unknown,
): variant is ImbricatePageVariant => {

    if (typeof variant !== "object") {
        return false;
    }

    if (!isValidImbricatePageVariantLanguage((variant as any).language)) {
        return false;
    }

    return true;
};
