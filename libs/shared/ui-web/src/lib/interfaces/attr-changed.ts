interface AttrChangedValue {
  name: string;
  prev: string | null;
  next: string | null;
}

interface AttrChanged {
  attrChanged(value: AttrChangedValue): void;
}

export type { AttrChangedValue, AttrChanged };
