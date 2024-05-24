import { PatientData } from "./Patient";

export interface MedStatementModel
    extends Omit<
        PatientData,
        | "MKBcipher"
        | "age"
        | "operationDate"
        | "operationName"
        | "LT_PHTDate"
        | "PHTscheme"
        | "departmentHead"
        | "actingDepartmentHead"
        | "generalCondition"
        | "constitution"
        | "nutrition"
        | "dyspnea"
        | "skin"
        | "heartSounds"
        | "pulse"
        | "AT"
        | "ChDR"
        | "tongue"
        | "stomach"
        | "liver"
        | "pasternackiSymptom"
        | "chair"
        | "diuresis"
        | "supraclavicularL_v"
        | "axillaryL_v"
        | "suprapulmonaryBreathing"
        | "breathShortness"
        | "percussionally"
        | "dullness"
        | "wheezing"
        | "hospitalizationDiagnosis"
    > {
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
