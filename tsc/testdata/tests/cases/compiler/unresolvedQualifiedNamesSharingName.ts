// @noEmit: true
// @strict: true
// @module: nodenext

import type * as Bidi from "missing-a";
import type { Protocol } from "missing-b";

type CdpEvent = Protocol.Cdp.Event;
export function f(event: Bidi.Event | CdpEvent) {}
