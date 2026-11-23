// @esModuleInterop: true
// @module: commonjs
// @target: esnext
// @noEmit: true

// The type of a dynamic import of an `export =` module with an added `default`
// property is an object type that contains an object literal. A variable
// initialized from it holds the widened copy of that type. An array holding
// both the import expression and the variable has the original type and the
// widened copy as element types.

// @filename: mod.d.ts
declare const mod: { a: number };
export = mod;

// @filename: main.ts
async function f() {
    const widened = await import("./mod");
    return [await import("./mod"), widened];
}
