/**
 * @namespace Static
 * @description Definition
 */

import { ImbricateAuthor } from "../author/definition";

export type ImbricateStaticAuditOptions = {

    /**
     * Static author, this is controlled an function may vary by origin
     */
    readonly author?: ImbricateAuthor;
};

export enum IMBRICATE_STATIC_MIME_TYPE {

    IMAGE_PNG = "image/png",
    IMAGE_JPEG = "image/jpeg",
    IMAGE_GIF = "image/gif",
    IMAGE_WEBP = "image/webp",
    VIDEO_MP4 = "video/mp4",
    VIDEO_WEBM = "video/webm",
    AUDIO_MP3 = "audio/mpeg",
    AUDIO_WAV = "audio/wav",
    TEXT_PLAIN = "text/plain",
}
