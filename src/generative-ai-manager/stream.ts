/**
 * @namespace GenerativeAIManager
 * @description Stream
 */

import { ImbricateGenerativeAIResponseStreamEvent } from "./definition";

export class ImbricateGenerativeAIManagerStream
    implements AsyncIterable<ImbricateGenerativeAIResponseStreamEvent> {

    [Symbol.asyncIterator](): AsyncIterator<ImbricateGenerativeAIResponseStreamEvent, any, any> {
        throw new Error("Method not implemented.");
    }

    readonly stream: string;
}
