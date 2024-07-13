/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateScriptManagerCapability =
    Record<IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY {

    CREATE_SCRIPT = "imbricate.script-manager.create",
    PUT_SCRIPT = "imbricate.script-manager.put",
    RENAME_SCRIPT = "imbricate.script-manager.rename",
    DELETE_SCRIPT = "imbricate.script-manager.delete",
    GET_SCRIPT = "imbricate.script-manager.get",
    LIST_SCRIPTS = "imbricate.script-manager.list",

    EXECUTE_SCRIPT_SNIPPET = "imbricate.script-manager.execute-script-snippet",

    LIST_SUPPORTED_VARIANTS = "imbricate.script-manager.list-supported-variants",
}

export const ImbricateScriptManagerCapabilityList: IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.CREATE_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.PUT_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.RENAME_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.DELETE_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.GET_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,

    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.EXECUTE_SCRIPT_SNIPPET,

    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SUPPORTED_VARIANTS,
];
