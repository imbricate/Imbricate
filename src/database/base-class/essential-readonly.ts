/**
 * @author WMXPY
 * @namespace Database
 * @description Essential Readonly
 */

import { IImbricateDocument } from "../../document/interface";
import { DocumentProperties } from "../../document/property";
import { DatabaseEditRecord, ImbricateDatabaseAuditOptions } from "../definition";
import { IMBRICATE_DATABASE_FEATURE } from "../feature";
import { IImbricateDatabase } from "../interface";
import { ImbricateDatabaseSchema } from "../schema";
import { ImbricateDatabaseEssentialBase } from "./essential";

export abstract class ImbricateDatabaseEssentialReadOnlyBase extends ImbricateDatabaseEssentialBase implements IImbricateDatabase {

    public readonly supportedFeatures: IMBRICATE_DATABASE_FEATURE[] = [

        IMBRICATE_DATABASE_FEATURE.DATABASE_GET_DOCUMENT,
    ];

    public putSchema(
        _schema: ImbricateDatabaseSchema,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<DatabaseEditRecord[]> {

        throw new Error("Not implemented");
    }

    public createDocument(
        _properties: DocumentProperties,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<IImbricateDocument> {

        throw new Error("Not implemented");
    }

    public removeDocument(
        _uniqueIdentifier: string,
        _auditOptions?: ImbricateDatabaseAuditOptions,
    ): PromiseLike<void> {

        throw new Error("Not implemented");
    }
}
