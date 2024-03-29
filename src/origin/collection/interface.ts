/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

export interface IImbricateOriginCollection {

    readonly title: string;
    readonly description?: string;

    findScripts(...onActivities: string[]): Promise<void>;
}
