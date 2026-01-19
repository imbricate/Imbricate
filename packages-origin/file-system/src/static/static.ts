/**
 * @author WMXPY
 * @namespace Static
 * @description Static
 */

import { IImbricateStatic, IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticContentOnlyBase, ImbricateStaticGetContentOutcome } from "@imbricate/core";
import { putStatic } from "./action";
import { getExtensionFromMimeType } from "./mimetype";

export class ImbricateFileSystemStatic extends ImbricateStaticContentOnlyBase implements IImbricateStatic {

    public static async createAndSave(
        basePath: string,
        staticUniqueIdentifier: string,
        content: Buffer,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
    ): Promise<ImbricateFileSystemStatic> {

        const extension: string = getExtensionFromMimeType(mimeType);
        const fixedIdentifier: string = `${staticUniqueIdentifier}.${extension}`;

        await putStatic(basePath, fixedIdentifier, content);

        return new ImbricateFileSystemStatic(
            fixedIdentifier,
            content,
            mimeType,
        );
    }

    public static createFromContent(
        staticUniqueIdentifier: string,
        content: Buffer,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
    ): ImbricateFileSystemStatic {

        return new ImbricateFileSystemStatic(
            staticUniqueIdentifier,
            content,
            mimeType,
        );
    }

    private readonly _staticUniqueIdentifier: string;

    private _content: Buffer;
    private _mimeType: IMBRICATE_STATIC_MIME_TYPE;

    private constructor(
        staticUniqueIdentifier: string,
        content: Buffer,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
    ) {

        super();

        this._staticUniqueIdentifier = staticUniqueIdentifier;

        this._content = content;
        this._mimeType = mimeType;
    }

    public get uniqueIdentifier(): string {
        return this._staticUniqueIdentifier;
    }

    public get mimeType(): IMBRICATE_STATIC_MIME_TYPE {
        return this._mimeType;
    }

    public async getContentInBase64(): Promise<ImbricateStaticGetContentOutcome<string>> {

        return {
            content: this._content.toString("base64"),
        };
    }
}
