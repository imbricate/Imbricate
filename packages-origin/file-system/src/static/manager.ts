/**
 * @author WMXPY
 * @namespace Static
 * @description Manager
 */

import { IImbricateStatic, IImbricateStaticManager, IMBRICATE_STATIC_MIME_TYPE, ImbricateStaticAuditOptions, ImbricateStaticManagerCreateStaticOutcome, ImbricateStaticManagerFullFeatureBlobBase, ImbricateStaticManagerGetStaticOutcome, S_StaticManager_GetStatic_NotFound } from "@imbricate/core";
import { digestBuffer } from "../util/digest";
import { getStaticByUniqueIdentifier } from "./action";
import { getMimeTypeFromExtension } from "./mimetype";
import { ImbricateFileSystemStatic } from "./static";

export class ImbricateFileSystemStaticManager extends ImbricateStaticManagerFullFeatureBlobBase implements IImbricateStaticManager {

    public static create(
        basePath: string,
    ): ImbricateFileSystemStaticManager {

        return new ImbricateFileSystemStaticManager(
            basePath,
        );
    }

    private readonly _basePath: string;

    private constructor(
        basePath: string,
    ) {

        super();

        this._basePath = basePath;
    }

    public async getStatic(
        staticUniqueIdentifier: string,
    ): Promise<ImbricateStaticManagerGetStaticOutcome> {

        const content: Buffer | null = await getStaticByUniqueIdentifier(
            this._basePath,
            staticUniqueIdentifier,
        );

        if (!content) {
            return S_StaticManager_GetStatic_NotFound;
        }

        const extension: string = staticUniqueIdentifier.split(".").pop() || "";
        const mimeType: IMBRICATE_STATIC_MIME_TYPE = getMimeTypeFromExtension(extension);

        const staticInstance: IImbricateStatic =
            ImbricateFileSystemStatic.createFromContent(
                staticUniqueIdentifier,
                content,
                mimeType,
            );

        return {
            static: staticInstance,
        };
    }

    public async createInBase64(
        base64Content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
        _auditOptions?: ImbricateStaticAuditOptions,
    ): Promise<ImbricateStaticManagerCreateStaticOutcome> {

        const content: Buffer = Buffer.from(base64Content, "base64");

        const uniqueIdentifier: string = digestBuffer(content);

        const staticInstance: IImbricateStatic = await ImbricateFileSystemStatic.createAndSave(
            this._basePath,
            uniqueIdentifier,
            content,
            mimeType,
        );

        return {
            static: staticInstance,
        };
    }
}
