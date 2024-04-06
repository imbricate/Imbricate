/**
 * @author WMXPY
 * @namespace Collection
 * @description Definition
 */

export enum IMBRICATE_COLLECTION_EVENT_TYPE {

    PAGE_CREATED = "PAGE_CREATED",
}

export enum IMBRICATE_COLLECTION_TRIGGER_TYPE {

    SCRIPT = "SCRIPT",
}

export type ImbricateCollectionEventScriptPayload = {

    readonly scriptIdentifier: string;
    readonly fixedParameters: Record<string, any>;
};

export type ImbricateCollectionEventPayload<T extends IMBRICATE_COLLECTION_TRIGGER_TYPE> =
    T extends IMBRICATE_COLLECTION_TRIGGER_TYPE.SCRIPT ? ImbricateCollectionEventScriptPayload
    : never;

export type ImbricateCollectionEvent<T extends IMBRICATE_COLLECTION_TRIGGER_TYPE> = {

    readonly eventType: IMBRICATE_COLLECTION_EVENT_TYPE;

    readonly triggerType: T;
    readonly payload: ImbricateCollectionEventPayload<T>;
};
