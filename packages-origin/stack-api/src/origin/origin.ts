/**
 * @author WMXPY
 * @namespace Origin
 * @description Origin
 */

import { IImbricateDatabaseManager, IImbricateOrigin, IImbricateStaticManager, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome, ImbricateOriginFullFeatureWithActionBase, ImbricateOriginSearchOutcome, rebuildImbricateCommonQueryOriginActionsSymbol, rebuildImbricateOriginActionOutcomeSymbol, rebuildImbricateOriginSearchSymbol } from "@imbricate/core";
import { ImbricateStackAPIDatabaseManager } from "../database/manager";
import { ImbricateStackAPIStaticManager } from "../static/manager";
import { ImbricateStackAPITextManager } from "../text/manager";
import { axiosClient } from "../util/client";
import { digestString } from "../util/digest";
import { getAxiosErrorSymbol } from "../util/error";
import { buildHeader } from "../util/header";
import { joinUrl } from "../util/path-joiner";

export class ImbricateStackAPIOrigin extends ImbricateOriginFullFeatureWithActionBase implements IImbricateOrigin {

    public static create(
        payloads: Record<string, any>,
    ): ImbricateStackAPIOrigin {

        return new ImbricateStackAPIOrigin(
            payloads,
        );
    }

    private constructor(
        payloads: Record<string, any>,
    ) {

        super();

        this.payloads = payloads;
    }

    public readonly payloads: Record<string, any>;

    public get uniqueIdentifier(): string {

        return digestString(this.payloads.basePath);
    }

    public getDatabaseManager(): IImbricateDatabaseManager {

        return ImbricateStackAPIDatabaseManager.create(
            this.payloads.basePath,
            this.payloads.authentication,
        );
    }

    public getTextManager(): ImbricateStackAPITextManager {

        return ImbricateStackAPITextManager.create(
            this.payloads.basePath,
            this.payloads.authentication,
        );
    }

    public getStaticManager(): IImbricateStaticManager {

        return ImbricateStackAPIStaticManager.create(
            this.payloads.basePath,
            this.payloads.authentication,
        );
    }

    public async search(
        keyword: string,
    ): Promise<ImbricateOriginSearchOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this.payloads.basePath,
                "search",
            ), {
                keyword,
            }, {
                headers: buildHeader(this.payloads.authentication),
            });

            return {
                items: response.data.result.items,
            };
        } catch (error) {

            return rebuildImbricateOriginSearchSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async queryOriginActions(
        query: ImbricateCommonQueryOriginActionsQuery,
    ): Promise<ImbricateCommonQueryOriginActionsOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this.payloads.basePath,
                "query-origin-actions",
            ), {
                query,
            }, {
                headers: buildHeader(this.payloads.authentication),
            });

            return {
                actions: response.data.actions,
                count: response.data.count,
            };
        } catch (error) {

            return rebuildImbricateCommonQueryOriginActionsSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }

    public async executeOriginAction(
        input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        try {

            const response = await axiosClient.post(joinUrl(
                this.payloads.basePath,
                "execute-origin-action",
            ), {
                actionIdentifier: input.actionIdentifier,
                parameters: input.parameters,
            }, {
                headers: buildHeader(this.payloads.authentication),
            });

            return {
                response: response.data.response,
                outputs: response.data.outputs,
                references: response.data.references,
            };
        } catch (error) {

            return rebuildImbricateOriginActionOutcomeSymbol(
                getAxiosErrorSymbol(error),
            );
        }
    }
}
