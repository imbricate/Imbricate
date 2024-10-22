/**
 * @author WMXPY
 * @namespace ScriptVariant
 * @description Definition
 */

export enum IMBRICATE_SCRIPT_VARIANT_LANGUAGE {

    JAVASCRIPT = "javascript",
    TYPESCRIPT = "typescript",
}

export const IMBRICATE_SCRIPT_VARIANT_LANGUAGE_LIST: IMBRICATE_SCRIPT_VARIANT_LANGUAGE[] = [

    IMBRICATE_SCRIPT_VARIANT_LANGUAGE.JAVASCRIPT,
    IMBRICATE_SCRIPT_VARIANT_LANGUAGE.TYPESCRIPT,
];

export enum IMBRICATE_SCRIPT_EXECUTE_LAYER {

    ORIGIN = "ORIGIN",
    INTERFACE = "INTERFACE",
}

export const isValidImbricateScriptLanguage = (
    language: unknown,
): language is IMBRICATE_SCRIPT_VARIANT_LANGUAGE => {

    return IMBRICATE_SCRIPT_VARIANT_LANGUAGE_LIST.includes(language as any);
};

export type ImbricateScriptVariant = {

    readonly language: IMBRICATE_SCRIPT_VARIANT_LANGUAGE;

    readonly engine: string;
    readonly version: string;

    readonly layer: IMBRICATE_SCRIPT_EXECUTE_LAYER;
};

export const isImbricateScriptVariant = (
    variant: unknown,
): variant is ImbricateScriptVariant => {

    if (typeof variant !== "object") {
        return false;
    }

    if (!isValidImbricateScriptLanguage((variant as any).language)) {
        return false;
    }

    if (typeof (variant as any).engine !== "string") {
        return false;
    }

    return true;
};
