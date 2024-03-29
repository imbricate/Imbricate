/**
 * @author WMXPY
 * @namespace CLI_Extensions
 * @description Working Directory Origin
 */

import { Command, Option } from "commander";
import { FileSystemImbricateOrigin } from "../../origin-implementation/file-system/origin";
import { GlobalManager } from "../global/global-manager";
import { ITerminalController } from "../terminal/definition";

export const addWorkingDirectoryOriginExtension = (
    program: Command,
    globalManager: GlobalManager,
    terminalController: ITerminalController,
): void => {

    const workingDirectoryOrigin = new Option(
        "-w, --working-directory [origin-name]",
        "use current working directory as a origin",
    ).preset("working-directory");

    program.addOption(workingDirectoryOrigin);
    program.on("option:working-directory", (originName?: string) => {

        const fixedOriginName: string = originName ?? "working-directory";

        if (globalManager.verboseConfiguration) {
            terminalController.printInfo(`Using PWD origin with origin name: ${fixedOriginName}`);
        }

        globalManager.putOrigin(
            fixedOriginName,
            FileSystemImbricateOrigin.withBasePath(
                globalManager.workingDirectory,
            ),
        );
    });
};
