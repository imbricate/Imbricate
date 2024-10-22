/**
 * @author WMXPY
 * @namespace ExecutableManager
 * @description Definition
 */

import { ImbricateCapability } from "../capability/definition";

export type ImbricateExecutableManagerCapability =
    Record<IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY {

    EXECUTE_SCRIPT = "imbricate.executable-manager.execute-script",
    EXECUTE_SNIPPET = "imbricate.executable-manager.execute-snippet",
}

export const ImbricateExecutableManagerCapabilityList: IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY[] = [

    IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY.EXECUTE_SCRIPT,
    IMBRICATE_EXECUTABLE_MANAGER_CAPABILITY_KEY.EXECUTE_SNIPPET,
];
