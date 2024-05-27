import { useState, useCallback } from "react";

function useLocalStorage<T>(initialValue: T = {} as T) {
    const [lastValue, setLastValue] = useState<T>(initialValue);

    const readValue = useCallback(
        (key: string) => {
            try {
                const item = window.localStorage.getItem(key);
                const result = item ? (JSON.parse(item) as T) : initialValue;
                setLastValue(result);
                return result;
            } catch (error) {
                console.warn(`Error reading localStorage key "${key}":`, error);
                return initialValue;
            }
        },
        [initialValue],
    );

    const setValue = useCallback(
        (key: string, value: T | ((val: T) => T)) => {
            try {
                const valueToStore = value instanceof Function ? value(lastValue) : value;
                setLastValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [lastValue],
    );

    const updateValue = useCallback(
        (key: string, value: Partial<T> | ((val: T) => Partial<T>)) => {
            try {
                const currentStoredValue = readValue(key);
                const valueToUpdate = value instanceof Function ? value(currentStoredValue) : value;
                const updatedValue = { ...currentStoredValue, ...valueToUpdate };
                setLastValue(updatedValue);
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
                setLastValue(initialValue);
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
        lastValue,
        setLastValue: setValue,
        updateValue,
        readValue,
        removeValue,
        getKeys,
        getValues,
    };
}

export default useLocalStorage;
