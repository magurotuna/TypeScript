//// [tests/cases/compiler/spreadOfInstantiatedMappedMember.ts] ////

//// [spreadOfInstantiatedMappedMember.ts]
// Two instantiations of a generic function each return a spread of the
// same mapped type member. Spreading a union of those return types orders
// the resulting object types by their members.

type Member = { [F in "text"]: { filter: F } }["text"];

function wrap<T extends "text" | "other">() {
    return { ...({ filter: "text" } as Member) };
}

declare const token: ReturnType<typeof wrap> | ReturnType<typeof wrap<"text">>;
export const spread = { ...token };


//// [spreadOfInstantiatedMappedMember.js]
// Two instantiations of a generic function each return a spread of the
// same mapped type member. Spreading a union of those return types orders
// the resulting object types by their members.
function wrap() {
    return { ...{ filter: "text" } };
}
export const spread = { ...token };
