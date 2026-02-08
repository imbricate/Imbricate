/**
 * @author WMXPY
 * @namespace OriginLoader
 * @description Index
 */

export * from "./built-in-origin-loader";
export * from "./origin-loader";

// Re-export types from core for convenience
export {
    IMBRICATE_ORIGIN_BUILT_IN,
    IMBRICATE_ORIGIN_LOAD_TYPE,
} from "@imbricate/core";

export type {
    ImbricateOriginLoader,
    ImbricateOriginPersistence,
    ImbricateOriginPersistenceOrigin,
} from "@imbricate/core";

