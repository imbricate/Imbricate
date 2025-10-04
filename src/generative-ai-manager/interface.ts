/**
 * @namespace GenerativeAIManager
 * @description Interface
 */

import { ImbricateGenerativeAIManagerStream } from "./stream";

export interface IImbricateGenerativeAIManager {

    streamTextCompletion(
        prompt: string,
    ): ImbricateGenerativeAIManagerStream;
}
