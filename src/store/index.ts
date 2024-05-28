import { create } from "zustand";
import { Patient } from "../types/models/Patient";

interface StoreState {
    selectedPatient: Patient | null;
    setSelectedPatient: (patient: Patient) => void;
}

export const useStore = create<StoreState>()((set) => ({
    selectedPatient: null,
    setSelectedPatient: (patient: Patient) => set((_state) => ({ selectedPatient: patient })),
}));
