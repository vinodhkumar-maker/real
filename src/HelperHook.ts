import { useEffect, useRef, useState } from 'react';

type EmptyValue =
  | null
  | undefined
  | string
  | number
  | boolean
  | object
  | symbol
  | bigint
  | Date
  | RegExp
  | Error
  | Array<unknown>
  | Map<unknown, unknown>
  | Set<unknown>
  | unknown[];

/**
 * Checks if a value is "empty" (null, undefined, empty string/array/object, etc.)
 * @param value - The value to check
 * @returns `true` if the value is empty, `false` otherwise
 */
export function isEmpty(value: EmptyValue): boolean {
  // Handle null and undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Handle strings (including whitespace-only strings)
  if (typeof value === 'string') {
    return value.trim() === '';
  }

  // Handle numbers and booleans
  if (typeof value === 'number' || typeof value === 'boolean') {
    return false; // 0 and false are considered NOT empty
  }

  // Handle arrays and array-like objects
  if (Array.isArray(value) || (typeof value === 'object' && 'length' in value)) {
    return value.length === 0;
  }

  // Handle objects (including plain objects, Date, RegExp, Error, etc.)
  if (typeof value === 'object') {
    // Special cases for built-in objects
    if (value instanceof Date) return false; // Dates are never empty
    if (value instanceof RegExp) return false; // RegExps are never empty
    if (value instanceof Error) return value.message === ''; // Error with no message

    // Plain objects, Map, Set
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }

    // Generic object check
    return Object.keys(value).length === 0;
  }

  // Handle other types (symbol, bigint, function)
  return false;
}

interface UseDebounceOptions {
  dependences?: unknown[]; // Dependencies for the effect
  delay?: number; // Delay in milliseconds (default: 300ms)
  skipFirstRender?: boolean; // Skip the first render (default: false)
}

// useDebounce call function for real-time API calls
export const useDebounce = (
  callback: () => void,
  { dependences = [], delay = 200000, skipFirstRender = true }: UseDebounceOptions,
) => {
  const skipFirstRenderRef = useRef(skipFirstRender);

  useEffect(() => {
    if (skipFirstRenderRef.current) {
      skipFirstRenderRef.current = false;
      return;
    }

    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [...dependences, delay]); // eslint-disable-line react-hooks/exhaustive-deps
};

// useDebounce call back function

export const Debouncer = (callback: () => void, options: { delay: number }) => {
  let timeoutId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, options.delay);
  };
};

// Debounce function

export function UseDebouncerHook<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
