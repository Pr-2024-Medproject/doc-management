import { create } from "zustand";
import { Patient } from "../types/models/Patient";
import { updatePatientArray } from "../services/PatientServiceImpl";
import { getAllValues } from "../services/LocalstorageServiceImlp";

export interface StoreState {
    selectedPatient: Patient | null;
    patients: Patient[];
    setSelectedPatient: (patient: Patient | null) => void;
    savePatient: (key: string, patient: Patient) => void;
}

export const useStore = create<StoreState>()((set) => ({
    selectedPatient: null,

    patients: getAllValues(),

    setSelectedPatient: (patient: Patient | null) =>
        set((_state) => ({ selectedPatient: patient })),

    savePatient: (key: string, value: Patient | (() => Patient)) => {
        try {
            const valueToStore = value instanceof Function ? value() : value;

            window.localStorage.setItem(key, JSON.stringify(valueToStore));

            set((state) => ({
                patients: updatePatientArray(state.patients, valueToStore),
                selectedPatient: valueToStore,
            }));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    },
}));
