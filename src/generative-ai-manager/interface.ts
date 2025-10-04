/**
 * @namespace GenerativeAIManager
 * @description Interface
 */

import { ImbricateGenerativeAIManagerStream } from "./stream";

export interface IImbricateGenerativeAIManager {

    completeText(
        prompt: string,
    ): ImbricateGenerativeAIManagerStream;
}
