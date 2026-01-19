/**
 * @author WMXPY
 * @namespace Static
 * @description Mimetype
 */

import { IMBRICATE_STATIC_MIME_TYPE } from "@imbricate/core";

export const getExtensionFromMimeType = (
    mimeType: IMBRICATE_STATIC_MIME_TYPE,
): string => {

    switch (mimeType) {
        case IMBRICATE_STATIC_MIME_TYPE.IMAGE_PNG:
            return "png";
        case IMBRICATE_STATIC_MIME_TYPE.IMAGE_JPEG:
            return "jpeg";
        case IMBRICATE_STATIC_MIME_TYPE.IMAGE_GIF:
            return "gif";
        case IMBRICATE_STATIC_MIME_TYPE.IMAGE_WEBP:
            return "webp";
        case IMBRICATE_STATIC_MIME_TYPE.VIDEO_MP4:
            return "mp4";
        case IMBRICATE_STATIC_MIME_TYPE.VIDEO_WEBM:
            return "webm";
        case IMBRICATE_STATIC_MIME_TYPE.AUDIO_MP3:
            return "mp3";
        case IMBRICATE_STATIC_MIME_TYPE.AUDIO_WAV:
            return "wav";
        case IMBRICATE_STATIC_MIME_TYPE.TEXT_PLAIN:
            return "txt";
        default:
            throw new Error(`Unsupported mime type: ${mimeType}`);
    }
};

export const getMimeTypeFromExtension = (
    extension: string,
): IMBRICATE_STATIC_MIME_TYPE => {

    switch (extension) {
        case "png":
            return IMBRICATE_STATIC_MIME_TYPE.IMAGE_PNG;
        case "jpeg":
            return IMBRICATE_STATIC_MIME_TYPE.IMAGE_JPEG;
        case "gif":
            return IMBRICATE_STATIC_MIME_TYPE.IMAGE_GIF;
        case "webp":
            return IMBRICATE_STATIC_MIME_TYPE.IMAGE_WEBP;
        case "mp4":
            return IMBRICATE_STATIC_MIME_TYPE.VIDEO_MP4;
        case "webm":
            return IMBRICATE_STATIC_MIME_TYPE.VIDEO_WEBM;
        case "mp3":
            return IMBRICATE_STATIC_MIME_TYPE.AUDIO_MP3;
        case "wav":
            return IMBRICATE_STATIC_MIME_TYPE.AUDIO_WAV;
        case "txt":
            return IMBRICATE_STATIC_MIME_TYPE.TEXT_PLAIN;
        default:
            throw new Error(`Unsupported extension: ${extension}`);
    }
};
