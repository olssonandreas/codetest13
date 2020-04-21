import { useState, useEffect } from 'react';

export default (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // clean up function called every time useEffect is called
      // resetting the timeout.
      // so the hook will only return the debounce value once it manages to complete the timeout
      return () => {
        clearTimeout(handler);
      };
    },

    [value, delay]
  );

  return debouncedValue;
}
