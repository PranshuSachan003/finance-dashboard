"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {

  const [storedValue, setStoredValue] =
    useState<T>(initialValue);

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {

    try {

      const item =
        window.localStorage.getItem(
          key
        );

      if (item) {

        setStoredValue(
          JSON.parse(item)
        );
      }

    } catch (error) {

      console.error(
        "Error loading localStorage",
        error
      );
    }

  }, [key]);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {

    try {

      window.localStorage.setItem(
        key,
        JSON.stringify(storedValue)
      );

    } catch (error) {

      console.error(
        "Error saving localStorage",
        error
      );
    }

  }, [key, storedValue]);

  return [
    storedValue,
    setStoredValue,
  ] as const;
}