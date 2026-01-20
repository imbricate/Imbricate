/**
 * @author WMXPY
 * @namespace Static
 * @description Manager
 */

import { IImbricateStatic, IImbricateStaticManager, IMBRICATE_STATIC_FEATURE, IMBRICATE_STATIC_MIME_TYPE, ImbricateAuthor, ImbricateStaticManagerCreateStaticOutcome, ImbricateStaticManagerFullFeatureBase, ImbricateStaticManagerGetStaticOutcome, ImbricateStaticManagerGetStaticUriOutcome, rebuildImbricateStaticManagerCreateStaticSymbol, rebuildImbricateStaticManagerGetStaticSymbol } from "@imbricate/core";
import { ImbricateStackAPIAuthentication } from "../definition";
import { axiosClient } from "../util/client";
import { getAxiosErrorSymbol } from "../util/error";
import { buildHeader } from "../util/header";
import { joinUrl } from "../util/path-joiner";
import { ImbricateStackAPIStatic } from "./static";

export class ImbricateStackAPIStaticManager extends ImbricateStaticManagerFullFeatureBase implements IImbricateStaticManager {

    public static create(
        basePath: string,
        authentication: ImbricateStackAPIAuthentication,
    ): ImbricateStackAPIStaticManager {

        return new ImbricateStackAPIStaticManager(
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

    public async getStatic(
        staticUniqueIdentifier: string,
    ): Promise<ImbricateStaticManagerGetStaticOutcome> {

        try {

            const response = await axiosClient.get(joinUrl(
                this._basePath,
                "static",
                staticUniqueIdentifier,
                "base64",
            ), {
                headers: buildHeader(this._authentication),
            });

            const supportedFeatures: IMBRICATE_STATIC_FEATURE[] = response.data.supportedFeatures;

            const base64Content: string = response.data.content;
            const mimeType: IMBRICATE_STATIC_MIME_TYPE = response.data.mimeType;
            const author: ImbricateAuthor = response.data.author;

            const staticInstance: IImbricateStatic = ImbricateStackAPIStatic.createFromBase64Content(
                staticUniqueIdentifier,
                supportedFeatures,
                base64Content,
                mimeType,
                author,
            );

            return {
                static: staticInstance,
            };
        } catch (error) {

            return rebuildImbricateStaticManagerGetStaticSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async createInBase64(
        base64Content: string,
        mimeType: IMBRICATE_STATIC_MIME_TYPE,
    ): Promise<ImbricateStaticManagerCreateStaticOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this._basePath,
                "create-static",
                "base64",
            ), {
                content: base64Content,
                mimeType,
            }, {
                headers: buildHeader(this._authentication),
            });

            const supportedFeatures: IMBRICATE_STATIC_FEATURE[] = response.data.supportedFeatures;

            const staticUniqueIdentifier: string = response.data.staticUniqueIdentifier;
            const author: ImbricateAuthor = response.data.author;

            const staticInstance: IImbricateStatic = await ImbricateStackAPIStatic.create(
                staticUniqueIdentifier,
                supportedFeatures,
                base64Content,
                mimeType,
                author,
            );

            return {
                static: staticInstance,
            };
        } catch (error) {

            return rebuildImbricateStaticManagerCreateStaticSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async getStaticUri(
        staticUniqueIdentifier: string,
    ): Promise<ImbricateStaticManagerGetStaticUriOutcome> {

        const uri: string = joinUrl(
            this._basePath,
            "static",
            staticUniqueIdentifier,
        );

        const securityAppendedUri: string = `${uri}?authentication=${this._authentication.value}`;

        return {
            uri: securityAppendedUri,
        };
    }
}
