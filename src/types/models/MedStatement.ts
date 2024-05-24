import { PatientData } from "./Patient";

export interface MedStatementModel extends PatientData {
    address: string;
    job: string;
    hospitalizationDate: Date;
    dischargeDate: Date;
    mainDiagnosis: string;
    complicationsDiagnosis: string;
    relatedDiagnosis: string;
    complaints: string;
    medicalHistory: string;
    KT: string;
    MRT: string;
    FBC: string;
    FEGDC: string;
    histology: string;
    MDKDecision: string;
    PT_PHTOperation: string;
    recommendations: string;
    date: Date;
    doctor: string;
}
