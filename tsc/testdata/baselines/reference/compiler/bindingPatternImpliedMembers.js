//// [tests/cases/compiler/bindingPatternImpliedMembers.ts] ////

//// [bindingPatternImpliedMembers.ts]
// Two function parameters are object binding patterns with the same
// property name. Indexing the parameter list with number unions those
// parameter types.

function f({ a }, { a: b }) {}

type Params<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export type Both = Params<typeof f>[number];


//// [bindingPatternImpliedMembers.js]
// Two function parameters are object binding patterns with the same
// property name. Indexing the parameter list with number unions those
// parameter types.
function f({ a }, { a: b }) { }
export {};
