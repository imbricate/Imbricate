/**
 * @author WMXPY
 * @namespace Static
 * @description Static
 */

import { IImbricateStatic, IMBRICATE_STATIC_FEATURE, IMBRICATE_STATIC_MIME_TYPE, ImbricateAuthor, ImbricateStaticFullFeatureBase, ImbricateStaticGetContentOutcome } from "@imbricate/core";

export class ImbricateStackAPIStatic extends ImbricateStaticFullFeatureBase implements IImbricateStatic {

    public static async create(
        staticUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_STATIC_FEATURE[],
        base64Content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        author: ImbricateAuthor,
    ): Promise<ImbricateStackAPIStatic> {

        return new ImbricateStackAPIStatic(
            staticUniqueIdentifier,
            supportedFeatures,
            base64Content,
            mimeType,
            author,
        );
    }

    public static createFromBase64Content(
        staticUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_STATIC_FEATURE[],
        base64Content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        author: ImbricateAuthor,
    ): ImbricateStackAPIStatic {

        return new ImbricateStackAPIStatic(
            staticUniqueIdentifier,
            supportedFeatures,
            base64Content,
            mimeType,
            author,
        );
    }

    private readonly _staticUniqueIdentifier: string;

    private _base64Content: string;
    private _mimeType: IMBRICATE_STATIC_MIME_TYPE;
    private _author: ImbricateAuthor;

    public readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[];

    private constructor(
        staticUniqueIdentifier: string,
        supportedFeatures: IMBRICATE_STATIC_FEATURE[],
        base64Content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        author: ImbricateAuthor,
    ) {

        super();

        this._staticUniqueIdentifier = staticUniqueIdentifier;
        this._base64Content = base64Content;
        this._mimeType = mimeType;
        this._author = author;

        this.supportedFeatures = supportedFeatures;
    }

    public get uniqueIdentifier(): string {
        return this._staticUniqueIdentifier;
    }

    public get mimeType(): IMBRICATE_STATIC_MIME_TYPE {
        return this._mimeType;
    }

    public get author(): ImbricateAuthor {
        return this._author;
    }

    public async getContentInBase64(): Promise<ImbricateStaticGetContentOutcome<string>> {

        return {
            content: this._base64Content,
        };
    }
}
