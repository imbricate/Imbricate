/**
 * @author WMXPY
 * @namespace Origin
 * @description Interface
 */

export interface IImbricateOrigin {

    /**
     * Origin type
     */
    readonly originType: string;
    /**
     * Unique identifier of the origin
     */
    readonly uniqueIdentifier: string;

    /**
     * Payloads to initialize the origin
     */
    readonly payloads: Record<string, any>;

    /**
     * Dispose the origin, optional
     * This method will be called when the origin is no longer needed
     */
    dispose?(): PromiseLike<void>;
}
