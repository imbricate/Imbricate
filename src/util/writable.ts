/**
 * @author WMXPY
 * @namespace Util
 * @description Writable
 */

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
