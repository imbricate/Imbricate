/**
 * @author WMXPY
 * @namespace Static
 * @description Base Class
 */

import { ImbricateAuthor } from "../../author/definition";
import { IMBRICATE_STATIC_MIME_TYPE } from "../definition";
import { IMBRICATE_STATIC_FEATURE } from "../feature";
import { IImbricateStatic } from "../interface";
import { ImbricateStaticGetContentOutcome } from "../outcome";

export abstract class ImbricateStaticFullFeatureBase implements IImbricateStatic {

    public abstract readonly uniqueIdentifier: string;
    public abstract readonly mimeType: IMBRICATE_STATIC_MIME_TYPE;

    public readonly supportedFeatures: IMBRICATE_STATIC_FEATURE[] = [

        IMBRICATE_STATIC_FEATURE.STATIC_GET_AUTHOR,
        IMBRICATE_STATIC_FEATURE.STATIC_GET_CONTENT,
    ];

    public abstract readonly author: ImbricateAuthor;
    public abstract getContentInBase64(): PromiseLike<ImbricateStaticGetContentOutcome<string>>;
}
