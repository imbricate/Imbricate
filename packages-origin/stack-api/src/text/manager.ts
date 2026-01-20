/**
 * @author WMXPY
 * @namespace Text
 * @description Manager
 */

import { IImbricateText, IImbricateTextManager, IMBRICATE_TEXT_FEATURE, ImbricateAuthor, ImbricateTextManagerCreateTextOutcome, ImbricateTextManagerFullFeatureBase, ImbricateTextManagerGetTextOutcome, rebuildImbricateTextManagerCreateTextSymbol, rebuildImbricateTextManagerGetTextSymbol } from "@imbricate/core";
import { ImbricateStackAPIAuthentication } from "../definition";
import { axiosClient } from "../util/client";
import { getAxiosErrorSymbol } from "../util/error";
import { buildHeader } from "../util/header";
import { joinUrl } from "../util/path-joiner";
import { ImbricateStackAPIText } from "./text";

export class ImbricateStackAPITextManager extends ImbricateTextManagerFullFeatureBase implements IImbricateTextManager {

    public static create(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
    ): ImbricateStackAPITextManager {

        return new ImbricateStackAPITextManager(
            basePath,
            authentication,
        );
    }

    private readonly _basePath: string;
    private readonly _authentication: ImbricateStackAPIAuthentication;

    private constructor(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
    ) {

        super();

        this._basePath = basePath;
        this._authentication = authentication;
    }

    public async getText(
        uniqueIdentifier: string,
    ): Promise<ImbricateTextManagerGetTextOutcome> {

        try {

            const response = await axiosClient.get(joinUrl(
                this._basePath,
                "text",
                uniqueIdentifier,
            ), {
                headers: buildHeader(this._authentication),
            });

            const supportedFeatures: IMBRICATE_TEXT_FEATURE[] = response.data.supportedFeatures;

            const content: string = response.data.content;
            const author: ImbricateAuthor = response.data.author;

            const text: IImbricateText = ImbricateStackAPIText.createFromContent(
                uniqueIdentifier,
                supportedFeatures,
                content,
                author,
            );

            return {
                text,
            };
        } catch (error) {

            return rebuildImbricateTextManagerGetTextSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }
    public async createText(
        content: string,
    ): Promise<ImbricateTextManagerCreateTextOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "create-text",
            ), {
                content,
            }, {
                headers: buildHeader(this._authentication),
            });

            const supportedFeatures: IMBRICATE_TEXT_FEATURE[] = response.data.supportedFeatures;

            const textUniqueIdentifier: string = response.data.textUniqueIdentifier;
            const author: ImbricateAuthor = response.data.author;

            const text: IImbricateText = await ImbricateStackAPIText.create(
                textUniqueIdentifier,
                supportedFeatures,
                content,
                author,
            );

            return {
                text,
            };
        } catch (error) {

            return rebuildImbricateTextManagerCreateTextSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }
}
