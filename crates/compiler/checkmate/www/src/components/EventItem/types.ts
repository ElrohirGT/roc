import { TypedEmitter } from "tiny-typed-emitter";
import type { Engine, EventEpoch } from "../../engine/engine";
import { GraphMessage } from "../../utils/events";

export interface CommonProps {
  currentEpoch: EventEpoch;
  engine: Engine;
  graphEe: TypedEmitter<GraphMessage>;
}
