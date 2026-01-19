/**
 * @author WMXPY
 * @namespace Origin
 * @description Origin
 */

import { IImbricateDatabaseManager, IImbricateOrigin, IImbricateStaticManager, IMBRICATE_ORIGIN_ACTION_RESULT_STATUS, ImbricateCommonQueryOriginActionsOutcome, ImbricateCommonQueryOriginActionsQuery, ImbricateOriginActionInput, ImbricateOriginActionOutcome, ImbricateOriginFullFeatureWithActionBase, ImbricateOriginSearchOutcome, S_Action_ActionNotFound } from "@imbricate/core";
import { ImbricateFileSystemDatabaseManager } from "../database/manager";
import { ImbricateFileSystemStaticManager } from "../static/manager";
import { ImbricateFileSystemTextManager } from "../text/manager";
import { digestString } from "../util/digest";
import { GET_BASE_PATH_ORIGIN_ACTION_IDENTIFIER, originExecuteGetBasePathOriginAction } from "./origin-action/get-base-path";
import { getOriginOriginAction } from "./origin-actions";
import { performSearch } from "./search";

export class ImbricateFileSystemOrigin extends ImbricateOriginFullFeatureWithActionBase implements IImbricateOrigin {

    public static create(
        payloads: Record<string, any>,
    ): ImbricateFileSystemOrigin {

        return new ImbricateFileSystemOrigin(
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

        return ImbricateFileSystemDatabaseManager.create(
            this.payloads.author,
            this.payloads.basePath,
        );
    }

    public getTextManager(): ImbricateFileSystemTextManager {

        return ImbricateFileSystemTextManager.create(
            this.payloads.basePath,
        );
    }

    public getStaticManager(): IImbricateStaticManager {

        return ImbricateFileSystemStaticManager.create(
            this.payloads.basePath,
        );
    }

    public async search(
        keyword: string,
    ): Promise<ImbricateOriginSearchOutcome> {

        const searchResult: ImbricateOriginSearchOutcome = await performSearch(
            keyword,
            this.uniqueIdentifier,
            this.getDatabaseManager(),
            this.getTextManager(),
        );

        return searchResult;
    }

    public async queryOriginActions(
        _query: ImbricateCommonQueryOriginActionsQuery,
    ): Promise<ImbricateCommonQueryOriginActionsOutcome> {

        const originActions = getOriginOriginAction();

        return {
            actions: originActions,
            count: originActions.length,
        };
    }

    public async executeOriginAction(
        input: ImbricateOriginActionInput,
    ): Promise<ImbricateOriginActionOutcome> {

        switch (input.actionIdentifier) {

            case GET_BASE_PATH_ORIGIN_ACTION_IDENTIFIER: {

                return {
                    response: IMBRICATE_ORIGIN_ACTION_RESULT_STATUS.SUCCESS,
                    outputs: [
                        originExecuteGetBasePathOriginAction(
                            this.payloads.basePath,
                            input.parameters,
                        ),
                    ],
                    references: [],
                };
            }
        }

        return S_Action_ActionNotFound;
    }
}
