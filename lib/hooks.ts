import { RefObject, useRef, useState } from 'react';

export function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

export function useStateRef<S>(defaultValue: S): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef(defaultValue);
  const [state, internalSetState] = useState(defaultValue);
  const setState = (value: S) => {
    internalSetState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}
