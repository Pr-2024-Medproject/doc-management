import { History } from "./History";

export interface Patient extends PatientData {
    id: string;
    history: History;
}

export interface PatientData {
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
    age: number;
    address: string;
    job: string;
    hospitalizationDate: Date;
    dischargeDate: Date;
    hospitalizationDiagnosis: string;
    mainDiagnosis: string;
    complicationsDiagnosis: string;
    relatedDiagnosis: string;
    MKBcipher: string;
    operationDate: Date;
    operationName: string;
    LT_PHTDate: Date;
    PHTscheme: string;
    histology_cytology: string;
    treatingDoctor: string;
    departmentHead: string;
    actingDepartmentHead: string;

    //Об'єктивний статус (група для полей)
    generalCondition: string;
    constitution: string;
    nutrition: string;
    dyspnea: string;
    skin: string;
    heartSounds: string;
    pulse: string;
    AT: string;
    ChDR: string;
    tongue: string;
    stomach: string;
    liver: string;
    pasternackiSymptom: string;
    chair: string;
    diuresis: string;

    //Locus morbi (група для полей)
    supraclavicularL_v: string;
    axillaryL_v: string;
    suprapulmonaryBreathing: string;
    breathShortness: string;
    percussionally: string;
    dullness: string;
    wheezing: string;

    //Скарги (список)
    complaints: string;
}
