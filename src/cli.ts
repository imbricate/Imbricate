/**
 * @author WMXPY
 * @description CLI
 */

import { Command } from "commander";
import { createCollectionCommand } from "./cli/commands/collection";
import { createOriginCommand } from "./cli/commands/origin";
import { ConfigurationManager } from "./cli/configuration/configuration-manager";
import { initializeOrigin } from "./cli/configuration/initialize-origin";
import { IConfigurationManager } from "./cli/configuration/interface";
import { addDirectoryExtension } from "./cli/extensions/directory";
import { addVerboseConfigurationExtension } from "./cli/extensions/verbose-configuration";
import { addWorkingDirectoryOriginExtension } from "./cli/extensions/working-directory-origin";
import { GlobalManager } from "./cli/global/global-manager";
import { ITerminalController } from "./cli/terminal/definition";
import { TTYTerminalController } from "./cli/terminal/terminal";
import { debugLog } from "./cli/util/debug";
import { handleError } from "./cli/util/handle-error";

export const execute = async (): Promise<void> => {

    const ttyTerminalController: ITerminalController =
        await TTYTerminalController.create();

    const configurationManager: IConfigurationManager =
        await ConfigurationManager.fromHomeConfigurationPath(ttyTerminalController);

    await executeWithConfiguration(
        ttyTerminalController,
        configurationManager,
        process.argv,
    );
};

export const executeWithConfiguration = async (
    terminalController: ITerminalController,
    configurationManager: IConfigurationManager,
    commands: string[],
): Promise<void> => {

    try {

        const globalManager = GlobalManager.fromScratch();

        const imbricateProgram = new Command();

        imbricateProgram
            .version("<current-version>")
            .name("imbricate")
            .description("Imbricate CLI");

        imbricateProgram
            .configureHelp({
                showGlobalOptions: true,
            });

        addDirectoryExtension(imbricateProgram, globalManager);
        addVerboseConfigurationExtension(
            imbricateProgram,
            globalManager,
            terminalController,
        );

        addWorkingDirectoryOriginExtension(
            imbricateProgram,
            globalManager,
            terminalController,
        );

        imbricateProgram.addCommand(createCollectionCommand(
            globalManager,
            terminalController,
            configurationManager,
        ));
        imbricateProgram.addCommand(createOriginCommand(
            globalManager,
            terminalController,
            configurationManager,
        ));

        debugLog("Start Imbricate CLI");

        await initializeOrigin(globalManager, configurationManager);

        debugLog("Origin Initialized");

        imbricateProgram.parse(commands);
    } catch (error) {

        handleError(terminalController, error);
    }
};
