import { PatientData } from "./Patient";

export interface MedStatementModel extends PatientData {
    relatedDiagnosis: string;
    medicalHistory: string;
    KT: string;
    MRT: string;
    FBC: string;
    FEGDC: string;
    MDKDecision: string;
    PT_PHTOperation: string;
    recommendations: string;
    date: Date;
}
