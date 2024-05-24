import { FormNames } from "../Forms";

export interface MedStatementModel {
    id?: string;
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
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

type History = {
    [key in FormNames]?: Omit<
        MedStatementModel,
        "id" | "name" | "surname" | "patronymic" | "birthday"
    >[];
};

export interface MedStatementPatient {
    id: string;
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
    history: History;
}
