/**
 * @author WMXPY
 * @namespace ScriptManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateScriptManagerCapability =
    Record<IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY {

    CREATE_SCRIPT = "imbricate.origin.script.create",
    PUT_SCRIPT = "imbricate.origin.script.put",
    RENAME_SCRIPT = "imbricate.origin.script.rename",
    DELETE_SCRIPT = "imbricate.origin.script.delete",
    GET_SCRIPT = "imbricate.origin.script.get",
    LIST_SCRIPTS = "imbricate.origin.script.list",
}

export const ImbricateScriptManagerCapabilityList: IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.CREATE_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.PUT_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.RENAME_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.DELETE_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.GET_SCRIPT,
    IMBRICATE_SCRIPT_MANAGER_CAPABILITY_KEY.LIST_SCRIPTS,
];
