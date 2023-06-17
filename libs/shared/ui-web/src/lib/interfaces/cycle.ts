interface Cycle {
  connected: () => void;
  disconnected: () => void;
  attrChanged: (name: string, prev: string, next: string) => void;
}
export type { Cycle };
