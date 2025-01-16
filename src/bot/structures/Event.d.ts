import type { MappedEvents } from "@discordjs/core";
import type { SkyHelper } from "./SkyHelper.ts";
export interface Event<T extends keyof MappedEvents = keyof MappedEvents> {
  name: T;
  once?: boolean;
  execute: (client: SkyHelper, ...args: MappedEvents[T]) => Promise<void>;
}
