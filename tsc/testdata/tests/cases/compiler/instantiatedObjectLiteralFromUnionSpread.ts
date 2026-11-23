// @strict: true
// @noEmit: true

// A spread of a union of two object types in a generic function makes two
// object literal types that share the symbol of the spread expression. Each
// call of the function instantiates both of them with the same type
// arguments, so the return type of the call is a union of two instantiations
// with equal mappers.

declare const ctx: { a: string; b: undefined } | { a: string; b: number };

function read<K extends string>(fields: readonly K[]) {
    return { ...ctx, projection: fields };
}

export const r = read(["x"]);
