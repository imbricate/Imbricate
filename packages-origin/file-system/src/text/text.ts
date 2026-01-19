/**
 * @author WMXPY
 * @namespace Text
 * @description Text
 */

import { IImbricateText, ImbricateTextContentOnlyBase, ImbricateTextGetContentOutcome } from "@imbricate/core";
import { putText } from "./action";

export class ImbricateFileSystemText extends ImbricateTextContentOnlyBase implements IImbricateText {

    public static async createAndSave(
        basePath: string,
        textUniqueIdentifier: string,
        content: string,
    ): Promise<ImbricateFileSystemText> {

        await putText(basePath, textUniqueIdentifier, content);

        return new ImbricateFileSystemText(
            textUniqueIdentifier,
            content,
        );
    }

    public static createFromContent(
        textUniqueIdentifier: string,
        content: string,
    ): ImbricateFileSystemText {

        return new ImbricateFileSystemText(
            textUniqueIdentifier,
            content,
        );
    }

    private readonly _textUniqueIdentifier: string;

    private _content: string;

    private constructor(
        textUniqueIdentifier: string,
        content: string,
    ) {

        super();

        this._textUniqueIdentifier = textUniqueIdentifier;

        this._content = content;
    }

    public get uniqueIdentifier(): string {
        return this._textUniqueIdentifier;
    }

    public async getContent(): Promise<ImbricateTextGetContentOutcome> {

        return {
            content: this._content,
        };
    }
}
