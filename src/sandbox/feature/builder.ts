/**
 * @author WMXPY
 * @namespace Sandbox_Feature
 * @description Builder
 */

import { SandboxImplementation } from "../definition/implementation";
import { SandboxFeature } from "./feature";

export class SandboxFeatureBuilder {

    public static providedByOrigin(): SandboxFeatureBuilder {

        return new SandboxFeatureBuilder(
            "origin",
        );
    }

    public static providedBySandbox(): SandboxFeatureBuilder {

        return new SandboxFeatureBuilder(
            "sandbox",
        );
    }

    public static providedByInterface(): SandboxFeatureBuilder {

        return new SandboxFeatureBuilder(
            "interface",
        );
    }

    public static providedBy(providedBy: string): SandboxFeatureBuilder {

        return new SandboxFeatureBuilder(providedBy);
    }

    private readonly _provideBy: string;

    private _packageName: string;
    private _methodName: string;
    private _implementation: SandboxImplementation;

    private constructor(
        provideBy: string,
    ) {

        this._provideBy = provideBy;

        this._packageName = "";
        this._methodName = "";
        this._implementation = () => null;
    }

    public withPackageName(packageName: string): this {

        this._packageName = packageName;
        return this;
    }

    public withMethodName(methodName: string): this {

        this._methodName = methodName;
        return this;
    }

    public withImplementation(implementation: SandboxImplementation): this {

        this._implementation = implementation;
        return this;
    }

    public build(): SandboxFeature {

        return SandboxFeature.create(
            `${this._provideBy}:${this._packageName}`,
            this._methodName,
            this._implementation,
        );
    }
}
