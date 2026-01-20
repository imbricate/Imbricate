/**
 * @author WMXPY
 * @namespace Text
 * @description Text
 */

import { IImbricateText, IMBRICATE_TEXT_FEATURE, ImbricateAuthor, ImbricateTextFullFeatureBase, ImbricateTextGetContentOutcome } from "@imbricate/core";

export class ImbricateStackAPIText extends ImbricateTextFullFeatureBase implements IImbricateText {

    public static async create(
        textUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_TEXT_FEATURE[],
        content: string,
        author: ImbricateAuthor,
    ): Promise<ImbricateStackAPIText> {

        return new ImbricateStackAPIText(
            textUniqueIdentifier,
            supportedFeatures,
            content,
            author,
        );
    }

    public static createFromContent(
        textUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_TEXT_FEATURE[],
        content: string,
        author: ImbricateAuthor,
    ): ImbricateStackAPIText {

        return new ImbricateStackAPIText(
            textUniqueIdentifier,
            supportedFeatures,
            content,
            author,
        );
    }

    private readonly _textUniqueIdentifier: string;

    private _content: string;
    private _author: ImbricateAuthor;

    public readonly supportedFeatures: IMBRICATE_TEXT_FEATURE[];

    private constructor(
        textUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_TEXT_FEATURE[],
        content: string,
        author: ImbricateAuthor,
    ) {

        super();

        this._textUniqueIdentifier = textUniqueIdentifier;
        this._content = content;
        this._author = author;

        this.supportedFeatures = supportedFeatures;
    }

    public get uniqueIdentifier(): string {
        return this._textUniqueIdentifier;
    }

    public get author(): ImbricateAuthor {
        return this._author;
    }

    public async getContent(): Promise<ImbricateTextGetContentOutcome> {

        return {
            content: this._content,
        };
    }
}
