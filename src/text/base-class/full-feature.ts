/**
 * @author WMXPY
 * @namespace Text
 * @description Base Class
 */

import { ImbricateAuthor } from "../../author/definition";
import { IMBRICATE_TEXT_FEATURE } from "../feature";
import { IImbricateText } from "../interface";
import { ImbricateTextGetContentOutcome } from "../outcome";

export abstract class ImbricateTextFullFeatureBase implements IImbricateText {

    public abstract readonly uniqueIdentifier: string;

    public readonly features: IMBRICATE_TEXT_FEATURE[] = [

        IMBRICATE_TEXT_FEATURE.TEXT_GET_AUTHOR,
        IMBRICATE_TEXT_FEATURE.TEXT_GET_CONTENT,
    ];

    public abstract readonly author: ImbricateAuthor;
    public abstract getContent(): PromiseLike<ImbricateTextGetContentOutcome>;
}
