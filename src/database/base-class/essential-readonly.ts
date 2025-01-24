/**
 * @author WMXPY
 * @namespace Database
 * @description Essential Readonly
 */

import { ImbricateDatabaseFeatureNotSupportedError } from "../../error/database/feature-not-supported";
import { ImbricatePropertyRecord } from "../../property/map";
import { ImbricateDatabaseAuditOptions } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseCreateDocumentOutcome, ImbricateDatabasePutSchemaOutcome, ImbricateDatabaseRemoveDocumentOutcome } from "../outcome";
import { ImbricateDatabaseSchema } from "../schema";
import { ImbricateDatabaseEssentialBase } from "./essential";

export abstract class ImbricateDatabaseEssentialReadOnlyBase extends ImbricateDatabaseEssentialBase implements IImbricateDatabase {

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,
    ];

    public putSchema(
        _schema: ImbricateDatabaseSchema,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabasePutSchemaOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_PUT_SCHEMA,
        );
    }

    public createDocument(
        _properties: ImbricatePropertyRecord,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseCreateDocumentOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_CREATE_DOCUMENT,
        );
    }

    public removeDocument(
        _uniqueIdentifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<ImbricateDatabaseRemoveDocumentOutcome> {

        throw ImbricateDatabaseFeatureNotSupportedError.withFeature(
            IMBRICATE_DATABASE_FEATURE.DATABASE_DELETE_DOCUMENT,
        );
    }
}
