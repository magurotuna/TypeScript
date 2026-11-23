// @esModuleInterop: true
// @module: commonjs
// @target: esnext
// @noEmit: true

// Each import of a module whose `export =` is a namespace import of a merged
// function and namespace gets its own copy of the module symbol, with the
// same name and declarations. The array and the async function's return type
// are unions of those copies.

// @filename: base.d.ts
declare function f(): void;
declare namespace f { const p: number }
export = f;

// @filename: reexport.d.ts
import * as o from "./base";
export = o;

// @filename: main.ts
import * as a from "./reexport";
import b = require("./reexport");
export const all = [a, b];
export async function g() { return [await import("./reexport"), a]; }
