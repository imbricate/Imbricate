/**
 * @namespace GenerativeAIManager
 * @description Interface
 */

import { ImbricateGenerativeAIManagerStream } from "./stream";

export interface IImbricateGenerativeAIManager {

    getStreamTextCompletionAvailableModels(): string[];

    streamTextCompletion(
        model: string,
        prompt: string,
    ): ImbricateGenerativeAIManagerStream;
}
