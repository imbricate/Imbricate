/**
 * @author WMXPY
 * @namespace Text
 * @description Manager
 */

import { IImbricateText, IImbricateTextManager, ImbricateTextAuditOptions, ImbricateTextManagerCreateTextOutcome, ImbricateTextManagerFullFeatureBase, ImbricateTextManagerGetTextOutcome, S_TextManager_GetText_NotFound } from "@imbricate/core";
import { digestString } from "../util/digest";
import { getTextByUniqueIdentifier } from "./action";
import { ImbricateFileSystemText } from "./text";

export class ImbricateFileSystemTextManager extends ImbricateTextManagerFullFeatureBase implements IImbricateTextManager {

    public static create(
        basePath: string,
    ): ImbricateFileSystemTextManager {

        return new ImbricateFileSystemTextManager(
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

    public async getText(
        uniqueIdentifier: string,
    ): Promise<ImbricateTextManagerGetTextOutcome> {

        const textContent: string | null = await getTextByUniqueIdentifier(
            this._basePath,
            uniqueIdentifier,
        );

        if (!textContent) {
            return S_TextManager_GetText_NotFound;
        }

        const text: IImbricateText = ImbricateFileSystemText.createFromContent(
            uniqueIdentifier,
            textContent,
        );

        return {
            text,
        };
    }

    public async createText(
        content: string,
        _auditOptions?: ImbricateTextAuditOptions,
    ): Promise<ImbricateTextManagerCreateTextOutcome> {

        const textUniqueIdentifier: string = digestString(content);

        const text: IImbricateText = await ImbricateFileSystemText.createAndSave(
            this._basePath,
            textUniqueIdentifier,
            content,
        );

        return {
            text,
        };
    }
}
