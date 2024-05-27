import { useState, useCallback } from "react";

function useLocalStorage<T>(initialValue: T = {} as T) {
    const readValue = useCallback(
        (key: string) => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? (JSON.parse(item) as T) : initialValue;
            } catch (error) {
                console.warn(`Error reading localStorage key "${key}":`, error);
                return initialValue;
            }
        },
        [initialValue],
    );

    const [storedValue, setStoredValue] = useState<T>(initialValue);

    const setValue = useCallback(
        (key: string, value: T | ((val: T) => T)) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [storedValue],
    );

    const updateValue = useCallback(
        (key: string, value: Partial<T> | ((val: T) => Partial<T>)) => {
            try {
                const currentStoredValue = readValue(key);
                const valueToUpdate = value instanceof Function ? value(currentStoredValue) : value;
                const updatedValue = { ...currentStoredValue, ...valueToUpdate };
                setStoredValue(updatedValue);
                window.localStorage.setItem(key, JSON.stringify(updatedValue));
            } catch (error) {
                console.warn(`Error updating localStorage key "${key}":`, error);
            }
        },
        [readValue],
    );

    const removeValue = useCallback(
        (key: string) => {
            try {
                window.localStorage.removeItem(key);
                setStoredValue(initialValue);
            } catch (error) {
                console.warn(`Error removing localStorage key "${key}":`, error);
            }
        },
        [initialValue],
    );

    const getKeys = useCallback(() => {
        try {
            return Object.keys(window.localStorage);
        } catch (error) {
            console.warn("Error getting localStorage keys:", error);
            return [];
        }
    }, []);

    const getValues = useCallback(() => {
        try {
            return Object.keys(window.localStorage).map((k) =>
                JSON.parse(window.localStorage.getItem(k)!),
            ) as T[];
        } catch (error) {
            console.warn("Error getting localStorage values:", error);
            return [];
        }
    }, []);

    return {
        storedValue,
        setStoredValue: setValue,
        updateValue,
        readValue,
        removeValue,
        getKeys,
        getValues,
    };
}

export default useLocalStorage;
